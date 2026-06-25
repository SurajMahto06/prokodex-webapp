import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles on AI, Web Development, and Digital Marketing by Prokodex.",
};

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?publishedOnly=true`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen py-16 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4 text-sm font-semibold tracking-wide uppercase">
            <BookOpen className="w-4 h-4" /> Latest Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground">
            Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and latest trends in AI, Web Development, and Digital Marketing to help you stay ahead.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center text-muted-foreground p-10 border border-border/60 rounded-[2rem] bg-card max-w-2xl mx-auto">
            No blogs found. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/container">
            {blogs.map((blog: any) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group/card relative overflow-hidden p-4 md:p-5 rounded-[2rem] bg-card border border-border/60 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.3)] flex flex-col break-words"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-5 bg-secondary/5">
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 bg-secondary/5">
                      <BookOpen className="w-10 h-10 opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex flex-col flex-grow relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      By {blog.author}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-bold mb-3 tracking-tight text-foreground group-hover/card:text-secondary transition-colors line-clamp-2 break-words">
                    {blog.title}
                  </h2>

                  <div className="mt-auto pt-4 flex items-center text-sm font-bold text-secondary uppercase tracking-wider">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
