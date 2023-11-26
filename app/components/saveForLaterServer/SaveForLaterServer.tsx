'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Product } from '@/app/utils/types';
import { saveForLaterAction } from '@/app/actions/actions';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/context/context';

const Button = ({ isSaved }: { isSaved: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="block w-min whitespace-nowrap rounded-full  bg-white text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100"
    >
      {pending ? 'Saving...' : isSaved ? 'Saved' : 'Save for later'}
    </button>
  );
};

interface SaveForLaterServerFormProps {
  userId: string;
  product: Product;
  isSaved: boolean;
}

const SaveForLaterServer = ({
  userId,
  product,
  isSaved,
}: SaveForLaterServerFormProps) => {
  const appDispatch = useAppDispatch();
  const [state, formAction] = useFormState(saveForLaterAction, {
    product,
    userId,
    isSaved,
  });

  useEffect(() => {
    if (isSaved) {
      appDispatch({ type: 'ADD_SAVED_ITEM', savedItem: product });
      appDispatch({ type: 'REMOVE_CART_ITEM', id: product.id });
    } else {
      appDispatch({ type: 'REMOVE_SAVED_ITEM', savedItem: product });
    }
  }, [isSaved]);

  return (
    <form action={formAction} className="">
      <Button isSaved={state.isSaved} />
    </form>
  );
};

export default SaveForLaterServer;
