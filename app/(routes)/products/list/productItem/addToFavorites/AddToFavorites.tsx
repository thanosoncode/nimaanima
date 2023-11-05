'use client';
import Spinner from '@/app/components/spinner/Spinner';
import { Product, UserSession } from '@/app/utils/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface AddToFavoritesProps {
  product: Product;
  size: number;
  isFavorite?: boolean | undefined;
}

const AddToFavorites = ({ product, size, isFavorite }: AddToFavoritesProps) => {
  const router = useRouter();
  const { data } = useSession() as { data: UserSession | null };
  const userId = data?.dbUser.id;
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState<'add' | 'remove'>('add');

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!userId) return;
    if (!isFavorite) {
      setIsLoading(true);
      const response = await fetch('api/favorites', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          favorite: product,
        }),
      });
      if (response.ok) {
        router.refresh();
        setIsLoading(false);
      }
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const response = await fetch('api/favorites', {
        method: 'DELETE',
        body: JSON.stringify({
          userId: userId,
          favorite: product,
        }),
      });
      if (response.ok) {
        router.refresh();
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      disabled={isLoading}
      className={` visible  z-20 p-1 bg-white border rounded-full  absolute top-2 right-2`}
    >
      {isLoading ? (
        <Spinner />
      ) : isFavorite ? (
        <AiFillHeart fill='darkred' size={size} />
      ) : (
        <AiOutlineHeart size={size} />
      )}
    </button>
  );
};

export default AddToFavorites;
