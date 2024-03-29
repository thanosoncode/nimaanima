'use client';
import Image from 'next/image';
import Link from 'next/link';
import AddToFavorites from '../../../../components/addToFavorites/AddToFavorites';
import { Product, UserSession } from '@/app/utils/types';
import AddToFavoritesDb from '@/app/components/addToFavoritesDb/AddToFavoritesDb';
import { useAppState } from '@/app/context/context';
import { useSession } from 'next-auth/react';

interface ListProps {}

const List = () => {
  const { favorites } = useAppState();
  const session = useSession() as { data: UserSession | null; status: string };

  const isFavorite = (item: Product) =>
    favorites.find((fav) => fav.id === item.id) ? true : false;

  return (
    <div className="py-4">
      <section className="grid grid-cols-2  gap-4  sm:grid-cols-3 lg:grid-cols-4">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="relative rounded-lg p-2 shadow-soft hover:shadow-hover"
          >
            <Link
              href={`/products/${favorite.id}`}
              className="relative block h-32 w-full sm:h-40 md:h-44"
            >
              <Image
                src={favorite.images[0]}
                alt={favorite.name}
                fill
                className="rounded-lg object-cover"
              />
            </Link>
            <div>
              <div className="px-1 pt-1">
                <div className="flex items-center justify-between gap-2 text-sm">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {favorite.name}
                  </p>
                  <p className="whitespace-nowrap">€ {favorite.price}</p>
                </div>
              </div>
            </div>
            {session.data?.dbUser ? (
              <AddToFavoritesDb
                userId={session.data?.dbUser.id}
                product={favorite}
                isFavorite={isFavorite(favorite)}
              />
            ) : (
              <AddToFavorites product={favorite} size={16} isFavorite={true} />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;
