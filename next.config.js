// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     if (process.env.ANALYZE) {
//       config.plugins.push(
//         new BundleAnalyzerPlugin({
//           analyzerMode: 'server',
//           analyzerPort: isServer ? 3001 : 8889, // Change the port to a different value
//           openAnalyzer: true,
//         })
//       );
//     }
//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  compress:true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
