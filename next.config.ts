import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "my-portfolio";
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
};

export default nextConfig;
