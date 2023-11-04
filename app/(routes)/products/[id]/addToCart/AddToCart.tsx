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
    router.push('/cart');
  };

  const { cartItems } = useAppState();
  const isNotInCart = !cartItems.find((item) => item.id === product.id);

  return (
    <button
      onClick={handleAddToCart}
      className={`mx-auto mt-2 w-1/3  rounded-full bg-neutral-900 py-2 text-center text-white duration-100 ease-in-out sm:mt-6 sm:w-full sm:py-3 ${
        isNotInCart ? 'hover:scale-[1.04] hover:opacity-80' : ''
      } `}
      disabled={!isNotInCart}
    >
      {isNotInCart ? 'Add to cart' : 'Added!'}
    </button>
  );
};
export default AddToCart;
