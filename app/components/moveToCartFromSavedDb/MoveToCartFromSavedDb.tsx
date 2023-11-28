'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Product } from '@/app/utils/types';
import {
  moveToCartFromSavedAction,
  removeCartItemAction,
  removeFromSavedDbAction,
} from '@/app/actions/actions';
import Spinner from '../spinner/Spinner';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="whitespace-nowrap rounded-full border-2 border-black px-3 py-1.5 text-sm font-medium duration-200 hover:scale-105 hover:shadow-cart"
      disabled={pending}
    >
      {pending ? 'Moving...' : 'Move to cart'}
    </button>
  );
};

interface MoveToCartFromSavedDbProps {
  userId: string;
  product: Product;
}

const MoveToCartFromSavedDb = ({
  userId,
  product,
}: MoveToCartFromSavedDbProps) => {
  const [state, formAction] = useFormState(moveToCartFromSavedAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="flex items-center justify-center">
      <Button />
    </form>
  );
};

export default MoveToCartFromSavedDb;
