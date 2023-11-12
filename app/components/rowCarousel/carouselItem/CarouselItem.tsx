import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product } from "@/app/utils/types";
import AddToFavorites from "@/app/(routes)/products/list/productItem/addToFavorites/AddToFavorites";

interface CarouselItemProps {
  product: Product;
}

const CarouselItem = ({ product }: CarouselItemProps) => {
  return (
    <div className="group relative rounded-lg p-2 shadow-soft hover:shadow-hover">
      <Link
        href={`/products/${product.id}`}
        className="relative  block h-32 w-full sm:h-40 md:h-44"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 1280px) 241px, (min-width: 1040px) calc(25vw - 44px), (min-width: 460px) calc(33.39vw - 33px), calc(50vw - 32px)"
        />
      </Link>
      <div>
        <div className="px-1  pt-1">
          <div className="flex items-center justify-between gap-2 text-sm">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {product.name}
            </p>
            <p className="whitespace-nowrap">€ {product.price}</p>
          </div>
        </div>
      </div>
      <AddToFavorites product={product} size={16} />
    </div>
  );
};

export default CarouselItem;
