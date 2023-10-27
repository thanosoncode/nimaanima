'use client';
import { useAppDispatch, useAppState } from '@/app/context/context';
import { Product } from '@/app/utils/types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface AddToFavoritesProps {
  product: Product;
  size: number;
}

const AddToFavorites = ({ product, size }: AddToFavoritesProps) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppState();

  const isFavorite = favorites.find((f) => f.id === product.id);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const isFavorite = favorites.find((f) => f.id === product.id);

    if (!isFavorite) {
      dispatch({ type: 'ADD_FAVORITE', favorite: product });
    } else {
      const id = favorites.find((f) => f.id === product.id)?.id as string;
      dispatch({ type: 'REMOVE_FAVORITE', id });
    }
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={` ${
        isFavorite ? 'visible opacity-100' : ''
      } group-hover:visible opacity-0 group-hover:opacity-100 ease-in-out z-20 p-1 bg-white border rounded-full transition-opacity duration-300 absolute top-2 right-2`}
    >
      {isFavorite ? (
        <AiFillHeart fill='darkred' size={size} />
      ) : (
        <AiOutlineHeart size={size} />
      )}
    </div>
  );
};

export default AddToFavorites;
