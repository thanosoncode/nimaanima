'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Product } from '@/app/utils/types';
import { moveToFavoritesFromSavedAction } from '@/app/actions/actions';

const Button = ({ disabled }: { disabled: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium duration-200 hover:bg-neutral-200 ${
        disabled ? 'text-neutral-400 hover:bg-white' : ''
      }`}
      disabled={pending}
    >
      {pending ? 'Moving...' : 'Move to favorites'}
    </button>
  );
};

interface MoveToFavoritesFromSavedDbProps {
  userId: string;
  product: Product;
  disabled: boolean;
}

const MoveToFavoritesFromSavedDb = ({
  userId,
  product,
  disabled,
}: MoveToFavoritesFromSavedDbProps) => {
  const [state, formAction] = useFormState(moveToFavoritesFromSavedAction, {
    product,
    userId,
  });

  return (
    <form action={formAction} className="flex items-center justify-center">
      <Button disabled={disabled} />
    </form>
  );
};

export default MoveToFavoritesFromSavedDb;
