import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { AppProvider } from './context/context';
import AuthProvider from './context/AuthProvider';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { UserSession } from './utils/types';
import QueryProvider from './context/QueryProvider';

export const metadata = {
  title: 'NimaAnima',
  description: 'Handmade creations',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await getServerSession(authOptions)) as UserSession;
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QueryProvider>
            <AppProvider>
              <Navbar session={session} />
              <div className="flex min-h-[calc(100vh-66px)] flex-col justify-between">
                {children}
                <Footer />
              </div>
            </AppProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
