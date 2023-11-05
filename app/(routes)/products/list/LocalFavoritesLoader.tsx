'use client';

import { useAppDispatch } from '@/app/context/context';
import { UserSession } from '@/app/utils/types';
import React, { useEffect } from 'react';

const LocalFavoritesLoader = ({ session }: { session: UserSession | null }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!session) {
      const storage = localStorage.getItem('favorites');
      console.log('no session load local favorites ');
      if (storage) {
        const favorites = JSON.parse(storage);
        dispatch({ type: 'SET_INITIAL_FAVORITES', favorites });
      }
    }
  }, []);

  return <></>;
};

export default LocalFavoritesLoader;
