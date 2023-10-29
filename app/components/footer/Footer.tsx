import Link from 'next/link';
import Container from '../container/Container';
import CTA from './cta/CTA';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <footer>
      <CTA />
      <div className='bg-someBlue-600'>
        <Container classes='flex gap-2 py-4 px-2 justify-between max-w-[1140px]'>
          <p className='text-white text-sm'>2023</p>
          <div className='flex gap-2 items-center'>
            <Link href='/products' className='underline text-white text-sm'>
              Products
            </Link>
            <Link href='/techniques' className='underline text-white text-sm'>
              Techniques
            </Link>
            <Link href='/contact' className='underline text-white text-sm'>
              Contact
            </Link>
            {session ? (
              <Link href='/manage' className='underline text-white text-sm'>
                Manage
              </Link>
            ) : null}
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
