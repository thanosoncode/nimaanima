"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "../context";

const Navbar = () => {
  const pathname = usePathname();

  const { cartItems } = useAppState();

  return (
    <nav className="bg-gray-700">
      <div className="w-3/4  mx-auto py-4 px-2 flex justify-between items-center">
        <div className="flex justify-between gap-4 items-center">
          <Link
            href="/"
            className={pathname === "/" ? "text-white" : "text-black"}
          >
            home
          </Link>
          <Link
            href="/products"
            className={pathname === "/products" ? "text-white" : "text-black"}
          >
            products
          </Link>
          <Link
            href="/mock-product"
            className={
              pathname === "/mock-product" ? "text-white" : "text-black"
            }
          >
            Mock Product
          </Link>
        </div>
        <Link
          href="/cart"
          className={pathname === "/cart" ? "text-white" : "text-black"}
        >
          <div className="relative">
            Cart
            {cartItems.length > 0 ? (
              <span className="absolute -right-2 -top-2">
                {cartItems.length}
              </span>
            ) : null}
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
