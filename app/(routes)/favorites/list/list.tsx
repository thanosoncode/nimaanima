import Image from 'next/image';
import Link from 'next/link';
import AddToFavorites from '../../products/list/productItem/addToFavorites/AddToFavorites';
import { Product } from '@/app/utils/types';

interface ListProps {
  favorites: Product[];
}

const List = ({ favorites }: ListProps) => {
  return (
    <div className='py-4'>
      <section className='grid lg:grid-cols-4    md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 grid-cols-2 gap-4'>
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className='rounded-lg shadow-soft p-2 hover:shadow-hover relative'
          >
            <Link
              href={`/products/${favorite.id}`}
              className='w-full  h-32 md:h-44 sm:h-40 relative block'
            >
              <Image
                src={favorite.images[0]}
                alt={favorite.name}
                fill
                className='object-cover rounded-lg'
              />
            </Link>
            <div>
              <div className='px-1  pt-1'>
                <div className='flex items-center justify-between gap-2 text-sm'>
                  <p className='overflow-hidden whitespace-nowrap text-ellipsis'>
                    {favorite.name}
                  </p>
                  <p className='whitespace-nowrap'>€ {favorite.price}</p>
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
