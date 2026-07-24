import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.porticointelligence.com" }],
        destination: "https://porticointelligence.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
