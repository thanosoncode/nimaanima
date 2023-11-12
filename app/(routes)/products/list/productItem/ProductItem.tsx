import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Product } from '@/app/utils/types';
import AddToCartButton from '../../../../components/addToCartButton/AddToCartButton';
import AddToFavorites from './addToFavorites/AddToFavorites';

interface ProductItemProps {
  product: Product;
  isFavorite: boolean | undefined;
}

const ProductItem = ({ product, isFavorite }: ProductItemProps) => {
  return (
    <div className='relative group'>
      <AddToFavorites product={product} size={19} isFavorite={isFavorite} />
      <Link
        href={`/products/${product.id}`}
        className=' w-full h-40 xs:h-52 md:h-48 lg:h-56 sm:h-48 relative block'
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className='object-cover rounded'
          sizes='(min-width: 1280px) 353px, (min-width: 780px) calc(33.33vw - 27px), calc(50vw - 12px)'
        />
      </Link>
      <div>
        <div className='px-1 mb-1'>
          <div className='flex  sm:flex-row flex-col sm:gap-2  sm:items-center sm:justify-between items-start justify-start'>
            <p className='overflow-hidden whitespace-nowrap text-ellipsis w-full'>
              {product.name}
            </p>
            <p className='whitespace-nowrap'>€ {product.price}</p>
          </div>
        </div>
        {product.sold && 'sold'}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
