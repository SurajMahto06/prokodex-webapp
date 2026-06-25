import type { Metadata } from "next"
import AboutClient from "./client"

export const metadata: Metadata = {
  title: "About Us - Innovative Software & Digital Agency",
  description: "Discover Prokodex, a forward-thinking software and digital marketing agency. We specialize in AI automation, custom web development, mobile apps, and scalable IT solutions.",
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Prokodex",
    "url": "https://prokodex.in/about",
    "description": "Learn more about Prokodex. Founded by software architects, we bridge the gap between stunning UI/UX designs and high-performance server architectures.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Prokodex",
      "url": "https://prokodex.in",
      "foundingDate": "2021",
      "description": "Building Modern Digital Products That Scale. We help startups and businesses build websites, ERP systems, mobile apps, and custom software solutions.",

    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  )
}

