"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
            href="/admin"
            className={pathname === "/admin" ? "text-white" : "text-black"}
          >
            admin
          </Link>
        </div>
        <Link
          href="/cart"
          className={pathname === "/cart" ? "text-white" : "text-black"}
        >
          cart
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
