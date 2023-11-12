'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModal = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen && !isMouseOver) {
      document.addEventListener('click', closeModal);
    }
    return () => document.removeEventListener('click', closeModal);
  }, [menuOpen, isMouseOver]);

  const links = [
    { name: 'Products', path: '/' },
    { name: 'How they are made', path: '/techniques' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='relative flex gap-2 items-center'>
      <div
        onClick={handleMenuOpen}
        className='w-min cursor-pointer whitespace-nowrap  px-2 pt-1.5 text-center'
      >
        <FiMenu size={20} />
      </div>
      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className={`absolute top-8 left-0 z-50  flex flex-col whitespace-nowrap rounded-lg py-2 border bg-white shadow-cart duration-300 ease-in-out ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } `}
      >
        {links.map((link, index) => (
          <Link
            onClick={() => setMenuOpen(false)}
            key={index}
            href={link.path}
            className='whitespace-nowrap text-neutral-900 hover:bg-gray-300 bg-white px-6 duration-300 py-1.5 hover:underline'
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MobileMenu;
