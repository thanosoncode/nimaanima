'use client';
import { Product } from '@/app/utils/types';
import { useRef, useState } from 'react';
import Image from 'next/image';
import arrowLeft from '../../../../../public/assets/left-black-arrow.png';
import arrowRight from '../../../../../public/assets/right-black-arrow.png';

interface CarouselProps {
  product: Product;
}

const Carousel: React.FC<CarouselProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative flex w-full flex-col-reverse gap-4 md:w-[75%] md:flex-row">
      <aside className="flex shrink-0 flex-row gap-2 md:flex-col md:gap-4">
        {product.images.map((image, index) => (
          <div
            key={index}
            className={`relative h-12 w-12  cursor-pointer overflow-hidden rounded bg-neutral-100 sm:h-16 sm:w-16 ${
              currentImage === index
                ? 'border-2 border-black opacity-100'
                : 'border-2 border-transparent opacity-70'
            } `}
          >
            <Image
              key={index}
              src={image}
              alt={`image-${index + 1}`}
              fill
              onClick={() => handleImageSelect(index)}
              sizes="(min-width: 640px) 60px, 44px"
            />
          </div>
        ))}
      </aside>
      <div className="relative flex h-full w-full" ref={ref}>
        <div
          onClick={handlePreviousImageClick}
          className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg duration-200  ease-in-out hover:bg-neutral-100 sm:left-8 sm:h-12 sm:w-12"
        >
          <Image src={arrowLeft} alt="left-arrow" className="h-2/5 w-2/5" />
        </div>
        <div
          onClick={handleNextImageClick}
          className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer  items-center justify-center rounded-full bg-white shadow-lg duration-200 ease-in-out hover:bg-neutral-100 sm:right-8 sm:h-12 sm:w-12"
        >
          <Image src={arrowRight} alt="right-arrow" className="h-2/5 w-2/5" />
        </div>
        <Image
          src={product.images[currentImage]}
          alt=""
          width={700}
          height={500}
          className="h-[500px] w-full rounded-lg bg-neutral-100 object-contain"
          sizes="(min-width: 1280px) 763px, (min-width: 780px) calc(75vw - 104px), calc(100vw - 16px)"
          priority
        />
      </div>
    </div>
  );
};
export default Carousel;
