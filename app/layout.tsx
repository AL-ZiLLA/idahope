import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { generateLocalBusinessSchema, generateTherapistSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.therapist.name}, ${siteConfig.therapist.title} — Therapist in Boise, Idaho | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'therapist Boise Idaho', 'therapy Boise', 'counselor Boise ID', 'LMFT Boise',
    'teen therapist Boise', 'adolescent therapist Idaho',
    'anxiety therapist Boise', 'eating disorder therapist Boise',
    'depression therapist Boise Idaho', 'virtual therapy Idaho',
    'Emily Wolf therapist', 'IDAhope therapy',
  ],
  authors: [{ name: siteConfig.therapist.name }],
  creator: siteConfig.therapist.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.therapist.name}, ${siteConfig.therapist.title} — Therapist in Boise, Idaho`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.therapist.name}, ${siteConfig.therapist.title} — Therapist in Boise, Idaho`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const therapistSchema = generateTherapistSchema()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteConfig.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(therapistSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
