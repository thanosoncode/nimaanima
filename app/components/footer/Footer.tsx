import Link from 'next/link';
import Container from '../container/Container';
import { getServerSession } from 'next-auth';
import { UserSession } from '@/app/utils/types';
import LevelTwo from './levels/LevelTwo';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const Footer = async () => {
  const session = (await getServerSession(authOptions)) as UserSession;
  const isAdmin = session?.dbUser?.email === process.env.ADMIN_EMAIL_1;

  return (
    <footer>
      <LevelTwo />
      <div className="bg-someBlue-600">
        <Container classes="flex gap-2 py-4 justify-between  sm:flex-row flex-col">
          <div className="flex gap-2 text-sm text-white">
            <p>2023</p>
            <p>
              Design inspired by{' '}
              <Link
                href="https://www.etsy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                etsy.com
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/products" className="text-sm text-white underline">
              Products
            </Link>
            <Link href="/techniques" className="text-sm text-white underline">
              Techniques
            </Link>
            <Link href="/contact" className="text-sm text-white underline">
              Contact
            </Link>
            {isAdmin ? (
              <Link href="/manage" className="text-sm text-white underline">
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
