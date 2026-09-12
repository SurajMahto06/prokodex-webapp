import type { Metadata } from "next"
import InternshipClient, { FALLBACK_PROGRAMS, Program } from "./client"

export const metadata: Metadata = {
  openGraph: {
    url: "/internship",
  },
  title: "Internship Programs - Web Development & Tech Internships",
  description: "Kickstart your IT career with Prokodex. Join our live project-based internships for Web Development, React, Node.js, AI, and Digital Marketing training.",
  alternates: {
    canonical: "/internship",
  },
}

async function getPrograms(): Promise<Program[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"
    const res = await fetch(`${apiUrl}/programs?publishedOnly=true`, {
      next: { revalidate: 60 }
    })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        return data
      }
    }
  } catch (err) {
    console.error("Error fetching programs on server:", err)
  }
  return FALLBACK_PROGRAMS
}

export default async function InternshipPage() {
  const programs = await getPrograms()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Prokodex Internship & Mentorship Programs",
    "description": "Fast-track your software career. Join Prokodex internships to work on live systems with senior dev mentors in React, Next.js, Node.js, mobile app dev, and UI/UX design.",
    "itemListElement": programs.map((prog, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": `${prog.title} Internship`,
        "description": prog.description,
        "provider": {
          "@type": "Organization",
          "name": "Prokodex",
          "url": "https://prokodex.in"
        }
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InternshipClient initialPrograms={programs} />
    </>
  )
}

