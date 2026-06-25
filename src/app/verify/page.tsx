import type { Metadata } from "next"
import VerifyClient from "./client"

export const metadata: Metadata = {
  title: "Verify Internship Certificate",
  description: "Verify the authenticity of credentials, training course documents, and IT internship certificates officially issued by Prokodex.",
}

export default function VerifyPage() {
  return <VerifyClient />
}

