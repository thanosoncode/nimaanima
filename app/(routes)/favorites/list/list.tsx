import Image from 'next/image';
import Link from 'next/link';
import AddToFavorites from '../../../components/addToFavorites/AddToFavorites';
import { Product } from '@/app/utils/types';

interface ListProps {
  favorites: Product[];
}

const List = ({ favorites }: ListProps) => {
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
            <AddToFavorites product={favorite} size={16} isFavorite={true} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;
