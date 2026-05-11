import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-spudz-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="text-2xl font-black uppercase tracking-normal text-spudz-black">Ms. Spudz</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-spudz-muted">
            Everything Potato 'No' Gravy. Brooklyn-based, community-focused, and built around fresh-cut potatoes.
          </p>
          <p className="mt-6 text-sm text-spudz-muted">© {new Date().getFullYear()} Ms. Spudz</p>
          <p className="mt-2 text-sm text-spudz-muted">
            Made by{" "}
            <a
              href="https://voltanyc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-spudz-volta hover:underline"
            >
              Volta
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Find Us</h2>
          <address className="mt-4 not-italic text-sm leading-6 text-spudz-muted">
            790 Eldert Lane<br />
            Brooklyn, NY 11208<br />
            <a className="text-spudz-black hover:text-spudz-gold" href="mailto:msspudzepng@gmail.com">
              msspudzepng@gmail.com
            </a>
          </address>
          <div className="mt-4 flex gap-3">
            <a className="text-sm font-bold text-spudz-black hover:text-spudz-gold" href="https://www.instagram.com/Msspudz_epng" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="text-sm font-bold text-spudz-black hover:text-spudz-gold" href="https://www.facebook.com/MsSpudz" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-spudz-gold">Links</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-bold text-spudz-ink/78">
            <Link className="hover:text-spudz-gold" href="/menu">Menu</Link>
            <Link className="hover:text-spudz-gold" href="/about">About</Link>
            <Link className="hover:text-spudz-gold" href="/contact">Contact</Link>
            <Link className="hover:text-spudz-gold" href="/blog">Blog</Link>
            <Link className="hover:text-spudz-gold" href="/reviews">Reviews</Link>
            <a className="hover:text-spudz-gold" href="#">Terms</a>
            <a className="hover:text-spudz-gold" href="#">Privacy</a>
            <a className="hover:text-spudz-gold" href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
