import million from 'million/compiler';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  './src/libs/i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {};
const millionConfig = {
  auto: { rsc: true },
};
export default million.next(withNextIntl(nextConfig), millionConfig);
