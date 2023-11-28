'use client';

import MoveToCartFromSavedDb from '@/app/components/moveToCartFromSavedDb/MoveToCartFromSavedDb';
import MoveToFavoritesFromSavedDb from '@/app/components/moveToFavoritesFromSavedDb/MoveToFavoritesFromSavedDb';
import RemoveFromSavedDb from '@/app/components/removeFromSavedDb/RemoveFromSavedDb';
import { useAppDispatch, useAppState } from '@/app/context/context';
import { Product, UserSession } from '@/app/utils/types';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const SavedItems = () => {
  const { saved, favorites } = useAppState();
  const appDispatch = useAppDispatch();
  const session = useSession() as {
    data: UserSession | null;
    status: string;
  };

  const moveToCart = (item: Product) => {
    appDispatch({ type: 'ADD_CART_ITEM', cartItem: item });
    appDispatch({ type: 'REMOVE_SAVED_ITEM', savedItem: item });
    const localSavedItems = localStorage.getItem('savedItems');
    if (localSavedItems) {
      const items = JSON.parse(localSavedItems) as Product[];
      const newItems = items.filter((x) => x.id !== item.id);
      localStorage.setItem('savedItems', JSON.stringify(newItems));
    }

    const localCartItems = localStorage.getItem('cartItems');
    if (localCartItems) {
      const items = JSON.parse(localCartItems) as Product[];
      const newItems = [...items, item];
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    }
  };

  const moveToFavorites = (item: Product) => {
    appDispatch({ type: 'ADD_FAVORITE', favorite: item });
    appDispatch({ type: 'REMOVE_SAVED_ITEM', savedItem: item });
    const localSavedItems = localStorage.getItem('savedItems');
    if (localSavedItems) {
      const items = JSON.parse(localSavedItems) as Product[];
      const newItems = items.filter((x) => x.id !== item.id);
      localStorage.setItem('savedItems', JSON.stringify(newItems));
    }
    const localFavoriteItems = localStorage.getItem('favoriteItems');
    if (localFavoriteItems) {
      const items = JSON.parse(localFavoriteItems) as Product[];
      const newItems = [...items, item];
      localStorage.setItem('favoriteItems', JSON.stringify(newItems));
    } else {
      localStorage.setItem('favoriteItems', JSON.stringify([item]));
    }
  };

  const removeItem = (item: Product) => {
    appDispatch({ type: 'REMOVE_SAVED_ITEM', savedItem: item });
    const localFavoriteItems = localStorage.getItem('favoriteItems');
    if (localFavoriteItems) {
      const items = JSON.parse(localFavoriteItems) as Product[];
      const newItems = items.filter((x) => x.id !== item.id);
      localStorage.setItem('favoriteItems', JSON.stringify(newItems));
    }
  };

  const savedIsFavorite = (id: string) => {
    return favorites.find((fav) => fav.id === id) ? true : false;
  };

  return (
    <div className="mt-16">
      <h4 className="mb-6 text-2xl font-medium">
        {saved.length} item&#40;s&#41; saved for later
      </h4>
      <div className="flex flex-col gap-12">
        {saved.map((item) => (
          <div key={item.id} className="flex">
            <div className="flex w-full flex-col gap-1 sm:flex-row sm:gap-4">
              <div className="relative h-40 w-52 flex-shrink-0 overflow-hidden rounded sm:h-40">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full justify-between">
                <div className="font-light">
                  <p>{item.name}</p>
                  <p className="text-sm sm:text-base">{item.description}</p>
                  <div className="mt-4 flex gap-2 sm:mt-8 sm:gap-4">
                    {session.data?.dbUser ? (
                      <>
                        <MoveToCartFromSavedDb
                          userId={session.data.dbUser.id}
                          product={item}
                        />
                        <MoveToFavoritesFromSavedDb
                          userId={session.data.dbUser.id}
                          product={item}
                          disabled={savedIsFavorite(item.id)}
                        />
                        <RemoveFromSavedDb
                          userId={session.data.dbUser.id}
                          product={item}
                        />
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => moveToCart(item)}
                          className="whitespace-nowrap rounded-full border-2 border-black px-3 py-1.5 text-sm font-medium duration-200 hover:scale-105 hover:shadow-cart"
                        >
                          Move to cart
                        </button>
                        <button
                          disabled={savedIsFavorite(item.id)}
                          onClick={() => moveToFavorites(item)}
                          className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium duration-200 hover:bg-neutral-200 ${
                            savedIsFavorite(item.id)
                              ? 'text-neutral-400 hover:bg-white'
                              : ''
                          }`}
                        >
                          Move to favorites
                        </button>
                        <button
                          onClick={() => removeItem(item)}
                          className="rounded-full px-3 py-1.5 text-sm font-medium duration-200 hover:bg-neutral-200"
                        >
                          Remove
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="font-medium">€{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
