/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    NEXTAUTH_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEB_HOOK_SECRET_TEST: process.env.STRIPE_WEB_HOOK_SECRET,
    STRIPE_WEB_HOOK_SECRET: process.env.STRIPE_WEB_HOOK_SECRET,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'scontent-lga3-1.xx.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
