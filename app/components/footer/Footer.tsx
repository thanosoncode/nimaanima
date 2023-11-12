import Link from 'next/link';
import Container from '../container/Container';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { UserSession } from '@/app/utils/types';
import LevelTwo from './levels/LevelTwo';

const Footer = async () => {
  const session = (await getServerSession(authOptions)) as UserSession;
  const isAdmin = session?.dbUser?.email === process.env.ADMIN_EMAIL_1;

  return (
    <footer>
      <LevelTwo />
      <div className='bg-someBlue-600'>
        <Container classes='flex gap-2 py-4 justify-between  sm:flex-row flex-col'>
          <div className='text-white text-sm flex gap-2'>
            <p>2023</p>
            <p>
              Design inspired by{' '}
              <Link
                href='https://www.etsy.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                etsy.com
              </Link>
            </p>
          </div>
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
            {isAdmin ? (
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
