"use client";

import { useAppDispatch } from "@/app/context";
import { Product } from "@/app/utils/models";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface ProductHandler {
  product: Product;
}

const ProductHandler: React.FC<ProductHandler> = ({ product }) => {
  const router = useRouter();
  const appDispatch = useAppDispatch();
  const [amount, setAmount] = useState(1);

  const handlePlusClick = () => {
    setAmount((prevValue) => prevValue + 1);
  };

  const handleMinusClick = () => {
    setAmount((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleAddToCart = () => {
    appDispatch({ type: "ADD_CART_ITEM", cartItem: { ...product, amount } });
    router.push("/cart");
  };

  return (
    <div className="flex gap-8  mt-8 flex-col">
      <div className="flex gap-1">
        <div
          className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200"
          onClick={handleMinusClick}
        >
          <BiMinus />
        </div>
        <p className="text-center text-lg bg-gray-300 px-6">{amount}</p>
        <div
          className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200"
          onClick={handlePlusClick}
        >
          <BiPlus />
        </div>
      </div>
      <button
        className="transition-all ease-in-out p-4 bg-gray-400 rounded hover:bg-gray-200"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductHandler;
