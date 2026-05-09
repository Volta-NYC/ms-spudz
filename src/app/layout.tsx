import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
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
      { url: "/assets/images/favicon-32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/assets/images/favicon-96.webp", sizes: "96x96", type: "image/webp" },
      { url: "/assets/images/favicon-256.webp", sizes: "256x256", type: "image/webp" },
    ],
    apple: "/assets/images/apple-touch-icon.png",
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
      <body className={`${inter.variable} min-h-screen bg-spudz-black font-sans text-spudz-cream antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
