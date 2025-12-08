import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { BlogContent } from "@/components/blog-content"

export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#1a1d24]">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-3xl mx-auto">
        <Link href="/blog" className="text-slate-500 hover:text-slate-300 transition-colors text-sm mb-8 inline-block">
          ← back to blog
        </Link>

        {/* Article container - dark rectangle */}
        <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50">
          <header className="mb-8 pb-6 border-b border-slate-700/50">
            <h1 className="font-serif text-3xl sm:text-4xl text-slate-200 mb-3">{post.title}</h1>
            <p className="text-slate-500 text-sm">
              {post.date} · by {post.author}
            </p>
          </header>

          {/* Content with LaTeX support */}
          <BlogContent content={post.content} />

          {/* Sources */}
          {post.sources && post.sources.length > 0 && (
            <footer className="mt-10 pt-6 border-t border-slate-700/50">
              <h3 className="text-slate-400 text-sm font-medium mb-3">Sources & Links</h3>
              <ul className="space-y-2">
                {post.sources.map((source, i) => (
                  <li key={i}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 text-sm underline underline-offset-2 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </article>
      </div>
    </main>
  )
}
