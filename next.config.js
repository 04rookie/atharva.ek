/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html",
        },
        {
          source: "/home",
          destination: "/index.html",
        },
      ],
    };
  },
};

module.exports = nextConfig;
