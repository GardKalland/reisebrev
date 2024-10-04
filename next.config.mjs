/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
    },
  };
  
  export default nextConfig;
  
