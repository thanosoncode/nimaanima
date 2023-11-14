'use client';

import { useAppDispatch, useAppState } from '@/app/context/context';

import { Product } from '@/app/utils/types';
import { useRouter } from 'next/navigation';

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppState();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_CART_ITEM', cartItem: product });
    const storage = localStorage.getItem('cartItems');
    if (storage) {
      const items = JSON.parse(storage);
      localStorage.setItem('cartItems', JSON.stringify([...items, product]));
    } else {
      localStorage.setItem('cartItems', JSON.stringify(product));
    }
    router.push('/cart');
  };

  const isInCart =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.find((item) => item.id === product.id)
      ? true
      : false;

  const addToCart = (
    <button
      onClick={handleAddToCart}
      className={`mx-auto mt-12  w-full rounded-full bg-neutral-900 py-3 text-center text-white duration-100 ease-in-out sm:mt-6 ${
        !isInCart ? 'hover:scale-[1.04] hover:opacity-80' : ''
      } `}
      disabled={isInCart}
    >
      {isInCart ? 'In cart' : 'Add to cart'}
    </button>
  );

  const itemSold = (
    <div className="mt-12 sm:mt-6">
      <p className="font-semibold">Someone got this already.</p>
      <p>See if you like some of the ones below</p>
    </div>
  );

  return product.sold ? itemSold : addToCart;
};
export default AddToCart;
