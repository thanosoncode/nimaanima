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
    <div className="group relative">
      <AddToFavorites product={product} size={19} isFavorite={isFavorite} />
      <Link
        href={`/products/${product.id}`}
        className=" relative block h-40 w-full sm:h-48 md:h-48 lg:h-56 xs:h-52"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="rounded object-cover"
          sizes="(min-width: 1280px) 353px, (min-width: 780px) calc(33.33vw - 27px), calc(50vw - 12px)"
        />
      </Link>
      <div>
        <div className="mb-1 px-1">
          <div className="flex  flex-col items-start justify-start  sm:flex-row sm:items-center sm:justify-between sm:gap-2">
            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {product.name}
            </p>
            <p className="whitespace-nowrap">€ {product.price}</p>
          </div>
        </div>
        {!product.sold && <AddToCartButton product={product} />}
      </div>
    </div>
  );
};

export default ProductItem;
