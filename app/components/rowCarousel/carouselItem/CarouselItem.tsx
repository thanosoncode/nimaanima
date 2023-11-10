import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Product } from '@/app/utils/types';
import AddToFavorites from '@/app/(routes)/products/list/productItem/addToFavorites/AddToFavorites';

interface CarouselItemProps {
  product: Product;
}

const CarouselItem = ({ product }: CarouselItemProps) => {
  return (
    <div className='rounded-lg shadow-soft p-2 hover:shadow-hover relative group'>
      <Link
        href={`/products/${product.id}`}
        className='w-full  h-32 md:h-44 sm:h-40 relative block'
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className='object-cover rounded-lg'
          sizes='(min-width: 1280px) 241px, (min-width: 1040px) calc(25vw - 44px), (min-width: 460px) calc(33.39vw - 33px), calc(50vw - 32px)'
        />
      </Link>
      <div>
        <div className='px-1  pt-1'>
          <div className='flex items-center justify-between gap-2 text-sm'>
            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>
              {product.name}
            </p>
            <p className='whitespace-nowrap'>€ {product.price}</p>
          </div>
        </div>
      </div>
      <AddToFavorites product={product} size={16} />
    </div>
  );
};

export default CarouselItem;
