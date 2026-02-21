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
