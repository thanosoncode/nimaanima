import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Empty from './empty/Empty';
import List from './list/list';
import { UserSession } from '@/app/utils/types';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import ClientFavorites from './clientFavorites/ClientFavorites';
import Container from '@/app/components/container/Container';

const Favorites = async () => {
  const session = (await getServerSession(authOptions)) as UserSession;

  const favorites = session?.dbUser.favorites;

  const serverFavorites = (
    <Container classes='sm:mt-6 mt-12 mb-32'>
      {session?.dbUser ? (
        <div className='mb-16'>
          <h4 className='text-4xl sm:text-5xl font-thin  text-neutral-950'>
            Favorite items
          </h4>
        </div>
      ) : (
        <div className='mb-16'>
          <div className='flex gap-8 justify-between sm:justify-start items-center mb-8'>
            <h4 className='text-4xl whitespace-nowrap sm:text-5xl font-thin  text-neutral-950'>
              Favorite items
            </h4>
            <Link
              href='/signin'
              className='py-2 px-4 border-2 rounded-full border-neutral-900 whitespace-nowrap block hover:scale-[1.04] duration-200 hover:shadow'
            >
              Sign in
            </Link>
          </div>
          <div className='flex gap-1 items-center mb-3'>
            <AiOutlineClockCircle size={22} />
            <p className='font-medium'>
              Don&apos;t lose your faves! Sign in or create an account.
            </p>
          </div>
          <p className='max-w-[420px] text-neutral-600 leading-relaxed'>
            Guest favorites are only saved to your device for 7 days, or until
            you clear your cache. Sign in or create an account to hang on to
            your picks.
          </p>
          di
        </div>
      )}

      {favorites && favorites.length > 0 ? (
        <List favorites={favorites} />
      ) : (
        <Empty />
      )}
    </Container>
  );

  const result = session?.dbUser ? serverFavorites : <ClientFavorites />;

  return result;
};

export default Favorites;
