'use client';

import { useAppDispatch } from '@/app/context/context';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const LocalCartItemsLoader = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes('/order-success')) {
      const storage = localStorage.getItem('cartItems');
      if (storage) {
        const cartItems = JSON.parse(storage);
        dispatch({ type: 'SET_INITIAL_CART_ITEMS', cartItems });
      }
    }
  }, []);

  return <></>;
};

export default LocalCartItemsLoader;
