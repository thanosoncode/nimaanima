import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Session } from '@/app/utils/types';
import { getServerSession } from 'next-auth';
import Manage from './Manage';
import { redirect } from 'next/navigation';

const ManagePage = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL_1;

  if (!isAdmin) {
    redirect('/');
  }
  return <Manage />;
};

export default ManagePage;
