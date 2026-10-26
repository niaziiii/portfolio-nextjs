import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/projects/tryhackme-showcases", destination: "/projects/cybersecurity-training-sims", permanent: true }];
  },
};

export default nextConfig;
