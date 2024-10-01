/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akfgfragments.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty"],
  },
}

export default nextConfig