/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for platforms like Netlify
  output: 'export',
  // Ensure routes end with a trailing slash, matching generated HTML files
  trailingSlash: true,
};
module.exports = nextConfig;
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;