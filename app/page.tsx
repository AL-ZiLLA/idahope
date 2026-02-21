import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SpecialtyIcon from '@/components/SpecialtyIcon'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { siteConfig, specialties, blogPosts } from '@/lib/config'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const mdPosts = getAllPosts()
  const displayPosts = mdPosts.length > 0
    ? mdPosts.slice(0, 3).map((p) => ({
        title: p.title,
        slug: p.slug,
        date: p.date,
        tag: p.tag,
        readTime: p.readTime,
        excerpt: p.excerpt,
        image: p.image,
      }))
    : blogPosts

  return (
    <main>
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(170deg, #faf8f5 0%, #f0ebe4 40%, #e8e0d4 100%)' }}
      >
        <div className="absolute -top-[120px] -right-20 w-[500px] h-[500px] rounded-full bg-sage-500/5 animate-breathe" />
        <div className="absolute -bottom-[100px] -left-[60px] w-[350px] h-[350px] rounded-full bg-sage-500/[0.04] animate-breathe-slow" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] pt-[120px] pb-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left - Text */}
          <div className="animate-fade-up text-center md:text-left">
            <div className="section-label">Emily Wolf, LMFT · Boise, Idaho</div>
            <h1 className="text-[clamp(40px,6vw,64px)] font-light leading-[1.1] text-dark mb-6 -tracking-[1px]">
              Empower
              <br />
              Your Mind,
              <br />
              <span className="italic text-sage-500 font-normal">Restore Your Hope</span>
            </h1>
            <p className="font-sans text-[15px] leading-[1.8] text-gray-400 max-w-[440px] mb-9 font-light mx-auto md:mx-0">
              Compassionate, evidence-based therapy for adolescents, young adults, and individuals
              navigating anxiety, depression, eating disorders, and identity — from the comfort of
              your home.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a href="#about" className="cta-btn">
                Learn More
              </a>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-outline"
              >
                Schedule a Consultation
              </a>
            </div>

            <div className="flex gap-8 mt-12 flex-wrap justify-center md:justify-start">
              {[
                { num: '15+', label: 'Years Practice' },
                { num: 'Pepperdine', label: 'University' },
                { num: 'Virtual', label: 'Sessions Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-medium text-dark">{stat.num}</div>
                  <div className="font-sans text-[10px] tracking-[2px] uppercase text-gray-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Emily Photo */}
          <div className="hidden md:block animate-fade-up-delay">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-sm overflow-hidden relative">
                <Image
                  src="/images/emily-wolf.jpg"
                  alt="Emily Wolf, Licensed Marriage and Family Therapist"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border border-sage-500 rounded-sm opacity-20 -z-10" />
              <div className="absolute bottom-6 -left-5 bg-white py-4 px-6 rounded-sm shadow-lg animate-float">
                <div className="font-sans text-[10px] tracking-[2px] uppercase text-sage-500 font-medium">
                  {siteConfig.therapist.fullTitle}
                </div>
                <div className="font-serif text-lg font-medium text-dark mt-0.5">
                  {siteConfig.therapist.name}, {siteConfig.therapist.title}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
          <div className="font-sans text-[9px] tracking-[2px] text-cream-400 uppercase">Scroll</div>
          <div className="w-px h-6 bg-gradient-to-b from-cream-400 to-transparent" />
        </div>
      </section>

      {/* ===== ABOUT EMILY ===== */}
      <section id="about" className="py-[120px] px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/emily-wolf.jpg"
                alt="Emily Wolf in her practice"
                fill
                className="object-cover brightness-[1.02] contrast-[0.98]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div>
            <div className="section-label">About Emily</div>
            <h2 className="section-heading mb-6">
              A passion for helping others find their way{' '}
              <span className="section-heading-accent">back to themselves</span>
            </h2>
            <p className="body-text mb-5">
              I have a deep passion for helping others, which led me to study clinical psychology and
              earn my master&apos;s degree at Pepperdine University. Since 2010, I&apos;ve been
              dedicated to working in private practice right here in Boise.
            </p>
            <p className="body-text mb-5">
              I&apos;ve also had the privilege of supporting youth at an adolescent treatment center,
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
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-[120px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
          <div className="text-center mb-[60px]">
            <div className="section-label">How I Can Help</div>
            <h2 className="section-heading">
              Areas of <span className="section-heading-accent">Specialization</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {specialties.map((spec, i) => (
              <div
                key={spec.slug}
                className="specialty-card p-9 bg-white/60 rounded-sm border border-transparent hover:bg-white hover:border-sage-500 relative"
              >
                <div className="mb-4">
                  <SpecialtyIcon type={spec.icon} />
                </div>
                <h3 className="text-xl font-medium text-dark mb-2.5">{spec.title}</h3>
                <p className="font-sans text-[13px] leading-[1.8] text-gray-400 font-light">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LANDSCAPE PHOTO BREAK ===== */}
      <section className="relative overflow-hidden">
        <div className="w-full h-[400px] relative">
          <Image
            src="/images/landscape.jpg"
            alt="Idaho forest bridge"
            fill
            className="object-cover brightness-[0.7]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-dark/30 flex items-center justify-center">
          <div className="max-w-[600px] text-center px-10">
            <div className="text-5xl text-white/30 font-serif mb-3">&ldquo;</div>
            <p className="text-[clamp(22px,3vw,30px)] font-light leading-[1.5] text-white italic mb-4">
              The journey to healing begins with a single step. I&apos;m honored to walk alongside
              you.
            </p>
            <div className="font-sans text-[11px] tracking-[3px] uppercase text-white/60">
              — Emily Wolf
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" className="py-[120px] px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-[60px] flex-wrap gap-5">
          <div>
            <div className="section-label">Insights & Resources</div>
            <h2 className="section-heading">
              From the <span className="section-heading-accent">Blog</span>
            </h2>
          </div>
          <Link href="/blog" className="cta-btn-outline !py-2.5 !px-6 !text-[11px]">All Posts</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card bg-white border border-cream-200 rounded-sm overflow-hidden no-underline"
            >
              <div className="h-[200px] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 pb-7">
                <div className="flex gap-3 mb-3 items-center">
                  <span className="font-sans text-[10px] tracking-[2px] uppercase text-sage-500 font-medium py-0.5 px-2.5 bg-sage-500/[0.08] rounded-sm">
                    {post.tag}
                  </span>
                  <span className="font-sans text-[11px] text-gray-300">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-dark leading-[1.35] mb-2.5">{post.title}</h3>
                <p className="font-sans text-[13px] leading-[1.7] text-gray-400 font-light mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[11px] text-gray-300">{post.date}</span>
                  <span className="font-sans text-[11px] tracking-[1px] text-sage-500 uppercase font-medium">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== VIRTUAL THERAPY BANNER ===== */}
      <section
        className="py-[100px] px-6 md:px-[60px] text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(165deg, #6b8f71 0%, #5a7d60 50%, #4a6d50 100%)' }}
      >
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-[60px] -left-[60px] w-[200px] h-[200px] rounded-full bg-white/[0.03]" />
        <div className="max-w-[600px] mx-auto relative z-10">
          <div className="font-sans text-[11px] tracking-[5px] uppercase text-white/50 mb-5">
            Telehealth Available
          </div>
          <h2 className="text-[clamp(28px,4vw,40px)] font-light text-white leading-[1.4] mb-4">
            Therapy from the <span className="italic">comfort of home</span>
          </h2>
          <p className="font-sans text-sm leading-[1.8] text-white/65 font-light mb-8">
            All sessions are available virtually through our secure, HIPAA-compliant platform. Connect
            with Emily from anywhere in Idaho.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-white"
          >
            Book Your Session
          </a>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-[120px] px-6 md:px-[60px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20">
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-heading mb-6">
              Ready to begin your <span className="section-heading-accent">journey?</span>
            </h2>
            <p className="body-text mb-10">
              Reach out for a free consultation call. We&apos;ll talk about what you&apos;re going
              through and how I can help. No pressure, no judgment — just a conversation.
            </p>

            <div className="flex flex-col gap-5">
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
          </div>

          <div className="bg-white p-12 rounded-sm border border-cream-200">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
