'use client';

import { useAppDispatch } from '@/app/context/context';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const LocalItemsLoader = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes('/order-success')) {
      const cartItems = localStorage.getItem('cartItems');
      if (cartItems) {
        dispatch({
          type: 'SET_INITIAL_CART_ITEMS',
          cartItems: JSON.parse(cartItems),
        });
      }
      const favoriteItems = localStorage.getItem('favoriteItems');
      if (favoriteItems) {
        dispatch({
          type: 'SET_INITIAL_FAVORITES',
          favorites: JSON.parse(favoriteItems),
        });
      }
      const savedItems = localStorage.getItem('savedItems');
      if (savedItems) {
        dispatch({
          type: 'SET_INITIAL_SAVED_ITEMS',
          savedItems: JSON.parse(savedItems),
        });
      }
    }
  }, []);

  return <></>;
};

export default LocalItemsLoader;
