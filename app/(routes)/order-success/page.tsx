import Image from 'next/image';
import React from 'react';
import partyFlags from '../../../public/assets/party-flags.jpg';
import { SearchParams } from '@/app/utils/types';
import LocalCartItemsRemover from './localCartItemsRemover/LocalCartItemsRemover';

const OrderSuccess = ({ searchParams }: SearchParams) => {
  const ids =
    typeof searchParams.productId === 'string'
      ? [searchParams.productId]
      : searchParams.productId;

  return (
    <div
      className='bg-[#F5F2EA] flex items-center justify-center '
      style={{ height: 'calc(100vh - 288px)' }}
    >
      <div className='rounded-lg  bg-white border py-6 px-32 flex flex-col items-center shadow-soft'>
        <div className='w-72 h-48 relative'>
          <Image
            src={partyFlags}
            alt='party-flags'
            fill
            className='object-contain'
          />
        </div>
        <h1 className='text-6xl font-thin mb-12 mt-4'>
          Thank you for your order!
        </h1>
        <p className='mb-6'>
          We`&apos;ve sent a receipt to{' '}
          <span className='font-semibold'>thanosoncode@gmail.com</span>
        </p>
        <p>We will contact you soon with shipping details</p>
      </div>
      <LocalCartItemsRemover ids={ids} />
    </div>
  );
};

export default OrderSuccess;
