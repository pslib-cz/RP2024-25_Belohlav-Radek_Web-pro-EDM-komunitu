import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/RP2024-25_Belohlav-Radek_Web-pro-EDM-komunitu' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
