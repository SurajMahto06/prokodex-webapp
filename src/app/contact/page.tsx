import type { Metadata } from "next"
import ContactClient from "./client"

export const metadata: Metadata = {
  title: "Contact Prokodex for IT & Marketing Services",
  description: "Get in touch with Prokodex. Reach out to discuss web development, mobile apps, digital marketing, AI solutions, consulting, and project partnerships.",
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Prokodex",
    "url": "https://prokodex.in/contact",
    "description": "Get in touch with Prokodex. Reach out to discuss project development, consulting, partnerships, career opportunities, or internships.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Prokodex",
      "url": "https://prokodex.in",
      "email": "info@prokodex.in",
      "telephone": "+91-72505-91448",

      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-72505-91448",
        "contactType": "customer service",
        "email": "info@prokodex.in",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  )
}

