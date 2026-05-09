"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const revealSelector = "[data-scroll-reveal]"

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (elements.length === 0) {
      return
    }

    const reveal = (element: HTMLElement) => {
      element.classList.add("is-visible")
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(reveal)
      return
    }

    root.classList.add("scroll-reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      },
    )

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0

      if (alreadyVisible) {
        reveal(element)
        return
      }

      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      root.classList.remove("scroll-reveal-ready")
    }
  }, [pathname])

  return null
}
