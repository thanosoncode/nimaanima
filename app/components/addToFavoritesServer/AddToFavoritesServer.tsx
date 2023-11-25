'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Product } from '@/app/utils/types';
import { addToFavoritesAction } from '@/app/actions/actions';
import Spinner from '../spinner/Spinner';

const Button = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit">
      {pending ? (
        <Spinner size="h-4 w-4" />
      ) : isFavorite ? (
        <AiFillHeart fill="darkred" size={16} />
      ) : (
        <AiOutlineHeart size={16} />
      )}
    </button>
  );
};

interface AddToFavoritesServerFormProps {
  userId: string;
  product: Product;
  isFavorite: boolean;
}

const AddToFavoritesServer = ({
  userId,
  product,
  isFavorite,
}: AddToFavoritesServerFormProps) => {
  const [state, formAction] = useFormState(addToFavoritesAction, {
    product,
    userId,
    isFavorite,
  });

  return (
    <form
      action={formAction}
      className="visible absolute top-2 right-2 z-20 flex  items-center justify-center rounded-full border bg-white p-1"
    >
      <Button isFavorite={state.isFavorite} />
    </form>
  );
};

export default AddToFavoritesServer;
