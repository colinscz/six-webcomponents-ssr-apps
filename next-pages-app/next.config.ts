import type { NextConfig } from "next";
// import stencilSSR from '@stencil/ssr/next';

 /** @type {import('next').NextConfig} */
/* const nextConfig = {};

export default stencilSSR({
  module: import('@six-group/ui-library-react'),
  from: '@six-group/ui-library-react',
  hydrateModule: import('@six-group/ui-library/hydrate'),
  serializeShadowRoot: {
    scoped: ['my-counter'],
    default: 'declarative-shadow-dom',
  },
})(nextConfig);  */

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
