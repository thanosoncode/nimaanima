"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      <Container classes="flex gap-2 py-4 px-2 justify-center">
        <p>&copy; Copyright 2023</p>{" "}
        <Link
          href="/admin"
          className={pathname === "/admin" ? "text-white" : "text-black"}
        >
          Admin
        </Link>
      </Container>
    </footer>
  );
};
export default Footer;
