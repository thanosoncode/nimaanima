'use client';
import Spinner from '@/app/components/spinner/Spinner';
import { useAppDispatch, useAppState } from '@/app/context/context';
import { Product, UserSession } from '@/app/utils/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

interface AddToFavoritesProps {
  product: Product;
  size?: number;
  isFavorite?: boolean | undefined;
  buttonClasses?: string;
}

const AddToFavorites = ({
  product,
  size,
  isFavorite,
  buttonClasses,
}: AddToFavoritesProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useSession() as { data: UserSession | null };
  const userId = data?.dbUser.id;
  const [isLoading, setIsLoading] = useState(false);
  const { favorites } = useAppState();
  const isLocalFavorite = favorites.find((fav) => fav.id === product.id);
  const favorite = userId ? isFavorite : isLocalFavorite ? true : false;

  const handleClick = async () => {
    if (!userId) {
      dispatch({ type: 'ADD_FAVORITE', favorite: product });
      const localFavoriteItems = localStorage.getItem('favoriteItems');
      if (!localFavoriteItems) {
        localStorage.setItem('favoriteItems', JSON.stringify([product]));
        return;
      }
      if (localFavoriteItems) {
        const items = JSON.parse(localFavoriteItems) as Product[];
        const itemExists = items.find((item) => item.id === product.id);
        if (itemExists) {
          const newItems = items.filter((x) => x.id !== product.id);
          localStorage.setItem('favoriteItems', JSON.stringify(newItems));
        } else {
          localStorage.setItem(
            'favoriteItems',
            JSON.stringify([...items, product]),
          );
        }
      }
    }

    if (userId) {
      const method = isFavorite ? 'DELETE' : 'POST';
      setIsLoading(true);
      const response = await fetch('api/favorites', {
        method,
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

  const buttonIcon = (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={twMerge(
        'visible absolute top-2 right-2 z-20 rounded-full  border bg-white p-1',
        buttonClasses,
      )}
    >
      {isLoading ? (
        <Spinner />
      ) : favorite ? (
        <AiFillHeart fill="darkred" size={size} />
      ) : (
        <AiOutlineHeart size={size} />
      )}
    </button>
  );

  return buttonIcon;
};

export default AddToFavorites;
