import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/himatifunira",
        destination: "https://www.instagram.com/himatif.unira",
        permanent: true,
      },
      {
        source: "/demtimcod",
        destination: "https://demtimcod.github.io/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
