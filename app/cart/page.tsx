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
      {cartItems.length > 0 ? (
        <h4 className="pt-8 pb-16 text-3xl font-thin">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your
          cart.
        </h4>
      ) : (
        <h4 className="py-8 text-3xl font-thin">No items in your cart yet.</h4>
      )}
      {cartItems.length > 0 ? (
        <table className="w-full text-left text-sm text-gray-500 ">
          <thead className="text-xs uppercase">
            {/* <tr>
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
            </tr> */}
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b bg-white">
                <td className="flex items-center justify-center px-6 py-4 text-center">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </td>
                <td className="px-6 py-4 text-center font-semibold">
                  {item.name}
                </td>
                <td
                  className="cursor-pointer px-6 py-4 text-center"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  remove
                </td>
                <td className="px-6 py-4 text-center">{item.price} €</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="border-b bg-white px-6 py-4 text-center">
                {total} €
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="flex items-center justify-center">
                <Link
                  href="/order"
                  className="mt-8 block w-min whitespace-nowrap rounded-full bg-neutral-800 px-5 py-2.5 text-center tracking-wider text-white"
                >
                  Proceed to checkout
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </Container>
  );
};
export default Cart;
