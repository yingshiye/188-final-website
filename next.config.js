const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/188-final-website' : '',
  assetPrefix: isProd ? '/188-final-website/' : '',
};
