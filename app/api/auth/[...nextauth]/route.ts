import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { SessionStrategy } from 'next-auth';
import { prisma } from '@/lib/prisma';

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  callbacks: {
    //@ts-ignore
    async session({ session }) {
      return session;
    },

    //@ts-ignore
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 24 * 60 * 60,
  },

  // debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
