'use client';

import AddToCartDb from '@/app/components/addToCartDb/AddToCartDb';
import { useAppDispatch, useAppState } from '@/app/context/context';

import { Product, UserSession } from '@/app/utils/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppState();
  const router = useRouter();
  const session = useSession() as {
    data: UserSession | null;
    status: string;
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_CART_ITEM', cartItem: product });
    const storage = localStorage.getItem('cartItems');
    if (storage) {
      const items = JSON.parse(storage);
      localStorage.setItem('cartItems', JSON.stringify([...items, product]));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([product]));
    }
  };

  const isInCart =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.find((item) => item.id === product.id)
      ? true
      : false;

  const addToCartButton = (
    <button
      disabled={isInCart}
      onClick={handleAddToCart}
      className="p-y-1 w-min whitespace-nowrap rounded-full border-2 border-neutral-500 px-2 text-sm sm:px-3 sm:text-base"
    >
      {isInCart ? 'In cart' : 'Add to cart'}
    </button>
  );

  return session.data?.dbUser ? (
    <AddToCartDb
      userId={session.data.dbUser.id}
      product={product}
      isInCart={isInCart}
      variant="outlined"
    />
  ) : (
    addToCartButton
  );
};
export default AddToCartButton;
