'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import CartLink from './cartLink/CartLink';
import UserLink from './userLink/UserLink';
import MobileMenu from './MobileMenu';
import { UserSession } from '@/app/utils/types';

const Navbar = ({ session }: { session: UserSession }) => {
  const pathname = usePathname();

  const links = [
    { name: 'Products', path: '/' },
    { name: "How they're made", path: '/techniques' },
  ];

  return (
    <nav className='border-b-2 border-neutral-300'>
      <div className='mx-auto flex w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1140px]'>
        <div className='flex items-center gap-2'>
          <Link
            href='/'
            className='font-bold text-xl text-main-400 sm:text-3xl'
          >
            nimaAnima
          </Link>
          <div className='sm:hidden flex'>
            <MobileMenu />
          </div>
        </div>
        <div className='items-center gap-1 sm:gap-4 hidden sm:flex'>
          {links.map((link) => {
            return (
              <Link
                prefetch={false}
                key={link.name}
                href={link.path}
                className={`mt-1 block text-sm sm:text-base border-b-2  p-1 ${
                  pathname === link.path
                    ? ' border-main-400'
                    : 'border-transparent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className='flex items-center justify-center gap-1'>
          <Link
            href={'/contact'}
            className={
              'hidden rounded-full border border-main-400  px-4 py-1 text-main-400 duration-300 ease-in-out hover:bg-main-400 hover:text-white sm:block'
            }
          >
            Get in touch
            <MdOutlineEmail className='mt-1 text-xl text-main-400 sm:hidden' />
          </Link>
          <UserLink session={session} />

          <Link
            href='/favorites'
            className='hover:bg-neutral-200 rounded-full p-1 duration-200'
          >
            <AiOutlineHeart size={20} />
          </Link>
          <CartLink />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
