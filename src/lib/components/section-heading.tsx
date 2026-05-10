type SectionHeadingProps = {
  kicker?: string
  title: string
  copy?: string
  align?: "left" | "center"
  as?: "h1" | "h2"
}

export default function SectionHeading({ kicker, title, copy, align = "left", as = "h2" }: SectionHeadingProps) {
  const HeadingTag = as

  return (
    <div data-scroll-reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-spudz-gold">{kicker}</p>
      ) : null}
      <HeadingTag className="font-display text-4xl font-black uppercase leading-[0.95] tracking-normal text-spudz-black sm:text-5xl lg:text-6xl">
        {title}
      </HeadingTag>
      {copy ? <p className="mt-5 text-lg leading-8 text-spudz-muted">{copy}</p> : null}
    </div>
  )
}
