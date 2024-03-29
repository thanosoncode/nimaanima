import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { Session, SessionStrategy } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  callbacks: {
    async session(params: { session: Session; token: JWT; user: AdapterUser }) {
      if (params.session.user && params.session.user.email) {
        const exists = await prisma.user.findFirst({
          where: { email: params.session.user?.email },
        });
        if (exists) {
          return { ...params.session, dbUser: exists };
        } else {
          const newUser = await prisma.user.create({
            data: {
              email: params.session.user.email,
              name: params.session.user.name ?? '',
              image: params.session.user.image ?? '',
              favorites: [],
            },
          });
          return { ...params.session, dbUser: newUser };
        }
      }
      return params.session;
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
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 24 * 60 * 60,
  },
};
