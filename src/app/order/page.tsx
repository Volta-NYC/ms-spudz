import type { Metadata } from "next"
import SectionHeading from "@/lib/components/section-heading"
import { site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Order Request",
  description:
    "Place an order request with Ms. Spudz. Share your details and what you'd like to order, and the team will follow up.",
  openGraph: {
    title: "Order Request | Ms. Spudz",
    description:
      "Contact Ms. Spudz to place an order request and confirm details.",
    images: [{ url: "/assets/images/blog-history-french-fries.jpg", width: 3024, height: 2016, alt: "Ms. Spudz fries" }],
  },
}

export default function OrderPage() {
  return (
    <section className="bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="Order"
          title="Place An Order Request"
          copy="Tell us what you'd like, and we'll follow up to confirm availability, timing, and final details."
          as="h1"
          align="center"
        />

        <form
          data-scroll-reveal
          className="mx-auto mt-12 max-w-3xl border border-spudz-black/15 bg-spudz-gold/[0.12] p-6 sm:p-8"
          aria-describedby="order-form-note"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Name</span>
              <input
                className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold"
                name="name"
                type="text"
              />
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Email</span>
              <input
                className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold"
                name="email"
                type="email"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Phone</span>
              <input
                className="mt-2 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold"
                name="phone"
                type="tel"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Order Details</span>
              <textarea
                className="mt-2 min-h-44 w-full border border-spudz-black/15 bg-white px-4 py-3 text-spudz-black outline-none transition placeholder:text-spudz-ink/35 focus:border-spudz-gold"
                name="order_details"
                placeholder="What would you like to order? Include quantities, preferred pickup time, and any notes."
              />
            </label>
          </div>

          <p id="order-form-note" className="mt-5 text-sm leading-6 text-spudz-muted">
            You can also reach us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-bold text-spudz-black hover:text-spudz-gold">
              {site.email}
            </a>
            .
          </p>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="rounded-full bg-spudz-red px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-spudz-black transition hover:bg-spudz-gold"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
