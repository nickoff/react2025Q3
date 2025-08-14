/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  devIndicators: false,
  images: {
    remotePatterns: [new URL('https://cdn.myanimelist.net/**')],
  },
};

export default nextConfig;
