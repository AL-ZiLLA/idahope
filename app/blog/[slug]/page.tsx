import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { siteConfig } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.therapist.name],
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main>
      <Navbar />

      <article className="pt-[160px] pb-[120px] px-6 md:px-[60px] max-w-[800px] mx-auto">
        <Link href="/blog" className="font-sans text-[11px] tracking-[2px] uppercase text-sage-500 font-medium no-underline mb-8 block hover:underline">
          ← Back to Blog
        </Link>

        <div className="flex gap-3 mb-4 items-center">
          <span className="font-sans text-[10px] tracking-[2px] uppercase text-sage-500 font-medium py-0.5 px-2.5 bg-sage-500/[0.08] rounded-sm">
            {post.tag}
          </span>
          <span className="font-sans text-[11px] text-gray-300">{post.readTime}</span>
          <span className="font-sans text-[11px] text-gray-300">{post.date}</span>
        </div>

        <h1 className="text-[clamp(30px,5vw,44px)] font-light text-dark leading-[1.2] mb-8">
          {post.title}
        </h1>

        <div className="w-full h-[400px] relative rounded-sm overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="800px"
            priority
          />
        </div>

        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:font-light prose-headings:text-dark
            prose-p:font-sans prose-p:text-[15px] prose-p:leading-[1.9] prose-p:text-gray-500 prose-p:font-light
            prose-a:text-sage-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-dark prose-strong:font-medium
            prose-blockquote:border-sage-500 prose-blockquote:text-gray-400 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        <div className="mt-16 p-8 bg-cream-100 rounded-sm text-center">
          <p className="body-text mb-4">If you're ready to take the next step, I'd love to chat.</p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Book a Consultation
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}

function markdownToHtml(markdown: string): string {
  // Basic markdown to HTML conversion
  // For production, consider using remark/rehype pipeline
  let html = markdown
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|p|u|o|l|b])/gm, '<p>')

  if (!html.startsWith('<')) html = '<p>' + html
  if (!html.endsWith('>')) html += '</p>'

  return html
}
