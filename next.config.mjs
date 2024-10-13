/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "static.wixstatic.com",
        },
        {
          protocol: "https",
          hostname: "people.pic1.co",
        },
        {
          protocol: "https",
          hostname: "app-uploads-cdn.fera.ai",
        },
      ],
    },
    output: 'export', // Add this line for static export
  };
  
  export default nextConfig;