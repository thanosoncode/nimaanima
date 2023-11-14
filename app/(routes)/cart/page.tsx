'use client';

import { useAppDispatch, useAppState } from '../../context/context';
import Container from '../../components/container/Container';
import ViewFavorites from './viewFavorites/ViewFavorites';
import Summary from './summary/Summary';
import CartItem from './cartItem/CartiItem';
import Image from 'next/image';
import { Product } from '@/app/utils/types';

const Cart = () => {
  const { cartItems, favorites, saved } = useAppState();
  const appDispatch = useAppDispatch();

  const showViewFavorites = favorites.length > 0;

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

  return (
    <Container classes={`${showViewFavorites ? '' : 'mb-20'}`}>
      <div className="flex flex-col items-center px-0 lg:block">
        <div>
          {cartItems.length > 0 ? (
            <h4 className="py-4 text-3xl font-thin sm:py-8">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in
              your cart.
            </h4>
          ) : (
            <div>
              <h4 className="py-8 text-center text-3xl font-thin sm:py-8">
                Your cart is empty.
              </h4>
            </div>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <Summary cartItems={cartItems} />
          </div>
        ) : null}
      </div>
      {saved.length > 0 ? (
        <div className="mt-16">
          <h4 className="mb-6 text-2xl font-medium">
            {saved.length} item&#40;s&#41; saved for later
          </h4>
          <div>
            {saved.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div className="flex gap-4">
                  <div className="relative h-40 w-52 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-light">
                    <p>{item.name}</p>
                    <p className="max-w-[640px] overflow-hidden text-ellipsis lg:whitespace-nowrap">
                      {item.description}
                    </p>
                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => moveToCart(item)}
                        className="rounded-full border-2 border-black px-3 py-1.5 text-sm font-medium duration-200 hover:scale-105 hover:shadow-cart"
                      >
                        Move to cart
                      </button>
                      <button
                        onClick={() => moveToFavorites(item)}
                        className="rounded-full px-3 py-1.5 text-sm font-medium duration-200 hover:bg-neutral-200"
                      >
                        Move to favorites
                      </button>
                      <button
                        onClick={() => removeItem(item)}
                        className="rounded-full px-3 py-1.5 text-sm font-medium duration-200 hover:bg-neutral-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="font-medium">€{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-16 mb-8">
        <ViewFavorites favorites={favorites} />
      </div>
    </Container>
  );
};
export default Cart;
