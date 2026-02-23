import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Emily Wolf, LMFT | IDAhope Therapy & Wellness',
  description: 'Meet Emily Wolf, LMFT - Licensed therapist in Boise, Idaho with 15+ years experience. Pepperdine graduate specializing in teens, anxiety, and eating disorders.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 items-center mb-20">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/emily-wolf.jpg"
                alt="Emily Wolf, LMFT - Therapist in Boise, Idaho"
                fill
                className="object-cover brightness-[1.02] contrast-[0.98]"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div>
            <div className="section-label">About Emily</div>
            <h1 className="section-heading mb-6">
              A passion for helping others find their way{' '}
              <span className="section-heading-accent">back to themselves</span>
            </h1>
            <p className="body-text mb-5">
              I have a deep passion for helping others, which led me to study clinical psychology and
              earn my master's degree at Pepperdine University. Since 2010, I've been
              dedicated to working in private practice right here in Boise.
            </p>
            <p className="body-text mb-5">
              I've also had the privilege of supporting youth at an adolescent treatment center,
              working with kids facing challenges such as addiction, eating disorders, anxiety, and
              depression. This experience shaped my approach to therapy — one rooted in deep empathy,
              patience, and a belief that every person has the capacity for growth.
            </p>
            <p className="body-text mb-8">
              My goal is to create a warm, safe space where you feel seen, heard, and empowered to
              take the next step on your journey.
            </p>

            <div className="flex gap-6 flex-wrap">
              {['LMFT Licensed', 'Pepperdine University', 'Since 2010', 'Eagle Therapist Collective'].map(
                (badge) => (
                  <div key={badge} className="py-3 px-5 bg-sage-500/[0.06] rounded-sm">
                    <span className="font-sans text-[11px] tracking-[1px] text-sage-500 font-medium">
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="section-heading text-center mb-12">
            My <span className="section-heading-accent">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sage-500">💚</span>
              </div>
              <h3 className="text-xl font-medium text-dark mb-3">Compassionate</h3>
              <p className="body-text">
                You'll be met with empathy, warmth, and zero judgment. This is a space where you can be fully yourself.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sage-500">🧠</span>
              </div>
              <h3 className="text-xl font-medium text-dark mb-3">Evidence-Based</h3>
              <p className="body-text">
                I use proven therapeutic approaches backed by research, tailored to what works best for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sage-500">🌱</span>
              </div>
              <h3 className="text-xl font-medium text-dark mb-3">Growth-Focused</h3>
              <p className="body-text">
                Every person has the capacity for healing and growth. I'm here to help you find your path forward.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-10 bg-sage-500 rounded-sm">
          <h2 className="text-3xl font-light text-white mb-4">Let's Work Together</h2>
          <p className="font-sans text-[15px] leading-[1.8] text-white/80 font-light mb-8 max-w-[500px] mx-auto">
            Ready to take the first step? I'd love to connect and talk about how I can support you.
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
