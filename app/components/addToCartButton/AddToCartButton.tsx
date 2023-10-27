'use client';

import { useAppDispatch, useAppState } from '@/app/context/context';

import { Product } from '@/app/utils/types';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
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
      disabled={!isNotInCart}
      onClick={handleAddToCart}
      className='px-3 border-2 rounded-full border-neutral-500 whitespace-nowrap p-y-1 w-min '
    >
      {isNotInCart ? 'Add to cart' : 'Added!'}
    </button>
  );
};
export default AddToCartButton;
