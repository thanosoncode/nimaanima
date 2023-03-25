"use client";

import Image from "next/image";
import { useAppDispatch, useAppState } from "../context";
import { BiMinus, BiPlus } from "react-icons/bi";

const Cart = () => {
  const { cartItems } = useAppState();
  const appDispatch = useAppDispatch();

  const handlePlusClick = (id: string) => {
    const newCartITems = cartItems.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    appDispatch({ type: "SET_CART_ITEMS_AMOUNT", cartItems: newCartITems });
  };

  const handleMinusClick = (id: string) => {
    const cartItem = cartItems.find((item) => item.id === id);

    if (cartItem?.amount && cartItem?.amount > 1) {
      const newCartITems = cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      appDispatch({ type: "SET_CART_ITEMS_AMOUNT", cartItems: newCartITems });
      return;
    }

    const newCartITems = cartItems.filter((item) => item.id !== cartItem?.id);
    appDispatch({ type: "SET_CART_ITEMS_AMOUNT", cartItems: newCartITems });
  };

  const total = cartItems.reduce((result, item) => {
    return result + item.amount * item.price;
  }, 0);

  return (
    <>
      <h4 className="py-4">Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Item
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                amount
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="bg-white border-b">
                <td className="px-6 py-4 text-center flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={40}
                  />
                </td>
                <td className="px-6 py-4 text-center">{item.name}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <BiMinus onClick={() => handleMinusClick(item.id)} />
                    {item.amount}
                    <BiPlus onClick={() => handlePlusClick(item.id)} />
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  {item.amount * item.price} EUROS
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="px-6 py-4 text-center bg-white border-b">
                {total} EUROS
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
export default Cart;
