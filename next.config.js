/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/game',
        destination: '/game/list',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
