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
  compress: true,
  outDir:"build",
  images: { unoptimized: true },
  trailingSlash: true,

  webpack: (config, { isServer, dev }) => {
    config.module.rules.push({
      test: /next\/dist\/compiled\/react-dom/,
      loader: "null-loader",
    });

    return config;
  },
  modularizeImports: {
    "next/dist/compiled/react-dom(/?[A-Z,a-z]*)": {
      transform: "react-dom{{ matches.[1] }}",
      skipDefaultConversion: true,
    },
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
