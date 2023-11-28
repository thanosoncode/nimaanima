'use client';
import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Empty from './empty/Empty';
import List from './list/list';
import { UserSession } from '@/app/utils/types';
import Container from '@/app/components/container/Container';
import { useSession } from 'next-auth/react';
import { useAppState } from '@/app/context/context';
import Spinner from '@/app/components/spinner/Spinner';

export const dynamic = 'force-dynamic';

const Favorites = () => {
  const { favorites } = useAppState();
  const session = useSession() as { data: UserSession | null; status: string };
  const isLoading = session.status === 'loading';

  const header = session?.data?.dbUser ? (
    <div className="mb-16">
      <h4 className="text-neutral-950 text-4xl font-thin  sm:text-5xl">
        Favorite items
      </h4>
    </div>
  ) : (
    <div className="mb-16">
      <div className="mb-8 flex items-center justify-between gap-8 sm:justify-start">
        <h4 className="text-neutral-950 whitespace-nowrap text-4xl font-thin  sm:text-5xl">
          Favorite items
        </h4>
        <Link
          href="/signin"
          className="block whitespace-nowrap rounded-full border-2 border-neutral-900 py-2 px-4 duration-200 hover:scale-[1.04] hover:shadow"
        >
          Sign in
        </Link>
      </div>
      <div className="mb-3 flex items-center gap-1">
        <AiOutlineClockCircle size={22} />
        <p className="font-medium">
          Don&apos;t lose your faves! Sign in or create an account.
        </p>
      </div>
      <p className="max-w-[420px] leading-relaxed text-neutral-600">
        Guest favorites are only saved to your device for 7 days, or until you
        clear your cache. Sign in or create an account to hang on to your picks.
      </p>
    </div>
  );

  const result = (
    <Container classes="sm:mt-6 mt-12 mb-32">
      {header}
      {favorites.length > 0 ? <List /> : <Empty />}
    </Container>
  );

  return isLoading ? (
    <div className="mt-20">
      <Spinner size="w-12 h-12" />
    </div>
  ) : (
    result
  );
};

export default Favorites;
