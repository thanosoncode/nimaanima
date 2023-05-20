"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-someBlue-600">
      <Container classes="flex gap-2 py-4 px-2 justify-between max-w-[1200px]">
        <p>&copy; Copyright 2023</p>{" "}
        <Link
          href="/manage"
          className={pathname === "/manage" ? "text-white" : "text-black"}
        >
          manage
        </Link>
      </Container>
    </footer>
  );
};
export default Footer;
