import { Product } from "@/app/utils/types";
import React from "react";
import CarouselItem from "./carouselItem/CarouselItem";

interface RowCarouselProps {
  title: string;
  items: Product[];
}

const RowCarousel = ({ title, items }: RowCarouselProps) => {
  return (
    <div className="">
      <h3 className="mb-3 text-xl font-light">{title}</h3>
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-3">
        {items.map((product) => (
          <div key={product.id}>
            <CarouselItem product={product} key={product.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RowCarousel;
