"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "NEURAL SYMPHONY",
    category: "TECH SUMMIT 2024",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    aspect: "aspect-[4/5]",
    desktopMt: "md:mt-0",
  },
  {
    id: 2,
    title: "KINETIC FLOW",
    category: "FASHION WEEK",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    aspect: "aspect-[4/5]",
    desktopMt: "md:mt-32",
  },
  {
    id: 3,
    title: "STATIC VOID",
    category: "ART INSTALLATION",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    aspect: "aspect-square",
    desktopMt: "md:-mt-16",
  },
  {
    id: 4,
    title: "PULSE WAVE",
    category: "MUSIC EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80",
    aspect: "aspect-[3/4]",
    desktopMt: "md:mt-16",
  },
];

export default function Work() {
  const container = useRef(null);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".header-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative flex-1 w-full">
      {/* Hero */}
      <section className="container mx-auto px-6 pt-40 md:pt-48 pb-20 md:pb-32 min-h-[85vh] flex flex-col justify-center mb-24 header-text">
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold leading-none tracking-tighter text-white uppercase mb-8">
          KINETIC <br className="md:block hidden" />
          EXPOSURE
        </h1>
        <p className="text-on_surface_variant max-w-md text-lg">
          Curating digital environments and physical stages that breathe. Our
          portfolio is a testament to high-stakes execution and aesthetic
          precision.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-item container px-6 mx-auto">
        {/* DESKTOP GRID (Hidden on Mobile) */}
        <div className="md:grid md:grid-cols-2 gap-x-12 gap-y-32 hidden mt-12 mb-32">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${project.desktopMt} group cursor-pointer`}>
              <div
                className={`${project.aspect} relative surface-container-lowest ghost-border border overflow-hidden mb-6 ambient-lift`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="opacity-80 group-hover:scale-110 group-hover:opacity-100 object-cover transition-all duration-1000 ease-out"
                />
              </div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">
                {project.category}
              </h4>
              <h3 className="font-display text-3xl font-bold tracking-tighter text-white uppercase">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL (Hidden on Desktop) */}
        <div className="md:hidden block mt-12">
          {/* Controls Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-1">
              {PROJECTS.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 rounded-full ${index === current ? "w-6 bg-primary" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => api?.scrollPrev()}
                className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-3 transition-colors border rounded-sm">
                <ArrowLeftIcon />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-3 transition-colors border rounded-sm">
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="-ml-4">
              {PROJECTS.map((project) => (
                <CarouselItem key={project.id} className="basis-[85%] pl-4">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] relative surface-container-lowest ghost-border border overflow-hidden mb-6 ambient-lift">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="opacity-80 object-cover transition-all duration-1000 ease-out"
                      />
                    </div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">
                      {project.category}
                    </h4>
                    <h3 className="font-display text-2xl font-bold tracking-tighter text-white uppercase">
                      {project.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="gallery-item container px-6 mx-auto mt-40 mb-20 text-center">
        <h2 className="md:text-7xl font-display mb-12 text-5xl italic font-bold tracking-tighter text-white">
          YOUR VISION,
          <br />
          OUR CURATION.
        </h2>
        <Button className="h-14 ghost-border hover:bg-surface-bright border-x-0 flex items-center gap-4 px-12 mx-auto text-xs font-bold tracking-widest text-white uppercase bg-transparent border-t border-b-0 rounded-none">
          START A PROJECT <span>→</span>
        </Button>
      </section>
    </div>
  );
}
