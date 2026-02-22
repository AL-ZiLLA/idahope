import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import { siteConfig } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Therapy Insights & Resources',
  description: 'Evidence-based articles on anxiety, depression, eating disorders, teen therapy, and wellness from Emily Wolf, LMFT in Boise, Idaho.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Blog — Therapy Insights & Resources',
    description: 'Evidence-based articles on anxiety, depression, eating disorders, teen therapy, and wellness from Emily Wolf, LMFT in Boise, Idaho.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main>
      <Navbar />

      <section className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[1200px] mx-auto">
        <div className="mb-[60px]">
          <div className="section-label">Insights & Resources</div>
          <h1 className="section-heading">
            From the <span className="section-heading-accent">Blog</span>
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="body-text">New articles coming soon. Check back!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {posts.map((post) => (
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
                  <h2 className="text-xl font-medium text-dark leading-[1.35] mb-2.5">{post.title}</h2>
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
        )}
      </section>

      <Footer />
    </main>
  )
}
