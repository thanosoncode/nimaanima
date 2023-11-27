'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Product } from '@/app/utils/types';
import { saveForLaterDbAction } from '@/app/actions/actions';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-min whitespace-nowrap rounded-full  bg-white text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100"
      disabled={pending}
    >
      {pending ? 'Saving...' : 'Save for later'}
    </button>
  );
};

interface SaveForLaterDbProps {
  userId: string;
  product: Product;
}

const SaveForLaterDb = ({ userId, product }: SaveForLaterDbProps) => {
  const [state, formAction] = useFormState(saveForLaterDbAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="flex items-center justify-center">
      <Button />
    </form>
  );
};

export default SaveForLaterDb;
