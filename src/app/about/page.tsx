import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { founders, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tinnette and Chel'Si, the mother daughter duo and flavor visionary founders behind Brooklyn-based Ms. Spudz.",
  openGraph: {
    title: "About | Ms. Spudz",
    description:
      "Ms. Spudz started in 2012 at ENY Farms and neighborhood festivals with a table, tent, fryer, and a big dream.",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz food" }],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-spudz-black px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-spudz-gold">Founder's Message</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-8xl">
              Brooklyn Born. Potato Built.
            </h1>
          </div>
          <div className="border-l-4 border-spudz-gold bg-white/[0.035] p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-spudz-gold">{founders.names}</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white">{founders.title}</h2>
            <p className="mt-5 text-lg leading-8 text-spudz-muted">{founders.visibleStory}</p>
          </div>
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeading
            kicker="Story"
            title="From ENY Farms To Neighborhood Festivals"
            copy="The story begins in 2012 with a local farmers market, neighborhood festivals, and the confidence to turn fresh-cut potatoes into a Brooklyn food brand."
          />
          <div className="grid gap-5">
            {founders.timeline.map((event) => (
              <article key={event.year} className="grid gap-4 border border-white/10 bg-spudz-black p-6 sm:grid-cols-[150px_1fr]">
                <div className="font-display text-3xl font-black uppercase text-spudz-gold">{event.year}</div>
                <p className="text-xl font-bold leading-8 text-white">{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-spudz-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="Identity"
              title="Brooklyn-Based. Community-Focused."
              copy="Ms. Spudz covers Brooklyn, NY and carries a local street food story into fresh-cut fries, loaded potatoes, seafood bites, and gourmet sauces."
            />
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 p-5">
                <dt className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Business Type</dt>
                <dd className="mt-2 text-lg font-bold text-white">{site.type}</dd>
              </div>
              <div className="border border-white/10 p-5">
                <dt className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Location</dt>
                <dd className="mt-2 text-lg font-bold text-white">{site.location}</dd>
              </div>
            </dl>
          </div>
          <div className="relative overflow-hidden border border-spudz-gold/25 bg-spudz-gold/10 p-5">
            <img src={site.logoImage} alt="Ms. Spudz logo" className="aspect-square w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
