import { Product } from '@/app/utils/types';
import React from 'react';
import ProductItem from './productItem/ProductItem';

interface RecommendationsProps {
  products: Product[];
  title: string;
}

const Recommendations = async ({ products, title }: RecommendationsProps) => {
  return (
    <div className="py-4">
      <h3 className="mb-3 text-xl font-light">{title}</h3>
      <section className="grid grid-cols-2  gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} key={product.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
