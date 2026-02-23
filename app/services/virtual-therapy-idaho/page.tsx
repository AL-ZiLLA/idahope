import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Therapy in Idaho | IDAhope Therapy & Wellness',
  description: 'HIPAA-compliant virtual therapy sessions across Idaho. Emily Wolf, LMFT provides secure, convenient online therapy from the comfort of your home.',
  alternates: {
    canonical: `${siteConfig.url}/services/virtual-therapy-idaho`,
  },
  openGraph: {
    title: 'Virtual Therapy in Idaho | IDAhope Therapy & Wellness',
    description: 'HIPAA-compliant virtual therapy sessions across Idaho. Emily Wolf, LMFT provides secure, convenient online therapy from the comfort of your home.',
    type: 'website',
    url: `${siteConfig.url}/services/virtual-therapy-idaho`,
    images: [{ url: siteConfig.ogImage }],
  },
}

export default function VirtualTherapyPage() {
  return (
    <main>
      <Navbar />

      <article className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[900px] mx-auto">
        <Link href="/#services" className="font-sans text-[11px] tracking-[2px] uppercase text-sage-500 font-medium no-underline mb-8 block hover:underline">
          ← Back to Services
        </Link>

        <h1 className="text-[clamp(30px,5vw,48px)] font-light text-dark leading-[1.2] mb-6">
          Virtual Therapy in Idaho
        </h1>

        <p className="body-text text-lg mb-12">
          All sessions are available virtually through our secure, HIPAA-compliant platform. Connect with me from anywhere in Idaho — Boise, Eagle, Meridian, Nampa, or beyond.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-light text-dark mb-6">Benefits of Virtual Therapy</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Convenience & Accessibility</h3>
                <p className="body-text">
                  No commute, no waiting room. Attend sessions from the comfort of your own home, office, or any private space that feels safe for you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Privacy & Security</h3>
                <p className="body-text">
                  All sessions are conducted through a HIPAA-compliant, encrypted platform that meets the highest standards for confidentiality and data security.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Flexible Scheduling</h3>
                <p className="body-text">
                  Virtual sessions make it easier to fit therapy into your busy life. Whether you're balancing work, family, or other commitments, we can find a time that works for you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-lg font-medium text-dark mb-2">Statewide Access</h3>
                <p className="body-text">
                  Living outside of Boise? No problem. Virtual therapy means you can access quality mental health care no matter where you are in Idaho.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 p-8 bg-cream-100 rounded-sm">
          <h2 className="text-2xl font-light text-dark mb-4">How Virtual Sessions Work</h2>
          <div className="space-y-4">
            <p className="body-text">
              <strong>1. Book Your Session:</strong> Schedule a free consultation or first session through my secure booking platform.
            </p>
            <p className="body-text">
              <strong>2. Receive Login Info:</strong> You'll get a secure link to join your session via a HIPAA-compliant video platform.
            </p>
            <p className="body-text">
              <strong>3. Join from Anywhere:</strong> Click the link at your appointment time and connect from your computer, tablet, or phone.
            </p>
            <p className="body-text">
              <strong>4. Meet Just Like In-Person:</strong> We'll talk face-to-face in real-time, just as we would in an office setting.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-light text-dark mb-6">What You'll Need</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 body-text">
              <span className="text-sage-500">•</span>
              <span>A computer, tablet, or smartphone with a camera and microphone</span>
            </li>
            <li className="flex gap-3 body-text">
              <span className="text-sage-500">•</span>
              <span>A reliable internet connection</span>
            </li>
            <li className="flex gap-3 body-text">
              <span className="text-sage-500">•</span>
              <span>A private, quiet space where you feel comfortable talking</span>
            </li>
          </ul>
        </div>

        <div className="p-10 bg-sage-500 rounded-sm text-center">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Get Started?</h2>
          <p className="font-sans text-[15px] leading-[1.8] text-white/80 font-light mb-8 max-w-[500px] mx-auto">
            Book your first virtual session today. I'm here to support you, wherever you are in Idaho.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-white"
            >
              Book a Session
            </a>
            <a href="/#contact" className="cta-btn-outline !border-white !text-white hover:!bg-white/10">
              Contact Me
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
