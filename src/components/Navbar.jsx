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

  const handleNavClick = () => {
    document.documentElement.classList.remove("scroll-smooth");
    setTimeout(() => {
      document.documentElement.classList.add("scroll-smooth");
    }, 100);
    closeMenu();
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power4.out" },
      );
      gsap.fromTo(
        linksRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        },
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
      <nav className="z-60 glass-panel ghost-border backdrop-blur-md fixed top-0 w-full border-b">
        <div className="md:h-20 container flex items-center justify-between h-16 px-6 mx-auto">
          {/* Left Side: Hamburger + Logo */}
          <div className="flex items-center flex-1 gap-4">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="hover:text-primary p-2 -ml-2 text-white transition-colors"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="font-display md:text-xl hover:opacity-80 whitespace-nowrap z-10 text-lg font-bold tracking-wider text-white transition-opacity">
              VIAKRIT EVENTS
            </Link>
          </div>

          {/* Desktop Center: Nav Links */}
          <div className="md:flex items-center justify-center hidden gap-8 font-sans text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className={`transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}>
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Book Now (Visible on Both) */}
          <div className="flex justify-end flex-1">
            <Button
              asChild
              className="rounded-full px-4 md:px-5 py-1.5 md:py-2 bg-primary text-black hover:bg-primary/90 text-[10px] md:text-xs font-bold tracking-widest transition-transform hover:scale-105">
              <Link href="/contact" onClick={handleNavClick}>
                BOOK NOW
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[55] md:hidden bg-[#0e0e0f]/98 backdrop-blur-2xl flex flex-col pt-32 px-10 ${
          isOpen ? "block" : "hidden"
        }`}>
        <div className="flex flex-col gap-8">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={handleNavClick}
              className={`text-4xl font-display font-bold tracking-tighter uppercase transition-all ${
                isActive(link.href)
                  ? "text-primary active-link-glow"
                  : "text-on_surface_variant hover:text-white"
              }`}>
              {link.name}
            </Link>
          ))}

          <div
            className="ghost-border pt-8 mt-8 border-t"
            ref={(el) => (linksRef.current[NAV_LINKS.length] = el)}>
            <Button
              asChild
              className="h-14 bg-primary hover:bg-primary/90 w-full font-bold tracking-widest text-black uppercase rounded-none">
              <Link href="/contact" onClick={handleNavClick}>
                START A PROJECT
              </Link>
            </Button>
          </div>
        </div>

        {/* Branding Footer inside Menu */}
        <div className="opacity-30 pb-12 mt-auto">
          <p className="text-[10px] font-bold tracking-widest text-[#9d9aff] uppercase">
            EST. 2024 / KINETIC CURATION
          </p>
        </div>
      </div>
    </>
  );
}
