import Link from "next/link"
import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { founders, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tinnette (Pippi) and Chel’Si, the mother daughter duo and hearts behind Brooklyn-based Ms. Spudz.",
  openGraph: {
    title: "About | Ms. Spudz",
    description:
      "Ms. Spudz started in 2012 at ENY Farms and neighborhood festivals with a table, tent, fryer, and a big dream.",
    images: [{ url: "/assets/images/owner.jpg", width: 3200, height: 4082, alt: founders.imageAlt }],
  },
}

const originMarkers = [
  { value: "2012", label: "ENY Farms beginning" },
  { value: "May-Nov", label: "Seasonal Brooklyn run" },
  { value: "5 boroughs", label: "Rooted vision" },
]

const identityDetails = [
  { label: "Business Type", value: site.type },
  { label: "Home Base", value: site.location },
  { label: "Signature Sauce", value: "Grandma’s Original" },
  { label: "Core Promise", value: "Fresh-cut potatoes and bold flavor" },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_0.82fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-spudz-gold">Founder's Message</p>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-normal text-spudz-black sm:text-7xl lg:text-8xl">
              <span className="block">The Hearts</span>
              <span className="block">Behind Ms.</span>
              <span className="block">Spudz</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-spudz-ink sm:text-2xl sm:leading-9">
              {founders.visibleStory}
            </p>
            <dl className="mt-9 grid gap-3 sm:grid-cols-3">
              {originMarkers.map((marker) => (
                <div key={marker.label} className="border border-spudz-black/10 bg-spudz-gold/[0.16] p-4">
                  <dt className="text-xs font-black uppercase tracking-[0.18em] text-spudz-muted">{marker.label}</dt>
                  <dd className="mt-2 font-display text-3xl font-black uppercase leading-none text-spudz-gold">{marker.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure data-scroll-reveal="right" className="border border-spudz-gold/30 bg-spudz-charcoal p-3 shadow-glow">
            <div className="overflow-hidden bg-white">
              <img
                src={founders.image}
                alt={founders.imageAlt}
                className="h-[520px] w-full object-cover object-bottom sm:h-[640px] lg:h-[700px]"
              />
            </div>
            <figcaption className="border-t border-spudz-gold/25 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-spudz-gold">
              {founders.names}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-spudz-cream px-4 py-20 text-spudz-black sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_1fr]">
          <aside data-scroll-reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-spudz-red">Our Story</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-normal sm:text-5xl">
              A Love Letter To Flavor
            </h2>
            <p className="mt-5 text-lg font-bold leading-8 text-spudz-ink/80">
              From a cart-sized vision to a Brooklyn street food brand, this is the story behind the sauce, the fries,
              and the family roots.
            </p>
          </aside>

          <article className="border-y border-spudz-black/15 py-2 sm:py-4">
            <div className="divide-y divide-spudz-black/10">
              {founders.aboutStory.map((paragraph, index) => (
                <p
                  key={paragraph}
                  data-scroll-reveal
                  className={
                    index === 3
                      ? "my-4 border-l-4 border-spudz-red bg-spudz-gold px-5 py-5 text-2xl font-black uppercase leading-tight text-spudz-black shadow-[8px_8px_0_rgba(22,36,17,0.18)]"
                      : "py-6 text-xl font-semibold leading-9 text-spudz-ink"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div data-scroll-reveal className="mt-10 border-l-4 border-spudz-red bg-white p-6 shadow-[10px_10px_0_rgba(22,36,17,0.12)]">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-spudz-red">With love and flavor,</p>
              <p className="mt-3 font-display text-3xl font-black uppercase leading-none text-spudz-black">
                {founders.names}
              </p>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-spudz-ink/70">{founders.title}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Identity"
            title="Brooklyn-Based. Community-Focused."
            copy="Ms. Spudz carries a local street food story into fresh-cut fries, chips, seafood, tacos, nachos, and gourmet dipping sauces built for people who love flavor, culture, and food that feels like home."
          />
          <dl className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {identityDetails.map((detail) => (
              <div key={detail.label} data-scroll-reveal className="border border-spudz-black/10 bg-white p-5">
                <dt className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">{detail.label}</dt>
                <dd className="mt-3 text-xl font-black uppercase leading-tight text-spudz-black">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <div data-scroll-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-spudz-red px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-spudz-black shadow-glow transition hover:-translate-y-0.5 hover:bg-spudz-gold"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-spudz-black/25 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-spudz-black transition hover:border-spudz-gold hover:text-spudz-gold"
            >
              Book Catering
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
