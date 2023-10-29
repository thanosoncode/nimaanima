'use client';
import Link from 'next/link';
import { BsCart4 } from 'react-icons/bs';
import { useAppState } from '@/app/context/context';

interface CartLinkProps {}

const CartLink = ({}: CartLinkProps) => {
  const { cartItems, favorites } = useAppState();
  return (
    <Link href='/cart' className=''>
      <div className='relative  mr-2 sm:mr-0 hover:bg-neutral-200 rounded-full p-1 duration-200'>
        <BsCart4 size={20} />
        {cartItems.length > 0 ? (
          <span className='absolute -right-1 -top-1 w-4 h-4 text-xs rounded-full bg-main-400 text-white flex justify-center items-center'>
            {cartItems.length}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default CartLink;
