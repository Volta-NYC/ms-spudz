import Link from "next/link"
import type { Metadata } from "next"
import type { CSSProperties } from "react"
import SectionHeading from "@/lib/components/section-heading"
import { blogPosts } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Ms. Spudz blog posts about the history of French fries and loaded spudz comfort food.",
  openGraph: {
    title: "Blog | Ms. Spudz",
    description: "Two Ms. Spudz blog posts covering French fry history and loaded spudz comfort food.",
    images: [{ url: "/assets/images/blog-history-french-fries.jpg", width: 3024, height: 2016, alt: "French fries blog image" }],
  },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-spudz-black px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Blog" title="Spudz Stories" copy="Original posts from the Ms. Spudz site." as="h1" />
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-scroll-reveal
              style={{ "--scroll-delay": `${index * 80}ms` } as CSSProperties}
              className="group block overflow-hidden border border-white/10 bg-spudz-black"
            >
              <img src={post.image} alt={`${post.title} image`} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">{post.date}</p>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">{post.title}</h2>
                <p className="mt-5 text-base leading-7 text-spudz-muted">{post.preview}</p>
                <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-spudz-gold">Read Post</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
