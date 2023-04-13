"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "../context";

const Navbar = () => {
  const pathname = usePathname();
  const { cartItems } = useAppState();

  const links = [
    { name: "home", path: "/" },
    { name: "products", path: "/products" },
    { name: "techniques", path: "/techniques" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b-2 border-neutral-300">
      <div className="mx-auto  flex w-3/4 items-center justify-between py-4 px-2">
        <div className="flex items-center justify-between gap-4">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                className={pathname === link.path ? "border-b-2 p-1" : "p-1"}
              >
                {link.name}
              </Link>
            );
          })}
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
