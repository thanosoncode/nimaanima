'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../container/Container';
import CTA from './cta/CTA';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      <CTA />
      <div className='bg-someBlue-600'>
        <Container classes='flex gap-2 py-4 px-2 justify-between max-w-[1140px]'>
          <p>&copy; Copyright 2023</p>{' '}
          <Link
            href='/manage'
            className={pathname === '/manage' ? 'text-white' : 'text-black'}
          >
            manage
          </Link>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
