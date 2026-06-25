import type { Metadata } from "next"
import ServicesClient from "./client"

export const metadata: Metadata = {
  title: "Web Design, App Dev & Digital Marketing Services",
  description: "Explore Prokodex's premium IT services: AI Automation, Web & Mobile App Development, Digital Marketing, SEO, Graphic Design, and Custom SaaS solutions.",
}

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Prokodex",
      "url": "https://prokodex.in",
      "logo": "https://prokodex.in/logo-dark.png"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development & Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots",
            "description": "24/7 lead qualification & customer support. Works on WhatsApp, web, and social media."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Admin Dashboards",
            "description": "Real-time analytics, KPIs, and reporting. See your business at a glance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industry CRMs",
            "description": "Tailored for finance, healthcare, real estate & more. Manage leads, loans, clients."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "iOS & Android apps — cross-platform, fast, built for your business."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Deployment",
            "description": "Responsive websites & e-commerce. SEO-optimized, mobile-first."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software",
            "description": "Automate workflows, integrate APIs, build micro SaaS. Your idea, our code."
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  )
}

