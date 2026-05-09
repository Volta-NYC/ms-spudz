import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/data"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.preview,
    openGraph: {
      title: `${post.title} | Ms. Spudz`,
      description: post.preview,
      images: [{ url: post.image, alt: post.title }],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-spudz-black px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm font-black uppercase tracking-[0.16em] text-spudz-gold hover:text-white">
          Back To Blog
        </Link>
        <p className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-spudz-gold">{post.date}</p>
        <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-7xl">
          {post.title}
        </h1>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden border border-white/10">
        <img src={post.image} alt={`${post.title} image`} className="max-h-[620px] w-full object-cover" />
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-10 text-lg leading-8 text-spudz-muted">
        {post.blocks.map((block, index) => (
          <section key={block.heading ?? index} className="space-y-5">
            {block.heading ? (
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                {block.heading}
              </h2>
            ) : null}
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}
