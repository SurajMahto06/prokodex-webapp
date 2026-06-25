import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

// Generate Dynamic SEO Metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Prokodex",
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160).replace(/<[^>]+>/g, ""), // Extract plain text from HTML
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160).replace(/<[^>]+>/g, ""),
      images: blog.coverImage ? [blog.coverImage] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.substring(0, 160).replace(/<[^>]+>/g, ""),
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors mb-8 bg-secondary/10 px-4 py-2 rounded-full uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <article className="bg-card border border-border/60 rounded-[2.5rem] p-5 md:p-8 shadow-2xl relative break-words overflow-hidden">
          {blog.coverImage && (
            <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden mb-6 shadow-xl ring-1 ring-border/50 bg-secondary/5">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-6 text-left mt-2">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-tight break-words">
              {blog.title}
            </h1>
          </header>

          <div className="flex items-center justify-start gap-2 md:gap-8 mb-6 border-b border-border/50 pb-6 w-full">
            <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/5 border border-secondary/10 text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              <span className="truncate max-w-[100px] md:max-w-none">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/5 border border-secondary/10 text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <div
            className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-secondary hover:prose-a:text-secondary/80 prose-img:rounded-3xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground break-words overflow-hidden"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </main>
  );
}
