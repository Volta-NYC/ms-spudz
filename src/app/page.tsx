import Link from "next/link"
import type { Metadata } from "next"
import MenuCard from "@/lib/components/menu-card"
import SectionHeading from "@/lib/components/section-heading"
import { founders, signatureItems, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Ms. Spudz | Everything Potato 'No' Gravy",
  description:
    "Ms. Spudz - Everything Potato 'No' Gravy is a Brooklyn fast food outlet serving fresh-cut fries, loaded spudz, seafood bites, and gourmet dipping sauces.",
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden pt-24">
        <img
          src={site.heroImage}
          alt="Ms. Spudz hero food spread"
          className="motion-hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.68)_0%,rgba(245,255,239,0.42)_42%,rgba(193,229,161,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div className="max-w-4xl">
            <p className="motion-fade-up mb-5 text-sm font-black uppercase tracking-[0.22em] text-spudz-gold">{site.homeTagline}</p>
            <h1 className="motion-fade-up motion-fade-up-delay font-display text-[clamp(3.9rem,12vw,10rem)] font-black uppercase leading-[0.78] tracking-normal text-spudz-black">
              Ms.
              <br />
              Spudz
            </h1>
            <p className="motion-fade-up motion-fade-up-late mt-7 max-w-2xl text-2xl font-black uppercase leading-tight text-spudz-ink sm:text-4xl">
              {site.tagline}
            </p>
            <div className="motion-fade-up motion-fade-up-late mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="motion-cta-glow inline-flex items-center justify-center rounded-full bg-spudz-red px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-spudz-black shadow-glow transition hover:-translate-y-0.5 hover:bg-[#c1e5a1]"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-spudz-black/25 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-spudz-black transition hover:border-spudz-gold hover:text-spudz-gold"
              >
                Catering
              </Link>
            </div>
          </div>

          <div data-scroll-reveal="right" className="motion-fade-up motion-fade-up-late self-end border-l-4 border-spudz-gold bg-white/72 p-6 backdrop-blur-md">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-spudz-gold">{founders.names}</p>
            <p className="mt-4 text-xl font-black uppercase leading-tight text-spudz-black">Mother daughter duo. Brooklyn roots. Big potato energy.</p>
            <p className="mt-4 text-base leading-7 text-spudz-muted">
              {founders.visibleStory}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="About"
            title="Built From A Table, Tent And Fryer"
            copy="Ms. Spudz is Brooklyn-based and community-focused, with a story that started in 2012 at ENY Farms and neighborhood festivals."
          />
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Specialties"
              title="The Core Four"
              copy="The signature items from the ordering side of the original site, shown with current menu pricing."
            />
            <Link href="/menu" className="text-sm font-black uppercase tracking-[0.16em] text-spudz-gold hover:text-spudz-black">
              See Full Menu
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {signatureItems.map((item) => (
              <MenuCard key={item.id} item={item} description={item.fullDescription ?? item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-spudz-gold/25 bg-spudz-gold px-4 py-8 text-spudz-black sm:px-6 lg:px-8">
        <div data-scroll-reveal className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-normal">Find Us</h2>
            <p className="mt-1 text-sm font-bold">{site.address}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-black sm:flex-row sm:items-center sm:gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-spudz-black">{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-spudz-black">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-spudz-black">Facebook</a>
          </div>
        </div>
      </section>
    </>
  )
}
