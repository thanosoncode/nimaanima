'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Product } from '@/app/utils/types';
import { addToCartAction } from '@/app/actions/actions';

const Button = ({
  isInCart,
  variant,
}: {
  isInCart: boolean;
  variant?: 'outlined' | 'contained';
}) => {
  const { pending } = useFormStatus();

  const containedClassname = `mx-auto mt-12  w-full rounded-full bg-neutral-900 py-3 text-center text-white duration-100 ease-in-out sm:mt-6 ${
    !isInCart ? 'hover:scale-[1.04] hover:opacity-80' : ''
  } `;

  const outlinedClassName =
    'p-y-1 w-min whitespace-nowrap rounded-full border-2 border-neutral-500 px-2 text-sm sm:px-3 sm:text-base';

  return (
    <button
      className={
        variant === 'outlined' ? outlinedClassName : containedClassname
      }
    >
      {pending ? 'Adding...' : isInCart ? 'In cart' : 'Add to cart'}
    </button>
  );
};

interface AddToCartDbProps {
  userId: string;
  product: Product;
  isInCart: boolean;
  variant?: 'outlined' | 'contained';
}

const AddToCartDb = ({
  userId,
  product,
  isInCart,
  variant,
}: AddToCartDbProps) => {
  const [state, formAction] = useFormState(addToCartAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="">
      <Button isInCart={isInCart} variant={variant} />
    </form>
  );
};

export default AddToCartDb;
