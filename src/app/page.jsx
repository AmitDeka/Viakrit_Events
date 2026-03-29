"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Network,
  Landmark,
  Video,
  Megaphone,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef(null);
  const [api, setApi] = React.useState();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-item").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex-1 w-full">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 pt-40 md:pt-48 pb-20 md:pb-32 min-h-[85vh] flex flex-col justify-center relative reveal-item">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-display font-bold leading-[1] tracking-tight text-white mb-8 z-10 w-full max-w-4xl">
          Elevate Your <br />
          <span className="text-primary-gradient">Events.</span>
        </h1>
        <p className="text-on_surface_variant md:text-lg relative z-10 max-w-xl mb-12 text-base font-medium leading-relaxed">
          We bridge the gap between high-stakes logistics and premium digital
          experiences. High-performance event management for the modern era.
        </p>
        <div className="sm:flex-row sm:w-auto z-10 flex flex-col w-full gap-4">
          <Button className="sm:w-auto h-14 hover:scale-105 bg-primary w-full px-8 text-xs font-bold tracking-widest text-black transition-transform rounded-none">
            Start A Project →
          </Button>
          <Button
            variant="outline"
            className="sm:w-auto h-14 hover:scale-105 ghost-border w-full px-8 text-xs font-bold tracking-widest text-white transition-transform bg-transparent rounded-none">
            View Showcase
          </Button>
        </div>
        <div className="md:w-2/3 mix-blend-screen opacity-20 absolute top-0 right-0 z-0 w-full h-full pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Tech stage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0e0e0f] via-[#0e0e0f]/80 to-transparent"></div>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="md:mb-40 reveal-item container px-6 mx-auto mb-32">
        <div className="lg:grid-cols-2 md:gap-16 grid items-start grid-cols-1 gap-8">
          <div>
            <span className="text-primary block mb-4 text-xs font-bold tracking-widest uppercase">
              OUR MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-[1.1] text-white">
              We exist to <br className="sm:block hidden" />
              <span className="text-primary-gradient">redefine</span> <br />
              the kinetic edge.
            </h2>
          </div>
          <div className="md:pt-2 pt-0">
            <p className="md:text-2xl text-on_surface_variant text-lg font-medium leading-relaxed">
              Our mission is to synchronize human energy with technological
              precision. We believe every event is a living organism that
              requires careful curation and relentless execution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Manifesto */}
      <section className="md:mb-40 reveal-item container flex flex-col items-center px-6 mx-auto mb-32">
        <span className="text-[#ff66b2] font-bold tracking-widest uppercase text-xs mb-4 block text-center">
          THE MANIFESTO
        </span>
        <h2 className="sm:text-5xl md:text-7xl font-display md:mb-16 mb-10 text-3xl font-bold tracking-widest text-center text-white uppercase">
          MOTION IS LIFE.
        </h2>

        <div className="w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] surface-container border ghost-border relative flex justify-center items-center group cursor-pointer overflow-hidden ambient-lift">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Manifesto Thumbnail"
            fill
            className="opacity-30 group-hover:scale-105 object-cover transition-transform duration-1000"
          />
          <Button
            size="icon"
            className="w-12 h-12 md:w-16 md:h-16 bg-surface-container-high border ghost-border text-white rounded-sm z-10 flex border-[rgba(255,255,255,0.1)] hover:bg-primary hover:text-black transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1">
              <path d="M6 4L20 12L6 20V4Z" />
            </svg>
          </Button>
        </div>
      </section>

      {/* 4. Kinetic Services Grid */}
      <section className="reveal-item container px-6 mx-auto mb-40">
        <span className="text-primary block mb-4 text-xs font-bold tracking-widest uppercase">
          OUR EXPERTISE
        </span>
        <h2 className="md:text-5xl font-display mb-16 text-4xl font-bold tracking-tight text-white">
          Kinetic Services.
        </h2>

        <div className="md:grid-cols-12 grid grid-cols-1 gap-6">
          {/* Live Events (Left, Large) */}
          <div className="md:col-span-7 surface-container border ghost-border p-8 md:p-12 min-h-[20rem] md:min-h-[26rem] flex flex-col justify-between items-start relative ambient-lift group overflow-hidden bg-[#0e0e0f]">
            <div
              className="opacity-40 mix-blend-screen group-hover:scale-105 absolute top-0 left-0 z-0 w-full h-full transition-transform duration-1000 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80')",
              }}></div>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tr from-[#0e0e0f] via-[#0e0e0f]/80 to-transparent z-0"></div>

            <Landmark className="md:w-10 md:h-10 text-primary relative z-10 w-8 h-8" />
            <div className="relative z-10">
              <h3 className="md:text-3xl font-display mb-4 text-2xl font-bold tracking-tighter text-white">
                Live Events
              </h3>
              <p className="text-on_surface_variant md:text-base max-w-md text-sm font-medium leading-relaxed">
                Precision logistics meets immersive stage design for global
                summits and keynotes.
              </p>
            </div>
          </div>

          {/* Virtual Summits (Right, Small) */}
          <div className="md:col-span-5 surface-container border ghost-border p-8 md:p-12 min-h-[20rem] md:min-h-[26rem] flex flex-col justify-between items-start relative ambient-lift group">
            <Video className="w-8 h-8 md:w-10 md:h-10 text-[#ff66b2]" />
            <div>
              <h3 className="md:text-2xl font-display mb-4 text-xl font-bold tracking-tighter text-white">
                Virtual Summits
              </h3>
              <p className="text-on_surface_variant md:text-base text-sm font-medium leading-relaxed">
                High-fidelity streaming and interactive engagement for remote
                audiences across 40+ countries.
              </p>
            </div>
          </div>

          {/* PR & Strategy (Left, Small) */}
          <div className="md:col-span-5 surface-container border ghost-border p-8 md:p-12 min-h-[20rem] md:min-h-[26rem] flex flex-col justify-between items-start relative ambient-lift group">
            <Megaphone
              className="md:w-10 md:h-10 text-secondary w-8 h-8"
              style={{ color: "#9d9aff" }}
            />
            <div>
              <h3 className="md:text-2xl font-display mb-4 text-xl font-bold tracking-tighter text-white">
                PR & Strategy
              </h3>
              <p className="text-on_surface_variant md:text-base text-sm font-medium leading-relaxed">
                Strategic media placement and messaging that amplifies your
                event's global footprint.
              </p>
            </div>
          </div>

          {/* Hybrid Systems (Right, Large) */}
          <div className="md:col-span-7 surface-container border ghost-border p-8 md:p-12 min-h-[22rem] md:min-h-[26rem] flex flex-col justify-between items-start relative ambient-lift group overflow-hidden bg-[#0e0e0f]">
            <div
              className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0 opacity-40 mix-blend-overlay bg-center bg-cover transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')",
              }}></div>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0e0e0f] via-[#0e0e0f]/90 to-transparent z-10"></div>

            <Layers className="md:w-10 md:h-10 text-primary relative z-20 w-8 h-8" />
            <div className="relative z-20">
              <h3 className="md:text-3xl font-display mb-4 text-2xl font-bold tracking-tighter text-white">
                Hybrid Systems
              </h3>
              <p className="text-on_surface_variant md:text-base max-w-sm text-sm font-medium leading-relaxed">
                Seamless synchronization between physical presence and digital
                participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORK & Selected Projects */}
      <section className="md:mb-40 reveal-item container relative px-6 mx-auto mb-32">
        <h2 className="text-[22vw] font-display font-bold uppercase text-on_surface/5 tracking-tighter absolute -top-[8vw] left-0 select-none leading-none -z-10">
          WORK.
        </h2>
        <div className="md:mb-12 relative z-10 flex items-baseline justify-between mb-8">
          <h2 className="md:text-5xl font-display text-3xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
          <Link
            href="/work"
            className="text-[#9d9aff] font-bold text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap">
            View All <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="md:grid-cols-2 relative z-10 grid grid-cols-1 gap-8">
          <div>
            <div className="aspect-[4/3] surface-container border ghost-border mb-4 md:mb-6 ambient-lift group overflow-hidden relative cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
                alt="Synthesis 2024"
                fill
                className="opacity-60 group-hover:opacity-100 group-hover:scale-105 object-cover transition-all duration-700"
              />
            </div>
            <h3 className="md:text-xl md:mb-2 mb-1 text-lg font-bold tracking-tight text-white">
              The State/Synthesis 2024
            </h3>
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-on_surface_variant">
              LOGISTICS / TECHNICAL DESIGN
            </p>
          </div>
          <div>
            <div className="aspect-[4/3] surface-container border ghost-border mb-4 md:mb-6 ambient-lift group overflow-hidden relative cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80"
                alt="Horizon Keynote"
                fill
                className="opacity-60 group-hover:opacity-100 group-hover:scale-105 object-cover transition-all duration-700"
              />
            </div>
            <h3 className="md:text-xl md:mb-2 mb-1 text-lg font-bold tracking-tight text-white">
              Horizon Virtual Keynote
            </h3>
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-on_surface_variant">
              VIRTUAL EVENT / 3D STRATEGY
            </p>
          </div>
        </div>
      </section>

      {/* 6. The Impact (Testimonials) */}
      <section className="md:mb-40 reveal-item container px-6 mx-auto mb-32">
        <span className="text-[#ff66b2] font-bold tracking-widest uppercase text-xs mb-4 block">
          CLIENT TESTIMONIALS
        </span>
        <div className="md:mb-12 flex items-center justify-between mb-8">
          <h2 className="sm:text-4xl font-display text-3xl font-bold tracking-tight text-white">
            The Impact.
          </h2>
          <div className="md:gap-4 flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-2 transition-colors border rounded-sm cursor-pointer">
              ←
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-2 transition-colors border rounded-sm cursor-pointer">
              →
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}>
          <CarouselContent className="-ml-6">
            <CarouselItem className="md:basis-1/2 pl-6">
              <div className="surface-container border ghost-border p-6 md:p-12 flex flex-col justify-end ambient-lift relative overflow-hidden min-h-[350px] md:min-h-[400px] h-full">
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-20 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?auto=format&fit=crop&q=80"
                    alt="Sarah"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0f]/50 to-surface-container"></div>
                </div>
                <div className="md:pt-40 relative z-10 pt-32">
                  <p className="md:text-lg md:mb-8 md:pl-0 relative pl-4 mb-6 text-base italic font-medium leading-relaxed text-white">
                    "The Kinetic Curator team's technical acumen pushed this to
                    the absolute edge. Fast, uncompromised with relentless
                    control. Vision execution out absolute unmastered."
                    <span className="absolute left-0 lg:-left-6 top-1 w-0.5 h-1/2 bg-primary group-hover:h-full transition-all"></span>
                  </p>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
                      Sarah Jenkins
                    </h4>
                    <p className="text-[10px] text-on_surface_variant uppercase tracking-widest font-bold">
                      Principal, Global Event Tech, Everlast Inc.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 pl-6">
              <div className="surface-container border ghost-border p-6 md:p-12 flex flex-col justify-end ambient-lift relative overflow-hidden min-h-[350px] md:min-h-[400px] h-full">
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-20 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                    alt="Marcus"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0f]/50 to-surface-container"></div>
                </div>
                <div className="md:pt-40 relative z-10 pt-32">
                  <p className="md:text-lg md:mb-8 md:pl-0 relative pl-4 mb-6 text-base italic font-medium leading-relaxed text-white">
                    "We've never seen production quality like this. They didn't
                    just manage events; they defined policies and curated that
                    only elite tech could reach."
                    <span className="absolute left-0 lg:-left-6 top-1 w-0.5 h-1/2 bg-[#ff66b2]"></span>
                  </p>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
                      Marcus Rhoads
                    </h4>
                    <p className="text-[10px] text-on_surface_variant uppercase tracking-widest font-bold">
                      CEO, Avant-Garde Industries
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 pl-6">
              <div className="surface-container border ghost-border p-6 md:p-12 flex flex-col justify-end ambient-lift relative overflow-hidden min-h-[350px] md:min-h-[400px] h-full">
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-20 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                    alt="Marcus"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0f]/50 to-surface-container"></div>
                </div>
                <div className="md:pt-40 relative z-10 pt-32">
                  <p className="md:text-lg md:mb-8 md:pl-0 relative pl-4 mb-6 text-base italic font-medium leading-relaxed text-white">
                    "We've never seen production quality like this. They didn't
                    just manage events; they defined policies and curated that
                    only elite tech could reach."
                    <span className="absolute left-0 lg:-left-6 top-1 w-0.5 h-1/2 bg-[#ff66b2]"></span>
                  </p>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
                      Marcus Rhoads
                    </h4>
                    <p className="text-[10px] text-on_surface_variant uppercase tracking-widest font-bold">
                      CEO, Avant-Garde Industries
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 pl-6">
              <div className="surface-container border ghost-border p-6 md:p-12 flex flex-col justify-end ambient-lift relative overflow-hidden min-h-[350px] md:min-h-[400px] h-full">
                <div className="absolute top-0 left-0 w-full h-[60%] opacity-20 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                    alt="Marcus"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0f]/50 to-surface-container"></div>
                </div>
                <div className="md:pt-40 relative z-10 pt-32">
                  <p className="md:text-lg md:mb-8 md:pl-0 relative pl-4 mb-6 text-base italic font-medium leading-relaxed text-white">
                    "We've never seen production quality like this. They didn't
                    just manage events; they defined policies and curated that
                    only elite tech could reach."
                    <span className="absolute left-0 lg:-left-6 top-1 w-0.5 h-1/2 bg-[#ff66b2]"></span>
                  </p>
                  <div>
                    <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
                      Marcus Rhoads
                    </h4>
                    <p className="text-[10px] text-on_surface_variant uppercase tracking-widest font-bold">
                      CEO, Avant-Garde Industries
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* 7. Global Ops */}
      <section className="container mx-auto px-6 mb-32 md:mb-40 reveal-item relative min-h-[500px] md:h-[600px] surface-container border ghost-border rounded-xl flex items-center justify-center md:justify-start ambient-lift overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Map"
          fill
          className="opacity-20 grayscale object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0e0e0f]/90 via-[#0e0e0f]/70 to-[#0e0e0f]/20 z-0"></div>

        <div className="relative z-10 w-[90%] md:w-full md:max-w-sm ml-0 md:ml-12 p-6 md:p-8 surface-container-highest border ghost-border ambient-lift box-shadow-xl inline-block bg-[#0e0e0f]/80 backdrop-blur-md">
          <span className="text-primary block mb-2 text-xs font-bold tracking-widest uppercase">
            REACH OUT
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-white">
            Global Ops.
          </h2>
          <p className="text-on_surface_variant md:mb-8 mb-6 text-sm font-medium leading-relaxed">
            While we design experiences worldwide, our strategic hub is located
            in the heart of the tech district.
          </p>

          <div className="md:space-y-6 md:mb-8 mb-6 space-y-4">
            <div className="md:gap-4 flex items-start gap-3">
              <MapPin className="text-[#ff66b2] w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold leading-tight text-white">
                  12R Studio Plaza, Manhattan Route
                </p>
                <p className="text-[10px] md:text-xs text-on_surface_variant font-medium mt-1">
                  New York, NY 10074
                </p>
              </div>
            </div>
            <div className="md:gap-4 flex items-center gap-3">
              <div className="text-[#ff66b2] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center border-2 border-[#ff66b2] rounded-full shrink-0">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#ff66b2] rounded-full"></span>
              </div>
              <p className="md:text-sm text-xs font-bold leading-tight text-white">
                Global Operations: <br className="sm:hidden block" />
                <span className="text-on_surface_variant hover:text-white sm:ml-1 transition-colors cursor-pointer">
                  24 / 7 / 365
                </span>
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full ghost-border rounded-none text-[10px] md:text-xs font-bold tracking-widest uppercase text-white bg-transparent hover:bg-surface-bright">
            GET DIRECTIONS
          </Button>
        </div>

        <div className="hidden md:flex absolute md:right-[20%] right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center pointer-events-none">
          <div className="w-12 h-12 bg-[#ff66b2]/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-[#ff66b2] rounded-full flex items-center justify-center text-white">
              <Network className="w-4 h-4 ml-[1px]" />
            </div>
          </div>
          <span className="text-white text-[10px] uppercase tracking-widest bg-black/80 px-3 py-1 mt-2 border ghost-border backdrop-blur-md rounded-sm">
            HQ NEW YORK
          </span>
        </div>
      </section>

      {/* 8. Footer CTA */}
      <section className="md:mb-40 reveal-item container flex flex-col items-center px-4 px-6 mx-auto mb-32 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white tracking-tight leading-[1] mb-6 md:mb-8 break-words max-w-full">
          Ready to <br className="md:block hidden" />
          <span className="text-primary-gradient md:ml-2 md:inline block ml-0">
            Take the Stage?
          </span>
        </h2>
        <p className="sm:text-lg md:text-xl text-on_surface_variant md:mb-12 max-w-2xl mb-10 text-base font-medium text-center">
          Your high-performance event deserves a curator who understands the
          kinetic energy of modern audiences.
        </p>
        <Button className="md:h-14 md:px-12 bg-primary hover:scale-105 sm:w-auto w-full h-12 px-8 text-xs font-bold tracking-widest text-black uppercase transition-transform rounded-none">
          Start Your Project
        </Button>
      </section>
    </div>
  );
}
