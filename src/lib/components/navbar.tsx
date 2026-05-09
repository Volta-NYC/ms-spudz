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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-spudz-black/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-spudz-gold/50 bg-spudz-gold text-sm font-black text-spudz-black">
            MS
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black uppercase tracking-normal text-white">Ms. Spudz</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-spudz-gold">No Gravy</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-[0.14em] transition ${
                  active ? "text-spudz-gold" : "text-white/72 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/menu"
            className="rounded-full bg-spudz-red px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff633f]"
          >
            Order Now
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div className={`border-t border-white/10 bg-spudz-black px-4 py-5 lg:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/80 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-spudz-red px-5 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
