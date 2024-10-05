/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
    },
  };
 console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID); 
  export default nextConfig;
  
