'use client';
import { Product } from '@/app/utils/types';
import Link from 'next/link';

interface ViewFavoritesProps {
  favorites: Product[];
}

const ViewFavorites = ({ favorites }: ViewFavoritesProps) => {
  const viewFavorites = (
    <div className="flex flex-col items-center">
      <p className="text-neutral-700">Looking for more of your finds?</p>
      <Link
        href="/favorites"
        className="mt-4 block w-min whitespace-nowrap rounded-full border-2 border-black px-5 py-2 duration-200 hover:bg-neutral-100"
      >
        View your favorites
      </Link>
    </div>
  );

  return favorites.length > 0 ? viewFavorites : null;
};

export default ViewFavorites;
