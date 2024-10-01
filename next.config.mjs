/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akfgfragments.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  }
}

export default nextConfig