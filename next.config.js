const repo = '188-final-website'; // your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;