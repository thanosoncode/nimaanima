import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import UserMenu from './userMenu/UserMenu';
import { UserSession } from '@/app/utils/types';

interface UserLikProps {
  session: UserSession;
}

const UserLik = ({ session }: UserLikProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const handleUserMenuOpen = () => setUserMenuOpen(!userMenuOpen);

  const userLink = (
    <div className="relative mr-1 ml-3">
      <div onClick={handleUserMenuOpen} className="cursor-pointer duration-300">
        {session.dbUser.image ? (
          <div className="relative h-6 w-6">
            <Image
              className="rounded-full"
              src={session?.dbUser.image ?? ''}
              fill
              alt={session.dbUser?.name ?? ''}
              sizes="24px"
            />
          </div>
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-gray-200  text-blue-500 hover:bg-gray-300">
            <span> {session.dbUser.email[0].toUpperCase()}</span>
          </div>
        )}
      </div>
      <UserMenu
        userMenuOpen={userMenuOpen}
        onClose={() => setUserMenuOpen(false)}
      />
    </div>
  );

  return userLink;
};

export default UserLik;
