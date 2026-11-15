import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: 'https://work-with-vega.vercel.app/sitemap.xml',
    host: 'https://work-with-vega.vercel.app',
  }
}
