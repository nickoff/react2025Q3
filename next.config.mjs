/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  distDir: 'build',
  devIndicators: false,
  images: {
    remotePatterns: [new URL('https://cdn.myanimelist.net/**')],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
