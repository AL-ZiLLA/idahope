# Blog Infrastructure Setup

Add a markdown-based blog system to the IDAhope Next.js project. Here's exactly what to build:

## 1. Install MDX dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter reading-time
```

## 2. Create `/content/blog/` directory for markdown posts

## 3. Create `/lib/blog.ts` — blog utility functions:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  tag: string
  excerpt: string
  readTime: string
  image: string
  metaDescription: string
  content: string
  keywords?: string[]
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '')
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      tag: data.tag || '',
      excerpt: data.excerpt || '',
      readTime: stats.text,
      image: data.image || '/images/blog-default.jpg',
      metaDescription: data.metaDescription || data.excerpt || '',
      content,
      keywords: data.keywords || [],
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}
```

## 4. Create `/app/blog/page.tsx` — blog listing page:

```typescript
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Therapy Insights & Resources',
  description: 'Evidence-based articles on anxiety, depression, eating disorders, teen therapy, and wellness from Emily Wolf, LMFT in Boise, Idaho.',
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
```

## 5. Create `/app/blog/[slug]/page.tsx` — individual blog post page:

```typescript
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
```

## 6. Create a sample blog post at `/content/blog/understanding-anxiety-teens.md`:

```markdown
---
title: "Understanding Anxiety in Teens: What Parents Need to Know"
date: "2026-02-18"
tag: "Anxiety"
excerpt: "Anxiety in adolescents often looks different than in adults. Learn the signs and how to create a supportive environment at home."
metaDescription: "Learn the signs of anxiety in teens and how to create a supportive environment at home. Emily Wolf, LMFT in Boise, Idaho shares expert guidance."
image: "/images/blog-teens.jpg"
keywords: ["teen anxiety", "adolescent anxiety Boise", "teen therapist Idaho", "anxiety signs teenagers"]
---

## It's More Common Than You Think

If your teenager seems more irritable than usual, is withdrawing from friends, or suddenly struggling in school, anxiety might be the underlying cause. As a therapist who has worked with adolescents for over 15 years, I've seen firsthand how anxiety shows up differently in teens compared to adults.

While adults might describe feeling worried or on edge, teens often express anxiety through irritability, avoidance, physical complaints like headaches or stomachaches, or changes in sleep patterns. Understanding these signs is the first step toward helping your teen.

## What Anxiety Looks Like in Teens

Every teenager is different, but here are some common signs that anxiety might be affecting your child:

**Behavioral changes** — avoiding social situations they used to enjoy, refusing to go to school, or becoming overly dependent on you for reassurance.

**Physical symptoms** — frequent headaches, stomachaches, difficulty sleeping, or changes in appetite. Teens often don't have the language to describe emotional distress, so it comes out physically.

**Academic shifts** — difficulty concentrating, procrastination that feels paralyzing rather than lazy, or perfectionism that prevents them from turning in work.

**Emotional intensity** — increased irritability, tearfulness, or emotional outbursts that seem disproportionate to the situation.

## How You Can Help at Home

The most powerful thing you can do is create an environment where your teen feels safe enough to be honest about what they're experiencing.

**Listen without fixing.** When your teen opens up, resist the urge to immediately solve the problem. Sometimes they just need to feel heard. Try saying, "That sounds really hard. I'm glad you told me."

**Validate their experience.** Anxiety can feel irrational, but the feelings are very real. Avoid phrases like "just don't worry about it" or "there's nothing to be afraid of." Instead, try "I can see this is really stressing you out."

**Model healthy coping.** Teens learn from watching you. Share your own strategies for managing stress — taking a walk, deep breathing, talking to someone you trust.

**Maintain routines.** Predictability helps anxious brains feel safer. Consistent sleep schedules, regular meals, and structured time can make a real difference.

## When to Seek Professional Support

If anxiety is interfering with your teen's daily life — their friendships, schoolwork, family relationships, or ability to enjoy things they used to love — it may be time to reach out to a therapist.

Therapy provides teens with a confidential space to explore their feelings and learn practical tools for managing anxiety. As a parent, you'll also gain strategies for supporting your teen at home.

There's no perfect time to reach out, and seeking help is a sign of strength — not weakness. If you're ready to take the next step, I'd love to chat about how I can help your family.
```

## 7. Update the homepage blog section

Update the blog section in `/app/page.tsx` to pull from the actual blog posts using `getAllPosts()` from `/lib/blog.ts` instead of the hardcoded `blogPosts` array in config. Fall back to the config posts if no markdown posts exist yet.

## 8. Add `@tailwindcss/typography` for blog prose styling:

```bash
npm install @tailwindcss/typography
```

Then add it to `tailwind.config.ts` plugins:
```typescript
plugins: [require('@tailwindcss/typography')],
```

## 9. Test the blog

```bash
npm run dev
```

Visit `http://localhost:3000/blog` and `http://localhost:3000/blog/understanding-anxiety-teens` to verify.

## 10. Commit and push

```bash
git add .
git commit -m "feat: add MDX blog system with first post"
git push
```

Vercel will auto-deploy.
