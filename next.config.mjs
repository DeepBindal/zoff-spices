/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'zofffoods.com',
            },
            {
              protocol: 'https',
              hostname: 'cdn.shopify.com',
            },
            {
              protocol: 'https',
              hostname: 'imgs.search.brave.com',
            },
          ],
    }
};

export default nextConfig;
