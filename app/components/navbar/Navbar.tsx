'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppState } from '../../context/context';
import { BsCart4 } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const pathname = usePathname();
  const { cartItems, favorites } = useAppState();

  const links = [
    { name: 'Products', path: '/' },
    { name: "How they're made", path: '/techniques' },
  ];

  return (
    <nav className='border-b-2 border-neutral-300'>
      <div className='mx-auto flex w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1140px]'>
        <Link href='/' className='font-bold text-xl text-main-400 sm:text-3xl'>
          nimaAnima
        </Link>
        <div className='flex items-center gap-1 sm:gap-4'>
          {links.map((link) => {
            return (
              <Link
                prefetch={false}
                key={link.name}
                href={link.path}
                className={
                  pathname === link.path
                    ? 'mt-1 block border-b-2 border-main-400 p-1 text-sm sm:text-base'
                    : 'mt-1 block border-b-2 border-transparent p-1 text-sm sm:text-base'
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Link
            href={'/contact'}
            className={
              'hidden rounded-full border border-main-400  px-4 py-1 text-main-400 duration-300 ease-in-out hover:bg-main-400 hover:text-white sm:block'
            }
          >
            Get in touch
            <MdOutlineEmail className='mt-1 text-xl text-main-400 sm:hidden' />
          </Link>
          <Link href='/favorites'>
            <AiOutlineHeart size={20} />
          </Link>

          <Link href='/cart' className=''>
            <div className='relative mt-0.5 mr-2 sm:mr-0'>
              <BsCart4 size={20} />
              {cartItems.length > 0 ? (
                <span className='absolute -right-2 -top-2 w-6 h-6 text-sm rounded-full bg-main-400 text-white flex justify-center items-center'>
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
