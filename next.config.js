/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath:  '',
    assetPrefix: './',
    images: {
      unoptimized: true, //para exportar imagenes en modo estatico
      remotePatterns: [{
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      }],
    },
    reactStrictMode: true,
  }
  
// export default nextConfig;
module.exports = nextConfig;