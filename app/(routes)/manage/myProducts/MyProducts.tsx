'use client';

import { Product } from '@prisma/client';
import Image from 'next/image';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Backdrop from '@/app/components/backdrop/Backdrop';
import RemoveButton from './removeButton/RemoveButton';

const MyProducts: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ['my-products'],
    queryFn: () => fetch('/api/products').then((res) => res.json()),
    staleTime: 600000,
  });

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/manage/${id}`, { method: 'DELETE' }),
    mutationKey: ['my-products'],
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['my-products'] }),
  });

  return (
    <div className='xl:max-w-[1140px] mx-auto w-full md:px-8 px-2'>
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
      <Backdrop open={isDeleting}>
        <div className='bg-white py-8 px-16 rounded'>Deleting...</div>
      </Backdrop>
    </div>
  );
};
export default MyProducts;
