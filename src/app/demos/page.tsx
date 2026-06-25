import type { Metadata } from "next"
import DemoClient from "./client"

export const metadata: Metadata = {
  title: "Live Demos",
  description: "Try before you buy. Click any demo to see it in action.",
}

export default function DemoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Prokodex Demos",
    "url": "https://prokodex.in/demos",
    "description": "Try before you buy. Click any demo to see it in action.",
    "provider": {
      "@type": "Organization",
      "name": "Prokodex",
      "url": "https://prokodex.in"
    },
    "hasPart": [
      {
        "@type": "SoftwareApplication",
        "name": "Global Logistics ERP",
        "applicationCategory": "BusinessApplication"
      },
      {
        "@type": "SoftwareApplication",
        "name": "FinTrust Banking App",
        "applicationCategory": "FinanceApplication"
      },
      {
        "@type": "SoftwareApplication",
        "name": "SaaSFlow Platform",
        "applicationCategory": "BusinessApplication"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DemoClient />
    </>
  )
}
