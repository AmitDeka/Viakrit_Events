"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Animation for Mobile Menu
  useEffect(() => {
    if (isOpen) {
      // Open Animation
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
      );
      gsap.fromTo(
        linksRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] glass-panel border-b ghost-border backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Left Side: Hamburger + Logo */}
          <div className="flex-1 flex items-center gap-4">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors p-2 -ml-2"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <Link 
              href="/" 
              onClick={closeMenu}
              className="font-display font-bold text-lg md:text-xl tracking-tight z-10 text-white hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              THE KINETIC CURATOR
            </Link>
          </div>

          {/* Desktop Center: Nav Links */}
          <div className="hidden md:flex justify-center gap-8 items-center font-sans text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative group ${
                  isActive(link.href) ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Book Now (Visible on Both) */}
          <div className="flex-1 flex justify-end">
            <Button 
              asChild 
              className="rounded-full px-4 md:px-5 py-1.5 md:py-2 bg-primary text-black hover:bg-primary/90 text-[10px] md:text-xs font-bold tracking-widest transition-transform hover:scale-105"
            >
              <Link href="/contact" onClick={closeMenu}>BOOK NOW</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[55] md:hidden bg-[#0e0e0f]/98 backdrop-blur-2xl flex flex-col pt-32 px-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-8">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={closeMenu}
              className={`text-4xl font-display font-bold tracking-tighter uppercase transition-all ${
                isActive(link.href) ? "text-primary active-link-glow" : "text-on_surface_variant hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t ghost-border" ref={(el) => (linksRef.current[NAV_LINKS.length] = el)}>
            <Button 
              asChild 
              className="w-full h-14 rounded-none bg-primary text-black font-bold tracking-widest uppercase hover:bg-primary/90"
            >
              <Link href="/contact" onClick={closeMenu}>START A PROJECT</Link>
            </Button>
          </div>
        </div>

        {/* Branding Footer inside Menu */}
        <div className="mt-auto pb-12 opacity-30">
          <p className="text-[10px] font-bold tracking-widest text-[#9d9aff] uppercase">
            EST. 2024 / KINETIC CURATION
          </p>
        </div>
      </div>
    </>
  );
}
