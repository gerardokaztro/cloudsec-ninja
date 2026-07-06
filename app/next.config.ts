import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js build. AWS Amplify Hosting detects and deploys this
  // natively (SSR-capable). Kept intentionally minimal for S1-01.
  reactStrictMode: true,
  // The repo root also has a package-lock.json (Docusaurus), which makes
  // Next.js misdetect the workspace root. Pin it explicitly to this folder.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
