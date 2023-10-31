/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXTAUTH_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
