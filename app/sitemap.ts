import { MetadataRoute } from 'next';
import { ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url || 'https://madeeasygroup.net';
  const currentDate = new Date();

  // Core static marketing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/estates`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/book-inspection`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic estate routes for all 10+ estates
  const estateRoutes: MetadataRoute.Sitemap = ESTATES_DATA.map((estate) => ({
    url: `${baseUrl}/estates/${estate.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: estate.featured ? 0.9 : 0.85,
  }));

  return [...staticRoutes, ...estateRoutes];
}
