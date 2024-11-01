export default function sitemap() {
    return [
      {
        url: 'https://penned.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `https://penned.vercel.app/blog/${blog_id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }