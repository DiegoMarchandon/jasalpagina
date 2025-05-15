const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Para exportar estático
  assetPrefix: isProd ? '/jasalpagina/' : '', // Prefijo para recursos estáticos en producción
  images: {
    unoptimized: true, // Para evitar optimizaciones que no funcionan en export estático
  },
};

export default nextConfig;
// module.exports = nextConfig;