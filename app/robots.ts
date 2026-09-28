import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url || 'https://madeeasygroup.net';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
