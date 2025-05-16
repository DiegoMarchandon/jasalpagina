// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Para exportar estático
  assetPrefix: '', // vacío para producción y desarrollo
  images: {
    unoptimized: true, // Para evitar optimizaciones que no funcionan en export estático
  },
};

module.exports = nextConfig;