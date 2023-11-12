"use client";

import { signOut } from "next-auth/react";
import { useEffect, useRef } from "react";

interface UserMenuProps {
  userMenuOpen: boolean;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ userMenuOpen, onClose }) => {
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    signOut();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (userMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [userMenuOpen]);

  return (
    <div
      className={`${
        userMenuOpen ? "block" : "hidden"
      } absolute top-8 right-0 z-20 w-32 rounded border bg-white py-2 shadow-lg`}
      ref={userMenuRef}
    >
      <div className="flex flex-col gap-2 ">
        <button
          className="whitespace-nowrap bg-white py-1.5 pl-6 text-left text-gray-500 duration-300 hover:bg-gray-300"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
