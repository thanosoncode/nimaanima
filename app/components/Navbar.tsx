"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "../context";

const Navbar = () => {
  const pathname = usePathname();
  const { cartItems } = useAppState();

  const links = [
    { name: "Products", path: "/products" },
    { name: "Techniques", path: "/techniques" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b-2 border-neutral-300">
      <div className="mx-auto  flex w-3/4 items-center justify-between py-4 px-2">
        <Link href="/" className="bold text-3xl text-main-400">
          nimaAnima
        </Link>
        <div className="flex items-center gap-4">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                className={
                  pathname === link.path
                    ? "border-b-2 border-main-400 p-1"
                    : "border-b-2 border-transparent p-1"
                }
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
