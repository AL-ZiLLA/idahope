import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { specialties, siteConfig } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return specialties.map((spec) => ({ slug: spec.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const specialty = specialties.find((s) => s.slug === params.slug)
  if (!specialty) return {}

  const url = `${siteConfig.url}/services/${params.slug}`

  return {
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      type: 'website',
      url: url,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      images: [siteConfig.ogImage],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const specialty = specialties.find((s) => s.slug === params.slug)
  if (!specialty) notFound()

  return (
    <main>
      <Navbar />

      <article className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[900px] mx-auto">
        <Link href="/#services" className="font-sans text-[11px] tracking-[2px] uppercase text-sage-500 font-medium no-underline mb-8 block hover:underline">
          ← Back to Services
        </Link>

        <h1 className="text-[clamp(30px,5vw,48px)] font-light text-dark leading-[1.2] mb-6">
          {specialty.title}
        </h1>

        <p className="body-text text-lg mb-12">
          {specialty.description}
        </p>

        <div className="mb-16 p-8 bg-cream-100 rounded-sm">
          <h2 className="text-2xl font-light text-dark mb-4">How I Can Help</h2>
          <p className="body-text mb-6">
            I provide compassionate, evidence-based therapy tailored to your unique needs. Whether you're navigating challenges for the first time or seeking ongoing support, I create a warm, safe space where you feel seen, heard, and empowered to take the next step on your journey.
          </p>
          <p className="body-text">
            All sessions are available virtually through our secure, HIPAA-compliant platform. Connect with me from anywhere in Idaho.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-light text-dark mb-6">What to Expect</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Initial Consultation</h3>
                <p className="body-text">
                  We'll start with a free consultation call to discuss what you're going through and how I can help. No pressure, no judgment — just a conversation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Personalized Approach</h3>
                <p className="body-text">
                  Every person's journey is unique. I use evidence-based approaches tailored to your specific needs, goals, and circumstances.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Ongoing Support</h3>
                <p className="body-text">
                  Therapy is a collaborative process. Together, we'll work toward your goals at a pace that feels right for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-light text-dark mb-6">Other Areas I Specialize In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialties
              .filter((s) => s.slug !== specialty.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-5 bg-cream-100 rounded-sm no-underline hover:bg-sage-500/5 transition-colors"
                >
                  <h3 className="text-lg font-medium text-dark mb-2">{s.title}</h3>
                  <p className="font-sans text-[13px] leading-[1.7] text-gray-400 font-light">
                    {s.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>

        <div className="p-10 bg-sage-500 rounded-sm text-center">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="font-sans text-[15px] leading-[1.8] text-white/80 font-light mb-8 max-w-[500px] mx-auto">
            Reach out for a free consultation call. We'll talk about what you're going through and how I can help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-white"
            >
              Book a Consultation
            </a>
            <a href="/#contact" className="cta-btn-outline !border-white !text-white hover:!bg-white/10">
              Get in Touch
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
