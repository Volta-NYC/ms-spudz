import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { cateringNotice, site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact & Catering",
  description:
    "Contact Ms. Spudz for catering in Brooklyn. Include the details for your event and the team will follow up.",
  openGraph: {
    title: "Contact & Catering | Ms. Spudz",
    description:
      "Contact Ms. Spudz by phone or email for catering requests.",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz catering" }],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-spudz-truck px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="bg-white p-8 shadow-[12px_12px_0_rgba(22,36,17,0.2)]">
            <SectionHeading
              kicker="Contact & Catering"
              title="Bring Ms. Spudz To The Party"
              copy="Send the catering details and the team will follow up as soon as possible."
              as="h1"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={`mailto:${site.email}`} data-scroll-reveal className="border border-spudz-black/10 bg-white p-6 transition hover:border-spudz-gold/60">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Email</p>
              <p className="mt-3 break-words text-xl font-black text-spudz-black">{site.email}</p>
            </a>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} data-scroll-reveal className="border border-spudz-black/10 bg-white p-6 transition hover:border-spudz-gold/60">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Phone</p>
              <p className="mt-3 text-xl font-black text-spudz-black">{site.phone}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-spudz-truck px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-scroll-reveal="left" className="border border-spudz-black/10 bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-black uppercase leading-tight text-spudz-black">Catering Notice</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-spudz-muted">
              {cateringNotice.map((paragraph, index) => (
                <p key={paragraph} className={index === cateringNotice.length - 1 ? "font-bold text-spudz-gold" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <form data-scroll-reveal="right" className="border border-spudz-black/10 bg-white p-6 sm:p-8" aria-describedby="catering-form-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Name</span>
                <input className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold" name="name" type="text" />
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Email</span>
                <input className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold" name="email" type="email" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Phone</span>
                <input className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold" name="phone" type="tel" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Message</span>
                <textarea className="mt-2 min-h-40 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold" name="message" />
              </label>
            </div>
            <p id="catering-form-note" className="mt-5 text-sm leading-6 text-spudz-muted">
              Be sure to include all of the details for your event.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-spudz-gold">We'll get back to you as soon as possible</p>
              <button type="button" className="rounded-full bg-spudz-red px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-spudz-black transition hover:bg-spudz-gold">
                Prepare Request
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-scroll-reveal="left">
            <h2 className="text-3xl font-black uppercase text-spudz-black">Business Info</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-spudz-muted">
              <p>
                <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-bold text-spudz-black hover:text-spudz-gold">
                  {site.phone}
                </a>
              </p>
              <p>{site.location}</p>
              <p>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-bold text-spudz-black hover:text-spudz-gold">
                  Instagram
                </a>
                {" / "}
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-bold text-spudz-black hover:text-spudz-gold">
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
