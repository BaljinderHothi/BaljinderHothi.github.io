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
    <main className="min-h-screen bg-background transition-colors duration-700">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-3xl mx-auto">
        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm mb-8 inline-block">
          ← back to blog
        </Link>

        {/* Article container - dark rectangle */}
        <article className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-3">{post.title}</h1>
            <p className="text-muted-foreground text-sm">
              {post.date} · by {post.author}
            </p>
          </header>

          {/* Content with LaTeX support */}
          {/* Content with LaTeX support */}
          <BlogContent content={post.content} images={post.images} checklist={post.checklist} />

          {/* Sources */}
          {post.sources && post.sources.length > 0 && (
            <footer className="mt-10 pt-6 border-t border-border">
              <h3 className="text-muted-foreground text-sm font-medium mb-3">Sources & Links</h3>
              <ul className="space-y-2">
                {post.sources.map((source, i) => (
                  <li key={i}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-2 transition-colors"
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
