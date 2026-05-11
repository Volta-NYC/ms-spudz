"use client"

import { useState } from "react"
import type { FoodItem } from "@/lib/data"
import type { CSSProperties } from "react"

type MenuCardProps = {
  item: FoodItem
  description?: string
  expandedDescription?: string
  expandableDescription?: boolean
  featured?: boolean
  animationDelay?: string
}

export default function MenuCard({
  item,
  description,
  expandedDescription,
  expandableDescription = false,
  featured = false,
  animationDelay,
}: MenuCardProps) {
  const [expanded, setExpanded] = useState(false)
  const shortDescription = description ?? item.description
  const longDescription = expandedDescription ?? shortDescription
  const canExpand = expandableDescription && longDescription.trim() !== shortDescription.trim()

  return (
    <article
      data-scroll-reveal
      style={animationDelay ? ({ "--scroll-delay": animationDelay } as CSSProperties) : undefined}
      className={`group overflow-hidden border border-spudz-black/10 bg-spudz-gold/[0.16] transition duration-300 hover:-translate-y-1 hover:border-spudz-gold/45 ${
        featured ? "grid lg:grid-cols-[0.95fr_1.05fr]" : ""
      }`}
    >
      <div className={featured ? "min-h-[320px]" : ""}>
        <img
          src={item.image}
          alt={item.alt}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
            featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
          }`}
          loading="lazy"
        />
      </div>
      <div className={featured ? "flex min-h-full flex-col justify-between p-6 sm:p-8" : "p-5 sm:p-6"}>
        <div>
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-black uppercase leading-none text-spudz-black sm:text-3xl">
              {item.name}
            </h3>
            <p className="max-w-full rounded-full bg-spudz-gold px-3 py-1 text-center text-xs font-black leading-tight text-spudz-black sm:text-sm">
              {item.price}
            </p>
          </div>
          <p className="text-base leading-7 text-spudz-muted">{expanded && canExpand ? longDescription : shortDescription}</p>
          {canExpand ? (
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-spudz-black/70 transition hover:text-spudz-black"
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          ) : null}
        </div>
        {item.sizes ? (
          <div className="mt-7 flex flex-wrap gap-2">
            {item.sizes.map((size) => (
              <span key={size} className="rounded-full border border-spudz-gold/40 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-spudz-gold">
                {size}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
