import type { Metadata } from "next"
import HomeClient from "./client"


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Prokodex",
    "url": "https://prokodex.in",
    "description": "Prokodex provides AI automation, web development, mobile app development, digital marketing, graphic design, video editing, internships, and custom software solutions for startups and businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "Prokodex",
      "url": "https://prokodex.in",
      "logo": "https://prokodex.in/logo-dark.png"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prokodex.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}
