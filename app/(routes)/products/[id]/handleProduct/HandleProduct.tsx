'use client';
import { Product } from '@/app/utils/models';
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import arrowLeft from '../../../../public/assets/left-black-arrow.png';
import arrowRight from '../../../../public/assets/right-black-arrow.png';

interface HandleProductProps {
  product: Product;
}

const HandleProduct: React.FC<HandleProductProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [mainImageSize, setMainImageSize] = useState({ width: 0, height: 0 });

  const handlePreviousImageClick = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    } else {
      setCurrentImage(product.images.length - 1);
    }
  };

  const handleNextImageClick = () => {
    if (currentImage < product.images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };
  const handleImageSelect = (index: number) => {
    setCurrentImage(index);
  };

  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref.current?.getBoundingClientRect().width);
      setMainImageSize({
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height,
      });
    }
  }, []);

  return (
    <div className='relative flex w-full flex-col-reverse gap-4 sm:w-[75%] sm:flex-row'>
      <aside className='flex shrink-0 flex-row gap-2 sm:flex-col sm:gap-4'>
        {product.images.map((image, index) => (
          <div
            key={index}
            className={`relative h-12 w-12  cursor-pointer overflow-hidden rounded sm:h-16 sm:w-16 ${
              currentImage === index
                ? 'border-2 border-black opacity-100'
                : 'border-2 border-transparent opacity-70'
            } `}
          >
            <Image
              key={index}
              src={image}
              alt=''
              fill
              onClick={() => handleImageSelect(index)}
            />
          </div>
        ))}
      </aside>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
        ref={ref}
      >
        <div
          onClick={handlePreviousImageClick}
          className='absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center   justify-center rounded-full bg-white shadow-lg duration-200  ease-in-out hover:bg-neutral-100 sm:left-8 sm:h-12 sm:w-12'
        >
          <Image src={arrowLeft} alt='left-arrow' className='h-2/5 w-2/5 ' />
        </div>
        <div
          onClick={handleNextImageClick}
          className='absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer  items-center justify-center rounded-full bg-white shadow-lg duration-200 ease-in-out hover:bg-neutral-100 sm:right-8 sm:h-12 sm:w-12'
        >
          <Image src={arrowRight} alt='right-arrow' className='h-2/5 w-2/5 ' />
        </div>
        <Image
          src={product.images[currentImage]}
          alt=''
          width={mainImageSize.width}
          height={mainImageSize.height}
          style={{
            objectFit: 'contain',
            maxHeight: '600px',
            background: '#f1f1f1',
            borderRadius: '10px',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};
export default HandleProduct;
