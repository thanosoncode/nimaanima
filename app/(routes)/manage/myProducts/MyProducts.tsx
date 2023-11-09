'use client';

import { Product } from '@prisma/client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import RemoveButton from './removeButton/RemoveButton';
import Spinner from '@/app/components/spinner/Spinner';

const MyProducts: React.FC = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['my-products'],
    queryFn: () => fetch('/api/products').then((res) => res.json()),
    staleTime: 600000,
  });

  const result = isLoading ? (
    <Spinner size='w-12 h-12' />
  ) : (
    <table className='w-full border'>
      <thead className='uppercase'>
        <tr className='border-b'>
          <th className='text-center'></th>
          <th className='text-center'>Name</th>
          <th className='text-center'>Category</th>
          <th className='text-center'>Description</th>
          <th className='text-center'>Price</th>
          <th className='text-center'>Delete</th>
        </tr>
      </thead>
      <tbody className=''>
        {products && products.length > 0
          ? products.map((product: Product) => (
              <tr key={product.id} className='border-b border-neutral-300'>
                <td className=' p-2 '>
                  <div className='flex justify-center items-center p-2 w-12 h-12 relative'>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                </td>
                <td className='p-2 text-center'>{product.name}</td>
                <td className='p-2 text-center'>{product.category}</td>
                <td className='p-2 text-center'>{product.description}</td>
                <td className='p-2 text-center'>{product.price}</td>
                <td className='p-2 text-center'>
                  <RemoveButton id={product.id} />
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );

  return (
    <div className='xl:max-w-[1140px] mx-auto w-full lg:px-4 px-2'>
      {result}
    </div>
  );
};
export default MyProducts;
