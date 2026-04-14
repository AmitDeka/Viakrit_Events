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

import { WORK_CATEGORIES } from "@/lib/workData";
import { SEO } from "@/components/SEO";
import { useRouter } from "next/navigation";

function CategoryCarousel({ projects }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="md:hidden block mt-4">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-1 flex-wrap max-w-[50%]">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 rounded-full mb-1 ${index === current ? "w-6 bg-primary" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => api?.scrollPrev()}
            className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-3 transition-colors border rounded-sm">
            <ArrowLeftIcon size={16} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="text-on_surface_variant hover:text-white bg-surface-container ghost-border p-3 transition-colors border rounded-sm">
            <ArrowRightIcon size={16} />
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
          {projects.map((project) => (
            <CarouselItem key={project.id} className="basis-[85%] pl-4">
              <div className="group cursor-pointer">
                <div className="aspect-video surface-container-lowest ghost-border ambient-lift relative mb-6 overflow-hidden border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    placeholder="empty"
                    className="opacity-80 object-cover transition-all duration-1000 ease-out"
                  />
                </div>
                {project.subtitle && (
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">
                    {project.subtitle}
                  </h4>
                )}
                <h3 className="font-display text-2xl font-bold leading-none tracking-tighter text-white uppercase">
                  {project.title}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function AnimatedCategory({ categoryData, index }) {
  const compRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(compRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: (index % 2) * 0.15,
      });
    }, compRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={compRef} className="gallery-category md:mb-40 mb-24">
      {/* Category Header */}
      <div className="md:mb-20 flex items-center gap-4 mb-12">
        <span className="text-primary md:text-2xl lg:text-3xl text-xl font-bold leading-none tracking-tighter">
          __
        </span>
        <h2 className="font-display md:text-4xl text-2xl font-bold tracking-tighter text-white uppercase">
          {categoryData.category}
        </h2>
      </div>

      {/* Desktop Grid (Hidden on Mobile) */}
      <div className="md:grid-cols-2 gap-x-12 md:grid hidden">
        {categoryData.projects.map((project, pIndex) => (
          <div
            key={project.id}
            className={`group cursor-pointer ${pIndex % 2 !== 0 ? "md:mt-32" : "md:mb-32"}`}>
            <div className="aspect-video surface-container-lowest ghost-border ambient-lift relative mb-6 overflow-hidden border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                placeholder="empty"
                className="opacity-80 group-hover:scale-110 group-hover:opacity-100 object-cover transition-all duration-1000 ease-out"
              />
            </div>
            {project.subtitle && (
              <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2">
                {project.subtitle}
              </h4>
            )}
            <h3 className="font-display md:text-4xl text-3xl font-bold leading-none tracking-tighter text-white uppercase">
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile Carousel (Hidden on Desktop) */}
      <CategoryCarousel projects={categoryData.projects} />
    </div>
  );
}

export default function Work() {
  const router = useRouter();
  const container = useRef(null);
  const [visibleCategories, setVisibleCategories] = useState(2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const handleLoadMore = () => {
    setVisibleCategories((prev) => Math.min(prev + 2, WORK_CATEGORIES.length));
  };

  return (
    <>
      <SEO
        title="Our Work | Event Portfolio & Brand Activations"
        description="Explore Viakrit Events’ portfolio of corporate events, brand activations, government projects and on-ground marketing campaigns. From community programs to large-scale public events, we deliver high-impact execution that drives visibility, engagement and brand recall."
        keywords="event portfolio, brand activation projects, event management portfolio, corporate event case studies, government event projects, on ground marketing campaigns, event execution examples, event agency portfolio India"
      />
      <div ref={container} className="relative flex-1 w-full">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-40 md:pt-48 pb-12 md:pb-20 min-h-[50vh] flex flex-col justify-center header-text">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold leading-none tracking-tighter text-white uppercase mb-8">
            EVENT <br className="md:block hidden" />
            PORTFOLIO
          </h1>
          <p className="text-on_surface_variant max-w-2xl text-lg">
            Explore our work across corporate events, brand activations,
            government projects and on-ground marketing campaigns. From
            large-scale public programs to focused community engagement, we
            design and execute experiences that drive visibility, audience
            connection and measurable brand impact.
          </p>
        </section>

        {/* Categorized Gallery Section */}
        <section className="container px-6 mx-auto mb-32">
          {WORK_CATEGORIES.slice(0, visibleCategories).map(
            (categoryData, catIndex) => (
              <AnimatedCategory
                key={`${catIndex}-${categoryData.category}`}
                categoryData={categoryData}
                index={catIndex}
              />
            ),
          )}

          {/* Load More Button */}
          {visibleCategories < WORK_CATEGORIES.length && (
            <div className="flex justify-center mt-20">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="border-white/20 hover:bg-white/10 h-12 px-10 text-xs font-bold tracking-widest text-white uppercase bg-transparent">
                LOAD MORE CATEGORIES
              </Button>
            </div>
          )}
        </section>

        {/* Footer CTA */}
        <section className="container px-6 mx-auto mt-20 mb-20 text-center">
          <h2 className="md:text-7xl font-display mb-12 text-5xl italic font-bold tracking-tighter text-white">
            YOUR VISION,
            <br />
            OUR CURATION.
          </h2>
          <Button
            onClick={() => router.push("/contact")}
            className="h-14 ghost-border hover:bg-surface-bright border-x-0 flex items-center gap-4 px-12 mx-auto text-xs font-bold tracking-widest text-white uppercase bg-transparent border-t border-b-0 rounded-none">
            START A PROJECT <span>→</span>
          </Button>
        </section>
      </div>
    </>
  );
}
