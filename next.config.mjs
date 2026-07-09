/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static catalog — no server code. Exports to /out, deployable to Vercel
  // (or any static host) and avoids server file-tracing issues on paths with "#".
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
