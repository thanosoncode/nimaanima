'use client';

import { Product } from '../../utils/types';
import Image from 'next/image';
import arrow from '../../public/assets/arrow.png';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface SliderProps {
  products: Product[];
}

const Slider: React.FC<SliderProps> = ({ products }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [widthDifference, setWidthDifference] = useState<number>(0);
  const [position, setPosition] = useState(0);

  const widthToScroll = 650;

  const handleScrollRight = () => {
    if (position > widthDifference) {
      const spaceAvailable = Math.abs(position - widthDifference);
      if (spaceAvailable < widthToScroll) {
        setPosition(widthDifference);
      } else {
        setPosition((prevValue) => prevValue - widthToScroll);
      }
    }
  };

  const handleScrollLeft = () => {
    if (position >= widthDifference && position !== 0) {
      if (Math.abs(position) < widthToScroll) {
        setPosition(0);
      } else {
        setPosition((prevValue) => prevValue + widthToScroll);
      }
    }
  };

  useEffect(() => {
    if (wrapperRef.current && sliderRef.current) {
      setWidthDifference(
        wrapperRef.current.offsetWidth - sliderRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section>
      <h4 className='py-4 text-3xl'>Check out our one of a kind products</h4>
      <div ref={wrapperRef} className='relative  h-64 overflow-hidden'>
        <Image
          src={arrow}
          alt='icon-left'
          width={20}
          height={20}
          className='absolute top-1/2 left-0 z-10 -translate-y-1/2 rotate-180'
          onClick={handleScrollLeft}
        />
        <Image
          src={arrow}
          alt='icon-right'
          width={20}
          height={20}
          className='absolute top-1/2 right-0 z-10 -translate-y-1/2'
          onClick={handleScrollRight}
        />
        <div
          ref={sliderRef}
          className={` absolute flex gap-4`}
          style={{
            transform: `translateX(${position}px)`,
            transition: '0.2s ease-in-out',
          }}
        >
          {products.map((product) => (
            <div className='h-64 w-64 shrink-0' key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={256}
                  height={256}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
                <p className=''>{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Slider;
