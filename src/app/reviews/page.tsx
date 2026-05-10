import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { reviews, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read visible Ms. Spudz reviews and leave a Google review.",
  openGraph: {
    title: "Reviews | Ms. Spudz",
    description: "Visible customer reviews for Ms. Spudz - Everything Potato 'No' Gravy.",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz food" }],
  },
}

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-white px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            kicker="Reviews"
            title="What People Said"
            copy="Truncated reviews stop exactly where the available text ends."
            as="h1"
          />
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-scroll-reveal
            className="inline-flex justify-center rounded-full bg-spudz-red px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-spudz-black transition hover:bg-[#c1e5a1]"
          >
            Leave A Google Review
          </a>
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rounded-full border border-spudz-gold/50 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-spudz-gold">
            {reviews.length} visible review entries
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article key={`${review.reviewer}-${review.date}`} data-scroll-reveal className="flex min-h-[260px] flex-col justify-between border border-spudz-black/10 bg-white p-6">
                <p className="text-lg leading-8 text-spudz-muted">"{review.text}"</p>
                <div className="mt-8 border-t border-spudz-black/10 pt-5">
                  <h2 className="text-xl font-black uppercase text-spudz-black">{review.reviewer}</h2>
                  <p className="mt-1 text-sm font-bold text-spudz-gold">{review.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
