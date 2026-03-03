import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/case-studies/tata-consumer",
        destination: "/case-studies/eight-o-clock-coffee",
        permanent: true,
      },
      {
        source: "/case-studies/core",
        destination: "/case-studies/core-equipment-co",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
