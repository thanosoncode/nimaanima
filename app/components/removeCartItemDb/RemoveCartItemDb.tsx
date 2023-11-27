'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Product } from '@/app/utils/types';
import { removeCartItemAction } from '@/app/actions/actions';
import Spinner from '../spinner/Spinner';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-min rounded-full bg-white  text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100"
      disabled={pending}
    >
      {pending ? 'Removing...' : 'Remove'}
    </button>
  );
};

interface RemoveCartItemProps {
  userId: string;
  product: Product;
}

const RemoveCartItem = ({ userId, product }: RemoveCartItemProps) => {
  const [state, formAction] = useFormState(removeCartItemAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="">
      <Button />
    </form>
  );
};

export default RemoveCartItem;
