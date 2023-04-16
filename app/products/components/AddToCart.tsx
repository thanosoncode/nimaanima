"use client";

import { useAppDispatch, useAppState } from "@/app/context";

import { Product } from "@/app/utils/models";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_CART_ITEM", cartItem: product });
  };

  const { cartItems } = useAppState();
  const isNotInCart = !cartItems.find((item) => item.id === product.id);

  return (
    <button
      onClick={handleAddToCart}
      className={`mt-6 w-full rounded-full bg-black py-3 text-center text-white duration-100 ease-in-out ${
        isNotInCart ? "hover:scale-105" : ""
      } `}
      disabled={!isNotInCart}
    >
      {isNotInCart ? "Add to cart" : "Added!"}
    </button>
  );
};
export default AddToCart;
