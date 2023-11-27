'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Product } from '@/app/utils/types';
import {
  removeCartItemAction,
  removeFromSavedDbAction,
} from '@/app/actions/actions';
import Spinner from '../spinner/Spinner';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-min whitespace-nowrap rounded-full  bg-white text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100"
      disabled={pending}
    >
      {pending ? 'Removing...' : 'Remove'}
    </button>
  );
};

interface RemoveFromSavedDbProps {
  userId: string;
  product: Product;
}

const RemoveFromSavedDb = ({ userId, product }: RemoveFromSavedDbProps) => {
  const [state, formAction] = useFormState(removeFromSavedDbAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="flex items-center justify-center">
      <Button />
    </form>
  );
};

export default RemoveFromSavedDb;
