import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Emily Wolf, LMFT | IDAhope Therapy Boise',
  description: 'Get in touch with Emily Wolf, LMFT in Boise, Idaho. Call (208) 391-5576 or book a free consultation online. Virtual therapy available.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-[160px] pb-[120px] px-6 md:px-[60px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20">
          <div>
            <div className="section-label">Get in Touch</div>
            <h1 className="section-heading mb-6">
              Ready to begin your <span className="section-heading-accent">journey?</span>
            </h1>
            <p className="body-text mb-10">
              Reach out for a free consultation call. We'll talk about what you're going
              through and how I can help. No pressure, no judgment — just a conversation.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { label: 'Call or Text', value: siteConfig.phone, href: 'tel:2083915576' },
                { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { label: 'Location', value: siteConfig.location },
                { label: 'Sessions', value: 'Virtual · Secure · HIPAA Compliant' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-center">
                  <div className="w-1 h-1 rounded-full bg-sage-500 flex-shrink-0" />
                  <div>
                    <div className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-[15px] text-gray-600 font-normal no-underline hover:text-sage-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-sans text-[15px] text-gray-600 font-normal">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-sage-500/5 rounded-sm">
              <p className="font-sans text-[13px] leading-[1.7] text-gray-500 mb-3">
                <strong className="text-dark">Ready to book?</strong>
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn !text-[13px]"
              >
                Schedule Online
              </a>
            </div>
          </div>

          <div className="bg-white p-12 rounded-sm border border-cream-200">
            <h2 className="text-2xl font-light text-dark mb-2">Send a Message</h2>
            <p className="font-sans text-[13px] text-gray-400 mb-8">
              Your information is kept strictly confidential.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
