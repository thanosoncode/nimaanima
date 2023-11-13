'use client';

import { useAppDispatch, useAppState } from '@/app/context/context';

import { Product } from '@/app/utils/types';
import { useRouter } from 'next/navigation';

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useAppDispatch();
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

  const { cartItems } = useAppState();
  const isNotInCart = !cartItems.find((item) => item.id === product.id);

  const addToCart = (
    <button
      onClick={handleAddToCart}
      className={`mx-auto mt-12  w-full rounded-full bg-neutral-900 py-3 text-center text-white duration-100 ease-in-out sm:mt-6 ${
        isNotInCart ? 'hover:scale-[1.04] hover:opacity-80' : ''
      } `}
      disabled={!isNotInCart}
    >
      {isNotInCart ? 'Add to cart' : 'Added!'}
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
