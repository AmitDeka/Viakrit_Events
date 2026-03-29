import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0f] text-on_surface_variant py-16 ghost-border border-t">
      <div className="container px-6 mx-auto">
        <div className="md:grid-cols-4 grid grid-cols-1 gap-12 mb-12 font-sans text-sm">
          <div className="col-span-1">
            <h4 className="font-display mb-4 font-bold text-white">
              THE KINETIC CURATOR
            </h4>
            <p className="max-w-xs leading-relaxed">
              Elevating event management through high-performance digital
              architecture and editorial precision.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              Platform
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              Legal
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              Follow Us
            </h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="surface_container hover:bg-surface_bright flex items-center justify-center w-10 h-10 transition-colors rounded-full">
                IG
              </a>
              <a
                href="#"
                className="surface_container hover:bg-surface_bright flex items-center justify-center w-10 h-10 transition-colors rounded-full">
                IN
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex-row flex flex-col items-center justify-between pt-8 text-xs border-t">
          <p>© 2024 The Kinetic Curator. All rights reserved.</p>
          <p className="md:mt-0 mt-4 font-bold tracking-widest capitalize">
            Designed and Developed by{" "}
            <span className="text-primary">
              <a
                href="https://brandheft.com/"
                target="_blank"
                rel="noopener noreferrer">
                BrandHeft
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
