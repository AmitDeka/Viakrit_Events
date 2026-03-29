"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookingSystem from "@/components/BookingSystem";
import { MapPin, Landmark } from "lucide-react";

export default function Contact() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-element", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex-1 w-full">
      {/* Hero */}
      <section className="md:pt-48 md:pb-32 container flex flex-col justify-center px-6 pt-40 pb-20 mx-auto mb-16">
        <div className="md:flex-row md:items-end reveal-element flex flex-col items-start justify-between gap-8">
          <h1 className="md:text-8xl font-display mb-0 text-6xl font-bold tracking-tight text-white">
            Let's Connect
          </h1>
          <p className="text-on_surface_variant max-w-md">
            Scale your event vision with the kinetic precision it deserves. Our
            curators are ready to architect your next high-performance
            experience.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="lg:grid-cols-12 container grid grid-cols-1 gap-8 px-6 mx-auto mb-32">
        {/* Scheduling Widget */}
        <div className="lg:col-span-7 surface-container-lowest ghost-border md:p-12 reveal-element ambient-lift p-8 border min-h-[600px] flex flex-col">
          <h2 className="font-display mb-8 text-2xl font-bold tracking-tight text-white uppercase">
            Architect Your Strategy
          </h2>
          <BookingSystem />
        </div>

        {/* Info Cards */}
        <div className="lg:col-span-5 reveal-element flex flex-col gap-8">
          <div className="surface-container-low ghost-border p-8 border">
            <h3 className="text-on_surface_variant mb-6 text-xs font-bold tracking-widest uppercase">
              GLOBAL HQ
            </h3>

            <div className="surface-bright ghost-border hover:border-primary/50 group flex items-center justify-between p-6 mb-4 transition-colors border cursor-pointer">
              <div>
                <p className="text-[10px] uppercase font-bold text-on_surface_variant tracking-widest mb-1">
                  DIRECT LINE
                </p>
                <p className="group-hover:text-primary font-bold text-white transition-colors">
                  +1 (800) KINETIC
                </p>
              </div>
              <span className="text-on_surface_variant group-hover:text-primary transition-colors">
                →
              </span>
            </div>

            <div className="surface-bright ghost-border hover:border-primary/50 group flex items-center justify-between p-6 mb-8 transition-colors border cursor-pointer">
              <div>
                <p className="text-[10px] uppercase font-bold text-on_surface_variant tracking-widest mb-1">
                  CORRESPONDENCE
                </p>
                <p className="group-hover:text-primary font-bold text-white transition-colors">
                  curato@kinetic.com
                </p>
              </div>
              <span className="text-on_surface_variant group-hover:text-primary transition-colors">
                →
              </span>
            </div>

            <h3 className="text-on_surface_variant mb-4 text-xs font-bold tracking-widest uppercase">
              DIGITAL PRESENCE
            </h3>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="bg-surface ghost-border hover:bg-primary/20 hover:text-primary flex items-center justify-center w-12 h-12 text-white transition-colors border">
                  {i === 1 ? "X" : i === 2 ? "in" : "ig"}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-tertiary hover:bg-tertiary-dim group p-8 text-black transition-colors cursor-pointer">
            <h3 className="font-display flex items-center gap-2 mb-4 text-2xl font-bold tracking-tight">
              <span className="text-3xl">✦</span> Bespoke Inquiry?
            </h3>
            <p className="text-sm font-medium mb-8 leading-relaxed max-w-[280px]">
              For enterprise-grade events exceeding 5,000 attendees, please
              request our White-Glove Prospectus.
            </p>
            <p className="group-hover:gap-4 flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all">
              Request Prospectus <span>→</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Global Operations Studio (Home Page Style) */}
      <section className="container mx-auto px-6 mb-32 md:mb-40 reveal-element relative min-h-[500px] md:h-[600px] surface-container border ghost-border rounded-xl flex items-center justify-center md:justify-start ambient-lift overflow-hidden group">
        {/* Stylized Snazzy Maps Placeholder Background */}
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Snazzy Map Placeholder"
          fill
          className="opacity-20 grayscale object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0e0e0f]/90 via-[#0e0e0f]/70 to-[#0e0e0f]/20 z-0"></div>

        <div className="relative z-10 w-[90%] md:w-full md:max-w-sm ml-0 md:ml-12 p-6 md:p-8 surface-container-highest border ghost-border ambient-lift box-shadow-xl inline-block bg-[#0e0e0f]/80 backdrop-blur-md">
          <span className="text-primary block mb-2 text-xs font-bold tracking-widest uppercase">
            VISIT US
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-white uppercase">
            The Studio.
          </h2>
          <p className="text-on_surface_variant md:mb-8 mb-6 text-sm font-medium leading-relaxed">
            Our high-stakes operations center is located in the heart of the Innovation District.
          </p>

          <div className="md:space-y-6 md:mb-8 mb-6 space-y-4">
            <div className="md:gap-4 flex items-start gap-3">
              <MapPin className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold leading-tight text-white">
                  88 Kinetic Way, Innovation District
                </p>
                <p className="text-[10px] md:text-xs text-on_surface_variant font-medium mt-1 uppercase tracking-widest">
                  New York, NY 10013
                </p>
              </div>
            </div>
            
            <div className="md:gap-4 flex items-center gap-3">
              <div className="text-primary w-4 h-4 md:w-5 md:h-5 flex items-center justify-center border-2 border-primary rounded-full shrink-0">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full animate-pulse"></span>
              </div>
              <p className="md:text-sm text-xs font-bold leading-tight text-white">
                Studio Hours: <br className="sm:hidden block" />
                <span className="text-on_surface_variant sm:ml-1 uppercase tracking-widest text-[10px]">
                  Mon — Fri: 09:00 - 18:00
                </span>
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full ghost-border rounded-none text-[10px] md:text-xs font-bold tracking-widest uppercase text-white bg-transparent hover:bg-surface-bright h-12">
            OPEN IN GOOGLE MAPS
          </Button>
        </div>

        {/* Dynamic Studio Pin Indicator */}
        <div className="hidden md:flex absolute md:right-[25%] right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center pointer-events-none">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black">
              <Landmark className="w-4 h-4 ml-[1px]" />
            </div>
          </div>
          <span className="text-white text-[10px] uppercase tracking-widest bg-black/80 px-3 py-1 mt-2 border ghost-border backdrop-blur-md rounded-sm">
            NY STUDIO HQ
          </span>
        </div>
      </section>

      {/* Big Impact CTA */}
      <section className="reveal-element container px-6 mx-auto mb-32">
        <div className="bg-primary hover:bg-primary-dim flex flex-col items-center justify-center px-6 py-32 text-center transition-colors cursor-pointer">
          <h2 className="md:text-6xl font-display max-w-4xl mb-12 text-4xl font-bold tracking-tighter text-black">
            Ready to define the next evolution of your events?
          </h2>
          <Button
            asChild
            className="bg-[#0e0e0f] text-white hover:bg-surface-bright rounded-none h-14 px-8 font-bold tracking-widest text-xs uppercase">
            <a
              href="https://calendly.com/amitakon99/test-meet"
              target="_blank"
              rel="noopener noreferrer">
              START YOUR NEXT PROJECT
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
