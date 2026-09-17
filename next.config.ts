import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep images simple for Cloudflare. Turn this off later if you set up
  // Cloudflare Images for next/image optimization.
  images: { unoptimized: true },
};

export default nextConfig;
