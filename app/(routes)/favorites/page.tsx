'use client';

import { useAppState } from '@/app/context/context';
import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Empty from './empty/Empty';
import List from './list/list';

const Favorites = () => {
  const { favorites } = useAppState();

  return (
    <div className='xl:max-w-[1140px] mx-auto w-full md:px-8 px-2 mt-8 pb-32'>
      <div className='mb-24'>
        <div className='flex gap-8 items-center mb-8'>
          <h4 className='text-5xl font-thin  text-neutral-950'>
            Favorite items
          </h4>
          <Link
            href='/signin'
            className='py-2 px-4 border-2 rounded-full border-neutral-900 block hover:scale-[1.04] duration-200 hover:shadow'
          >
            Sign in
          </Link>
        </div>
        <div className='flex gap-1 items-center mb-3'>
          <AiOutlineClockCircle size={22} />
          <p className='font-medium'>
            Don't lose your faves! Sign in or create an account.
          </p>
        </div>
        <p className='max-w-[420px] text-neutral-600 leading-relaxed'>
          Guest favorites are only saved to your device for 7 days, or until you
          clear your cache. Sign in or create an account to hang on to your
          picks.
        </p>
      </div>
      {favorites.length > 0 ? <List favorites={favorites} /> : <Empty />}
    </div>
  );
};

export default Favorites;