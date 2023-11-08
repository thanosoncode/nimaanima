'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RemoveButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openConfirmationDialog = () => {
    setIsDialogOpen(true);
  };

  const closeConfirmationDialog = () => {
    setIsDialogOpen(false);
  };

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/manage/${id}`, { method: 'DELETE' }),
    mutationKey: ['my-products'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-products'] });
      setIsDialogOpen(false);
    },
    onError: () => setIsDialogOpen(false),
  });

  return (
    <>
      <button
        className='rounded bg-red-400 py-1 px-3 text-white hover:bg-red-200 font-semibold'
        onClick={openConfirmationDialog}
      >
        remove product
      </button>
      <div className={`${isDialogOpen ? 'fixed' : 'hidden'} z-40 inset-0`}>
        <div className='bg-black  opacity-70 w-full h-full duration-300'></div>
        <div className='flex justify-center items-center absolute inset-0'>
          <div className=' bg-white text-black flex justify-center items-center py-4 px-2 sm:py-10 flex-col sm:px-12 whitespace-nowrap'>
            <h4>Are you sure you want to delete this product?</h4>
            <div className='flex gap-12 mt-8 w-full mx-auto px-8 justify-center'>
              <button
                onClick={closeConfirmationDialog}
                className='font-semibold'
              >
                Cancel
              </button>
              <button
                className='rounded bg-red-400 py-1 px-3 text-white hover:bg-red-200 font-semibold'
                onClick={() => mutate(id)}
                disabled={isDeleting}
              >
                {isDeleting ? 'Removing...' : 'Remove product'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RemoveButton;
