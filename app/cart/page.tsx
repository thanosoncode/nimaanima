"use client";

import Image from "next/image";
import { useAppDispatch, useAppState } from "../context";
import Container from "../components/Container";
import Link from "next/link";

const Cart = () => {
  const { cartItems } = useAppState();
  const appDispatch = useAppDispatch();

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (id: string) =>
    appDispatch({ type: "REMOVE_ITEM", id });

  return (
    <Container>
      <h4 className="py-4">Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        <table className="w-full text-left text-sm text-gray-500 ">
          <thead className="text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Item
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                remove
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b bg-white">
                <td className="flex items-center justify-center px-6 py-4 text-center">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={50}
                    height={40}
                  />
                </td>
                <td className="px-6 py-4 text-center">{item.name}</td>
                <td
                  className="px-6 py-4 text-center"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  remove
                </td>
                <td className="px-6 py-4 text-center">{item.price} EUROS</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="border-b bg-white px-6 py-4 text-center">
                {total} EUROS
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Link href="/order">continue</Link>
    </Container>
  );
};
export default Cart;
