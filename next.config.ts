import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    sri: {
      algorithm:"sha256"
    }
  },

  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
         {

  key: 'Content-Security-Policy',

  value: `

    default-src 'self';

    script-src 'self';

    object-src 'none';

    base-uri 'self';

    frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;

    img-src 'self' data: https://i.ytimg.com;

    style-src 'self' 'unsafe-inline';

    connect-src 'self';

  `.replace(/\n/g, ''),

},
       {

  key: 'Cross-Origin-Opener-Policy',

  value: 'same-origin',

},
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        {

  key: 'X-Frame-Options',

  value: 'SAMEORIGIN', // or remove

},
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
