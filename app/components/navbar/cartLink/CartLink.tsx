'use client';
import Link from 'next/link';
import { BsCart4 } from 'react-icons/bs';
import { useAppState } from '@/app/context/context';

interface CartLinkProps {}

const CartLink = ({}: CartLinkProps) => {
  const { cartItems } = useAppState();

  return (
    <Link href="/cart" className="">
      <div className="relative  mr-2 rounded-full p-1 duration-200 hover:bg-neutral-200 sm:mr-0">
        <BsCart4 size={20} />
        {cartItems.length > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-main-400 text-xs text-white">
            {cartItems.length}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default CartLink;
