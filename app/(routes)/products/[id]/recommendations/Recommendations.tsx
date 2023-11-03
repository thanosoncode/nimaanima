import { NewProduct } from '@/app/utils/types';
import { getCategoryProducts } from '@/lib/products';
import React from 'react';
import ProductItem from './productItem/ProductItem';

interface RecommendationsProps {
  category: string;
  currentId: string;
}

const Recommendations = async ({
  category,
  currentId,
}: RecommendationsProps) => {
  const products = (await getCategoryProducts(category)) as NewProduct[];

  const filtered = products.filter((p) => p.id !== currentId);

  return (
    <div className='py-4'>
      <h3 className='mb-3 text-xl font-light'>More from {category}</h3>
      <section className='grid lg:grid-cols-4    md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 grid-cols-2 gap-4'>
        {filtered.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} key={product.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
