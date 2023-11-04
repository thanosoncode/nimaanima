'use client';
import Spinner from '@/app/components/spinner/Spinner';
import { useAppDispatch, useAppState } from '@/app/context/context';
import { Favorite, Product, UserSession } from '@/app/utils/types';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface AddToFavoritesProps {
  product: Product;
  size: number;
}

const AddToFavorites = ({ product, size }: AddToFavoritesProps) => {
  const dispatch = useAppDispatch();
  const { data } = useSession() as { data: UserSession | null };

  const { favorites } = useAppState();
  const [isLoading, setIsLoading] = useState(false);

  const isFavorite = favorites.find((f) => f.id === product.id);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const isFavorite = favorites.find((f) => f.id === product.id);

    if (!isFavorite) {
      if (data?.dbUser) {
        setIsLoading(true);

        const response = await fetch('api/favorites', {
          method: 'POST',
          body: JSON.stringify({
            userId: data?.dbUser.id,
            favorite: product,
          }),
        });
        setIsLoading(false);
        if (response.ok) {
          dispatch({ type: 'ADD_FAVORITE', favorite: product });
        }
      } else {
        dispatch({ type: 'ADD_FAVORITE', favorite: product });
      }
    } else {
      const id = favorites.find((f) => f.id === product.id)?.id as string;
      if (data?.dbUser) {
        setIsLoading(true);
        const response = await fetch('api/favorites', {
          method: 'DELETE',
          body: JSON.stringify({
            userId: data?.dbUser.id,
            favorite: product,
          }),
        });
        setIsLoading(false);
        if (response.ok) {
          dispatch({ type: 'REMOVE_FAVORITE', id });
        }
      } else {
        dispatch({ type: 'REMOVE_FAVORITE', id });
      }
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
