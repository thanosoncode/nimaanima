'use client';

import Link from 'next/link';
import Empty from '../empty/Empty';
import List from '../list/list';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useAppState } from '@/app/context/context';
import Container from '@/app/components/container/Container';

const ClientFavorites = () => {
  const { favorites: favoritesFromState } = useAppState();

  return (
    <Container classes='mt-6 sm:mt-12 pb-32'>
      <div className='mb-16'>
        <div className='flex gap-8 justify-between sm:justify-start  items-center mb-8'>
          <h4 className='text-4xl whitespace-nowrap sm:text-5xl font-thin  text-neutral-950'>
            Favorite items
          </h4>
          <Link
            href='/signin'
            className='py-2 px-4 border-2 rounded-full border-neutral-900 block whitespace-nowrap hover:scale-[1.04] duration-200 hover:shadow'
          >
            Sign in
          </Link>
        </div>
        <div className='flex gap-2 items-start mb-3'>
          <AiOutlineClockCircle size={22} />
          <p className='font-medium'>
            Don&apos;t lose your faves! Sign in or create an account.
          </p>
        </div>
        <p className='max-w-[420px] text-neutral-600 leading-relaxed'>
          Guest favorites are only saved to your device for 7 days, or until you
          clear your cache. Sign in or create an account to hang on to your
          picks.
        </p>
      </div>
      {}

      {favoritesFromState && favoritesFromState.length > 0 ? (
        <List favorites={favoritesFromState} />
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default ClientFavorites;
