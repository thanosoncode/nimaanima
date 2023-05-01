"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "../context";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();
  const { cartItems } = useAppState();

  const links = [
    { name: "Products", path: "/products" },
    { name: "How they're made", path: "/techniques" },
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
                prefetch={false}
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
        <div className="flex items-center justify-center gap-4">
          <Link
            href={"/contact"}
            className={
              "rounded-full border border-main-400 px-4 py-1 text-main-400 duration-300 ease-in-out hover:bg-main-400 hover:text-white"
            }
          >
            Get in touch
          </Link>
          <Link
            href="/cart"
            className={pathname === "/cart" ? "text-white" : "text-black"}
          >
            <div className="relative">
              <BsBag />
              {cartItems.length > 0 ? (
                <span className="absolute -right-2 -top-2">
                  {cartItems.length}
                </span>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
