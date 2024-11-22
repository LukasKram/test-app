import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  //cacheHandler: process.env.NODE_ENV === "production" ? require.resolve("./cache-handler.js") : undefined,
};

export default nextConfig;
