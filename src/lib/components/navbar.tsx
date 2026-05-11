"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
]

const mobileMenuId = "mobile-navigation"

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/"
}

function isActivePath(pathname: string, href: string) {
  const current = normalizePath(pathname)
  const target = normalizePath(href)

  return current === target || (target !== "/" && current.startsWith(`${target}/`))
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-spudz-black/20 bg-white shadow-[0_10px_24px_rgba(22,36,17,0.12)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/assets/images/icon.png" alt="Ms. Spudz icon" className="h-12 w-12 shrink-0 object-contain" />
          <span className="leading-none">
            <span className="block text-lg font-black uppercase tracking-normal text-spudz-black">Ms. Spudz</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-spudz-gold">No Gravy</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-bold uppercase tracking-[0.14em] decoration-2 underline-offset-4 transition ${
                  active ? "text-spudz-gold underline" : "text-spudz-ink/72 hover:text-spudz-black hover:underline"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/order"
            className="rounded-full bg-spudz-red px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-spudz-black shadow-glow decoration-2 underline-offset-4 transition hover:-translate-y-0.5 hover:bg-spudz-gold hover:underline"
          >
            Order Now
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-spudz-black/15 text-spudz-black lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls={mobileMenuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div id={mobileMenuId} className={`border-t border-spudz-black/10 bg-white px-4 py-5 lg:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-sm font-black uppercase tracking-[0.16em] decoration-2 underline-offset-4 hover:bg-spudz-gold/20 hover:text-spudz-black hover:underline ${
                  active ? "text-spudz-gold" : "text-spudz-ink/80"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-spudz-red px-5 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-spudz-black decoration-2 underline-offset-4 hover:underline"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
