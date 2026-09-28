import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: 'Made Easy Homes',
    description: SITE_CONFIG.subheadline,
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#164E48',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
