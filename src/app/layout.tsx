import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import ScrollReveal from "@/lib/components/scroll-reveal"
import PotatoCursor from "@/lib/components/potato-cursor"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://msspudzepng.com"),
  title: {
    default: "Ms. Spudz | Everything Potato 'No' Gravy",
    template: "%s | Ms. Spudz",
  },
  description:
    "Ms. Spudz - Everything Potato 'No' Gravy is a Brooklyn fast food outlet serving fresh-cut fries, loaded spudz, seafood bites, and gourmet dipping sauces.",
  icons: {
    icon: [
      { url: "/assets/images/icon.png", sizes: "200x200", type: "image/png" },
    ],
    shortcut: "/assets/images/icon.png",
    apple: "/assets/images/icon.png",
  },
  openGraph: {
    title: "Ms. Spudz | Everything Potato 'No' Gravy",
    description:
      "Brooklyn-based Ms. Spudz serves fresh-cut, double-fried potatoes, loaded spudz, seafood bites, and gourmet dipping sauces.",
    url: "https://msspudzepng.com",
    siteName: "Ms. Spudz",
    images: [{ url: "/assets/images/hero.jpg", width: 2240, height: 1260, alt: "Ms. Spudz food spread" }],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-white font-sans text-spudz-ink antialiased`}>
        <Navbar />
        <ScrollReveal />
        <PotatoCursor />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
