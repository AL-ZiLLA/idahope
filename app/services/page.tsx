import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpecialtyIcon from '@/components/SpecialtyIcon'
import { siteConfig, specialties } from '@/lib/config'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapy Services in Boise, Idaho | IDAhope',
  description: 'Specialized therapy services for anxiety, depression, teens, eating disorders, and more. Emily Wolf, LMFT in Boise, Idaho.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <div className="text-center mb-[60px]">
          <div className="section-label">How I Can Help</div>
          <h1 className="section-heading">
            Areas of <span className="section-heading-accent">Specialization</span>
          </h1>
          <p className="body-text max-w-[600px] mx-auto mt-6">
            I provide compassionate, evidence-based therapy tailored to your unique needs. Whether you're navigating anxiety, supporting a teen, or working through challenges with food and body image, I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {specialties.map((spec) => (
            <Link
              key={spec.slug}
              href={`/services/${spec.slug}`}
              className="specialty-card p-9 bg-white/60 rounded-sm border border-transparent hover:bg-white hover:border-sage-500 relative no-underline"
            >
              <div className="mb-4">
                <SpecialtyIcon type={spec.icon} />
              </div>
              <h3 className="text-xl font-medium text-dark mb-2.5">{spec.title}</h3>
              <p className="font-sans text-[13px] leading-[1.8] text-gray-400 font-light">
                {spec.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center p-10 bg-sage-500 rounded-sm">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="font-sans text-[15px] leading-[1.8] text-white/80 font-light mb-8 max-w-[500px] mx-auto">
            Reach out for a free consultation call. We'll talk about what you're going through and how I can help.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-white"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
