import { useAppDispatch } from '@/app/context/context';
import { UserSession } from '@/app/utils/types';
import { useEffect } from 'react';

const UserItemsLoader = ({ session }: { session: UserSession | null }) => {
  const appDispatch = useAppDispatch();
  useEffect(() => {
    if (session) {
      appDispatch({
        type: 'SET_INITIAL_CART_ITEMS',
        cartItems: session.dbUser.cartItems,
      });
      appDispatch({
        type: 'SET_INITIAL_FAVORITES',
        favorites: session.dbUser.favorites,
      });
      appDispatch({
        type: 'SET_INITIAL_SAVED_ITEMS',
        savedItems: session.dbUser.saved,
      });
    }
  }, [session]);

  return <></>;
};

export default UserItemsLoader;
