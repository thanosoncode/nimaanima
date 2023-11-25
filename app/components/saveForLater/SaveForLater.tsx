'use client';
import { useAppDispatch, useAppState } from '@/app/context/context';
import { Product } from '@/app/utils/types';
import { twMerge } from 'tailwind-merge';

interface SaveForLaterProps {
  product: Product;
  classes?: string;
}

const SaveForLater = ({ product, classes }: SaveForLaterProps) => {
  const appDispatch = useAppDispatch();
  const { saved } = useAppState();

  const isSaved = saved.find((item) => item.id === product.id);

  const handleSaveItem = (item: Product) => {
    appDispatch({ type: 'ADD_SAVED_ITEM', savedItem: item });
    appDispatch({ type: 'REMOVE_CART_ITEM', id: item.id });
    const localCartItems = localStorage.getItem('cartItems');
    if (localCartItems) {
      console.log('remove from local cartItems');
      console.log('localCartItems', localCartItems);
      const items = JSON.parse(localCartItems) as Product[];
      const newItems = items.filter((x) => x.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    }
    const localSavedItems = localStorage.getItem('savedItems');
    if (localSavedItems) {
      console.log('add it to existing saved');
      const items = JSON.parse(localSavedItems) as Product[];
      const newItems = [...items, item];
      localStorage.setItem('savedItems', JSON.stringify(newItems));
    } else {
      console.log('add it to saved');
      localStorage.setItem('savedItems', JSON.stringify([item]));
    }
  };
  return (
    <button
      onClick={() => handleSaveItem(product)}
      className={twMerge(
        'block w-min whitespace-nowrap rounded-full bg-white text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100',
        classes,
      )}
    >
      {isSaved ? 'Saved!' : 'Save for later'}
    </button>
  );
};

export default SaveForLater;
