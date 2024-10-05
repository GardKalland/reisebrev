/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  webpack: (config) => {
    // This will log during the build phase and runtime
    console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

    return config;
  }
};

export default nextConfig;
