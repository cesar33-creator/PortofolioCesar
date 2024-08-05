import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // konfigurasi Next.js di sini
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
