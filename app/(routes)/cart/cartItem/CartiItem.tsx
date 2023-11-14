'use client';
import { useAppDispatch } from '@/app/context/context';
import { Product } from '@/app/utils/types';
import Image from 'next/image';
import Link from 'next/link';

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const appDispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    appDispatch({ type: 'REMOVE_ITEM', id });
    const storage = localStorage.getItem('cartItems');
    if (storage) {
      const items = JSON.parse(storage) as Product[];
      const newItems = items.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    }
  };

  const handleSaveItem = (item: Product) => {
    appDispatch({ type: 'ADD_SAVED_ITEM', savedItem: item });
    appDispatch({ type: 'REMOVE_ITEM', id: item.id });
    const localCartItems = localStorage.getItem('cartItems');
    if (localCartItems) {
      const items = JSON.parse(localCartItems) as Product[];
      const newItems = items.filter((x) => x.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    }
    const localSavedItems = localStorage.getItem('savedItems');
    if (localSavedItems) {
      const items = JSON.parse(localSavedItems) as Product[];
      const newItems = [...items, item];
      localStorage.setItem('savedItems', JSON.stringify(newItems));
    } else {
      localStorage.setItem('savedItems', JSON.stringify([item]));
    }
  };

  return (
    <div
      key={item.id}
      className=" max-w-[600px] rounded-xl border border-neutral-300 p-2 shadow-cart sm:p-3"
    >
      <div className="flex w-full gap-2  sm:gap-6">
        <div className="relative h-32 w-36 shrink-0 overflow-hidden rounded-xl sm:h-52  sm:w-60 sm:shrink ">
          <Image
            src={item.images[0]}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-neutral-700">
              <Link href={`/products/${item.id}`} className="text-neutral-600">
                {item.name}
              </Link>
            </div>
            <div className="">€ {item.price}.00</div>
          </div>
          <div className="mb-4 flex gap-4">
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="block w-min rounded-full bg-white  text-sm font-medium duration-200 ease-in-out hover:bg-neutral-100"
            >
              Remove
            </button>
            <button
              onClick={() => handleSaveItem(item)}
              className="block w-min whitespace-nowrap rounded-full bg-white text-sm  font-medium duration-200 ease-in-out hover:bg-neutral-100"
            >
              Save for later
            </button>
          </div>
          <div className="hidden items-start gap-2 sm:flex">
            <input
              type="checkbox"
              id="gift"
              className="mt-1.5 block bg-red-500"
              onChange={(e) =>
                appDispatch({
                  type: 'SET_IS_GIFT',
                  isGift: e.target.checked,
                })
              }
            />
            <label htmlFor="gift" className="flex flex-col">
              <span>This package is a gift</span>
              <span className="text-sm">
                Prices will not be show in the package slip
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-start gap-2 sm:hidden">
        <input type="checkbox" id="gift" className="mt-1.5 block" />
        <label htmlFor="gift" className="flex flex-col">
          <span>This package is a gift</span>
          <span className="text-sm">
            Prices will not be show in the package slip
          </span>
        </label>
      </div>
    </div>
  );
};

export default CartItem;
