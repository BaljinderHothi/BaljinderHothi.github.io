import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-background transition-colors duration-700">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm mb-8 inline-block">
          ← back
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-12">blog</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="py-4 border-b border-border group-hover:border-foreground/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">by {post.author}</p>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && <p className="text-muted-foreground">no posts yet</p>}
      </div>
    </main>
  )
}
