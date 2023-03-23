"use client";

import { useAppState } from "../context";

const Cart = () => {
  const { cartItems } = useAppState();
  console.log(cartItems);

  return (
    <>
      <h4 className="py-4">Cart</h4>
    </>
  );
};
export default Cart;
