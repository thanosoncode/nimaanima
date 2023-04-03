"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-700 fixed bottom-0 left-0 w-full">
      <div className="w-3/4 flex gap-2 py-4 px-2 mx-auto justify-center">
        <p>&copy; Copyright 2023</p>{" "}
        <Link
          href="/admin"
          className={pathname === "/admin" ? "text-white" : "text-black"}
        >
          Admin
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
