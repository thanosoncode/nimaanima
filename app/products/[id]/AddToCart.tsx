"use client";

import { Product } from "@/app/utils/models";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log(product);
  };
  return (
    <button
      onClick={handleAddToCart}
      className="mt-6 w-full rounded-full bg-black py-3 text-center text-white duration-100 ease-in-out hover:scale-105"
    >
      Add to cart
    </button>
  );
};
export default AddToCart;
