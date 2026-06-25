import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://prokodex.in"),
  title: {
    default: "Prokodex - AI, Web & APP Development, Digital Marketing & Graphics Design Services",
    template: "%s | Prokodex"
  },
  description: "Prokodex provides AI automation, web development, mobile app development, digital marketing, graphic design, video editing, internships, and custom software solutions for startups and businesses.",
  keywords: [
    "AI Automation",
    "AI Chatbots",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Next.js Development",
    "React.js Development",
    "Node.js Development",
    "Digital Marketing",
    "SEO Services",
    "Social Media Marketing",
    "Graphic Design",
    "Logo Design",
    "Video Editing",
    "UI UX Design",
    "Business Automation",
    "SaaS Development",
    "Internship Program",
    "Frontend Development",
    "Website Design",
    "Software Agency India",
    "Digital Agency India",
    "Prokodex"
  ],
  authors: [{ name: "Prokodex Team", url: "https://prokodex.in" }],
  creator: "Prokodex",
  publisher: "Prokodex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon_io-dark-mode/favicon-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon_io-dark-mode/favicon-16x16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: [
      { url: "/favicon_io/favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon_io-dark-mode/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", media: "(prefers-color-scheme: light)" },
      { url: "/favicon_io-dark-mode/apple-touch-icon.png", sizes: "180x180", media: "(prefers-color-scheme: dark)" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Prokodex - AI, Web & APP Development, Digital Marketing & Graphics Design Services",
    description: "Prokodex provides AI automation, web development, mobile app development, digital marketing, graphic design, video editing, internships, and custom software solutions for startups and businesses.",
    url: "https://prokodex.in",
    siteName: "Prokodex",
    images: [
      {
        url: "/images/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Prokodex - AI & Software Agency Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prokodex - AI, Web & APP Development, Digital Marketing & Graphics Design Services",
    description: "Prokodex provides AI automation, web development, mobile app development, digital marketing, graphic design, video editing, internships, and custom software solutions for startups and businesses.",
    images: ["/images/seo-banner.png"],
    creator: "@prokodex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "react-hot-toast"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prokodex",
    "url": "https://prokodex.in",
    "logo": "https://prokodex.in/logo-dark.png",
    "description": "Prokodex provides AI automation, web development, mobile app development, digital marketing, graphic design, video editing, internships, and custom software solutions for startups and businesses.",

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-72505-91448",
      "contactType": "customer service",
      "email": "info@prokodex.in",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://twitter.com/prokodex",
      "https://github.com/prokodex",
      "https://linkedin.com/company/prokodex"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} min-h-screen bg-background antialiased flex flex-col overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#000000"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px rgba(255,255,255,0.5), 0 0 5px rgba(255,255,255,0.3)"
          />
          <Navbar />
          <main className="flex-1 pt-28">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
