import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://prokodex.in"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
