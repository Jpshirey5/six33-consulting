import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep images simple for Cloudflare. Turn this off later if you set up
  // Cloudflare Images for next/image optimization.
  images: { unoptimized: true },
  async redirects() {
    return [
      // /contact was removed. Booking a discovery call is the way in now.
      { source: "/contact", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
