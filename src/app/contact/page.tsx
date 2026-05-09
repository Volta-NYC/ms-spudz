import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { cateringNotice, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact & Catering",
  description:
    "Contact Ms. Spudz for catering in Brooklyn. Events of 15 or more should include date, time, party size, budget per person, desired items, and other details.",
  openGraph: {
    title: "Contact & Catering | Ms. Spudz",
    description:
      "Contact Ms. Spudz at 790 Eldert Lane, Brooklyn, NY 11208 or msspudzepng@gmail.com for catering requests.",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz catering" }],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-spudz-black px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            kicker="Contact & Catering"
            title="Bring Ms. Spudz To The Party"
            copy="For parties of 15 or more, send the catering details and the team will follow up as soon as possible."
            as="h1"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={`mailto:${site.email}`} className="border border-white/10 bg-white/[0.035] p-6 transition hover:border-spudz-gold/60">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Email</p>
              <p className="mt-3 break-words text-xl font-black text-white">{site.email}</p>
            </a>
            <div className="border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Address</p>
              <p className="mt-3 text-xl font-black text-white">{site.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-spudz-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-spudz-gold/30 bg-spudz-gold/[0.08] p-6 sm:p-8">
            <h2 className="text-3xl font-black uppercase leading-tight text-white">Catering Notice</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-spudz-muted">
              {cateringNotice.map((paragraph, index) => (
                <p key={paragraph} className={index === cateringNotice.length - 1 ? "font-bold text-spudz-gold" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <form className="border border-white/10 bg-spudz-black p-6 sm:p-8" aria-describedby="catering-form-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Name</span>
                <input className="mt-2 w-full border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-spudz-gold" name="name" type="text" />
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Email</span>
                <input className="mt-2 w-full border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-spudz-gold" name="email" type="email" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Phone</span>
                <input className="mt-2 w-full border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-spudz-gold" name="phone" type="tel" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Message</span>
                <textarea className="mt-2 min-h-40 w-full border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-spudz-gold" name="message" />
              </label>
            </div>
            <p id="catering-form-note" className="mt-5 text-sm leading-6 text-spudz-muted">
              For events of 15+, include date, time, party size, budget per person, desired items, and other important details.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-spudz-gold">72-hour advance notice requested</p>
              <button type="button" className="rounded-full bg-spudz-red px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#ff633f]">
                Prepare Request
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-spudz-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black uppercase text-white">Business Info</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-spudz-muted">
              <p>{site.address}</p>
              <p>{site.location}</p>
              <p>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-spudz-gold">
                  Instagram
                </a>
                {" / "}
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-spudz-gold">
                  Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="overflow-hidden border border-white/10 bg-white/[0.035]">
            <iframe
              title="Map to Ms. Spudz at 790 Eldert Lane, Brooklyn, NY 11208"
              src={`https://maps.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=15&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
