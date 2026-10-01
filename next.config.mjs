/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/services/visa-guide",
        destination: "/visa-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
