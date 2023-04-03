"use client";

import { MockProduct } from "@/app/utils/models";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface ProductHandler {
  product: MockProduct;
}

const ProductHandler: React.FC<ProductHandler> = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const handlePlusClick = () => {
    setAmount((prevValue) => prevValue + 1);
  };

  const handleMinusClick = () => {
    setAmount((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <div className="flex gap-8  mt-8 ">
      <div className="flex gap-1">
        <div
          className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200"
          onClick={handleMinusClick}
        >
          <BiMinus />
        </div>

        <p className="text-center text-lg bg-gray-300 px-6 flex justify-center items-center">
          {amount}
        </p>

        <div
          className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200"
          onClick={handlePlusClick}
        >
          <BiPlus />
        </div>
      </div>
      <button
        className="transition-all ease-in-out p-4 bg-gray-300 rounded hover:bg-gray-900 hover:text-white"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductHandler;
