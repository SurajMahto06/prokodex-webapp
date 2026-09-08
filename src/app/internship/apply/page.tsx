import type { Metadata } from "next"
import ApplyClient from "./client"
import { FALLBACK_PROGRAMS, Program } from "../client"

export const metadata: Metadata = {
  title: "Apply for Internship",
  description: "Enroll in a Prokodex internship program. Select your path, choose your mentorship tier, and submit your application to start coding live systems.",
}

async function getProgramTitles(): Promise<string[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"
    const res = await fetch(`${apiUrl}/programs?publishedOnly=true`, {
      next: { revalidate: 60 }
    })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        return data.map((p: Program) => p.title)
      }
    }
  } catch (err) {
    console.error("Error fetching programs for apply page:", err)
  }
  return FALLBACK_PROGRAMS.map(p => p.title)
}

export default async function ApplyPage() {
  const initialTracks = await getProgramTitles()
  return <ApplyClient initialTracks={initialTracks} />
}

