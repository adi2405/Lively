import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ndo8kkwdwx.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
