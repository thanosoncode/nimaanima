'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import CartLink from './cartLink/CartLink';
import UserLink from './userLink/UserLink';
import MobileMenu from './MobileMenu';
import { UserSession } from '@/app/utils/types';
import Container from '../container/Container';
import LocalItemsLoader from './localItemsLoader/LocalItemsLoader';

const Navbar = ({ session }: { session: UserSession | null }) => {
  const pathname = usePathname();

  const links = [
    { name: 'Products', path: '/' },
    { name: "How they're made", path: '/techniques' },
  ];

  return (
    <nav className="border-b-2 border-neutral-300">
      <Container classes="flex w-full items-center justify-between py-2 sm:py-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-bold  text-main-400 sm:text-3xl"
          >
            NimaAnima
          </Link>
          <div className="flex md:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="hidden items-center gap-1 sm:gap-4 md:flex">
          {links.map((link) => {
            return (
              <Link
                prefetch={false}
                key={link.name}
                href={link.path}
                className={`mt-1 block border-b-2 p-1 text-sm  sm:text-base ${
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
        <div className="flex items-center justify-center gap-1">
          <Link
            href={'/contact'}
            className={
              'hidden rounded-full border border-main-400  px-4 py-1 text-main-400 duration-300 ease-in-out hover:bg-main-400 hover:text-white sm:block'
            }
          >
            Get in touch
            <MdOutlineEmail className="mt-1 text-xl text-main-400 sm:hidden" />
          </Link>
          {session ? (
            <UserLink session={session} />
          ) : (
            <Link
              href="/signin"
              className="rounded-full p-2 px-2.5 text-center text-sm font-medium duration-200 hover:bg-neutral-200"
            >
              Sign in
            </Link>
          )}
          <Link
            href="/favorites"
            className="rounded-full p-1 duration-200 hover:bg-neutral-200"
          >
            <AiOutlineHeart size={20} />
          </Link>
          <CartLink />
        </div>
      </Container>
      {!session && <LocalItemsLoader />}
    </nav>
  );
};
export default Navbar;
