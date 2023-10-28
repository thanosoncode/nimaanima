'use client';

import { signOut } from 'next-auth/react';
import { useEffect, useRef } from 'react';

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
      document.addEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [userMenuOpen]);

  return (
    <div
      className={`${
        userMenuOpen ? 'block' : 'hidden'
      } absolute py-2 top-8 right-0 rounded border shadow-lg bg-white w-32 z-20`}
      ref={userMenuRef}
    >
      <div className='flex flex-col gap-2 '>
        <button
          className='whitespace-nowrap text-gray-500 hover:bg-gray-300 bg-white pl-6 text-left duration-300 py-1.5'
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
