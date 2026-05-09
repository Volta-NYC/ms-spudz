import type { Metadata } from "next"
import MenuCard from "@/lib/components/menu-card"
import SectionHeading from "@/lib/components/section-heading"
import { foodById, menuSections, sauces, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Ms. Spudz menu: Signature Fries, loaded mash, tacos, sliders, fish, shrimp, combos, iced tea, and nine gourmet dipping sauces.",
  openGraph: {
    title: "Menu | Ms. Spudz",
    description:
      "Signature fries, loaded spudz, seafood plates, tacos, sliders, drinks, and gourmet dipping sauces from Ms. Spudz in Brooklyn.",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz menu hero" }],
  },
}

const menuImageOverrides: Record<string, string> = {
  "fish-tacos:tacos-sliders": "/assets/images/fish-tacos-menu.jpg",
  "fish-sliders:tacos-sliders": "/assets/images/fish-sliders-menu.jpg",
}

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-spudz-black px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
          <img src="/assets/images/signature-fries-product.jpg" alt="" className="motion-hero-image h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-spudz-black via-spudz-black/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="motion-fade-up mb-4 text-sm font-black uppercase tracking-[0.22em] text-spudz-gold">Ms. Spudz Menu</p>
            <h1 className="motion-fade-up motion-fade-up-delay font-display text-[clamp(2.95rem,12vw,5rem)] font-black uppercase leading-[0.9] tracking-normal text-white sm:text-8xl lg:text-9xl">
              Everything Potato.
            </h1>
            <p className="motion-fade-up motion-fade-up-late mt-7 max-w-2xl text-xl leading-8 text-spudz-muted">
              Menu page prices are treated as canonical. Signature Fries list Small, Medium, and Large pricing from the scraped menu and product detail text.
            </p>
          </div>
          <div className="motion-fade-up motion-fade-up-late mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-spudz-gold/50 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-spudz-gold">
              14 food items
            </span>
            <span className="rounded-full border border-spudz-gold/50 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-spudz-gold">
              9 sauces
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white">
              {site.location}
            </span>
          </div>
        </div>
      </section>

      <nav className="sticky top-[68px] z-30 border-y border-white/10 bg-spudz-black/95 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8" aria-label="Menu sections">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-spudz-gold hover:text-spudz-gold focus-visible:border-spudz-gold focus-visible:text-spudz-gold focus-visible:outline-none"
            >
              {section.title}
            </a>
          ))}
          <a
            href="#sauces"
            className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-spudz-gold hover:text-spudz-gold focus-visible:border-spudz-gold focus-visible:text-spudz-gold focus-visible:outline-none"
          >
            Dipping Sauces
          </a>
        </div>
      </nav>

      <div className="bg-spudz-black">
        {menuSections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8 ${sectionIndex % 2 === 0 ? "bg-spudz-black" : "bg-spudz-charcoal"}`}
          >
            {(() => {
              const useFullDescription = "useFullDescription" in section && section.useFullDescription

              return (
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
                <SectionHeading title={section.title} copy={section.intro} />
                <div className="h-px bg-gradient-to-r from-spudz-gold/70 via-white/10 to-transparent" />
              </div>

              <div className={useFullDescription ? "grid gap-6 xl:grid-cols-2" : "grid gap-5 md:grid-cols-2 xl:grid-cols-3"}>
                {section.itemIds.map((id, itemIndex) => {
                  const baseItem = foodById[id]
                  const overrideImage = menuImageOverrides[`${id}:${section.id}`]
                  const item = overrideImage ? { ...baseItem, image: overrideImage } : baseItem
                  return (
                    <MenuCard
                      key={`${section.id}-${id}`}
                      item={item}
                      featured={useFullDescription}
                      description={useFullDescription ? item.fullDescription ?? item.description : item.description}
                      animationDelay={`${Math.min(sectionIndex * 80 + itemIndex * 45 + 60, 360)}ms`}
                    />
                  )
                })}
              </div>
            </div>
              )
            })()}
          </section>
        ))}

        <section id="sauces" className="scroll-mt-32 bg-[#0d0c0a] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Sauce Menu"
              title="Dipping Sauces"
              copy="No sauce prices were listed in the scrape, so these are displayed as a sauce menu with descriptions only."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sauces.map((sauce, index) => (
                <article
                  key={sauce.name}
                  style={{ animationDelay: `${Math.min(index * 45, 300)}ms` }}
                  className="motion-fade-up grid grid-cols-[96px_1fr] gap-5 border border-white/10 bg-spudz-gold/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:border-spudz-gold/55 hover:bg-spudz-gold/[0.1]"
                >
                  <img src={sauce.image} alt={`${sauce.name} dipping sauce`} className="h-24 w-24 object-cover" loading="lazy" />
                  <div>
                    <h3 className="text-lg font-black uppercase leading-tight text-white">{sauce.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-spudz-muted">{sauce.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
