"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const curatorsData = [
  {
    name: "Julian Vance",
    role: "Principal Architect",
    image:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
  {
    name: "Marcus Thorne",
    role: "Technical Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  },
];

export default function About() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".stat-item", {
        scrollTrigger: ".stat-container",
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Viakrit Events, our mission, our manifesto, and the curators behind our high-performance kinetic experiences."
        keywords="about viakrit, event architects, julian vance, elena rostova, marcus thorne, kinetic manifesto"
      />
      <div ref={container} className="flex-1 w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 md:pt-48 pb-20 md:pb-32 min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-bold tracking-[-0.04em] mb-8 text-white uppercase break-words">
            We architect <br />
            <span className="text-primary-gradient">
              kinetic experiences
            </span>{" "}
            <br />
            for the bold.
          </h1>
          <div className="hero-text text-on_surface_variant relative max-w-xl ml-2 space-y-6 text-lg">
            <p>
              Born from the intersection of high-end production and technical
              precision, The Kinetic Curator was founded to solve a single
              problem: the friction between vision and execution. We don't just
              manage events; we curate moments of motion.
            </p>
            <p>
              Our team consists of architects, engineers, and creative directors
              who treat every digital and physical space as a high-performance
              stage.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 h-[600px] relative surface-container-highest ghost-border rounded-xl overflow-hidden ambient-lift hero-text object-cover">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Event stage"
            fill
            className="opacity-80 mix-blend-screen object-cover"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="container px-6 mx-auto mb-32">
        <div className="md:flex-row flex flex-col items-start justify-between gap-12">
          <h3 className="text-primary w-48 text-sm font-bold tracking-widest uppercase">
            Our Mission
          </h3>
          <h2 className="md:text-5xl font-display text-on_surface_variant max-w-4xl text-3xl font-bold leading-tight uppercase">
            To eliminate the <span className="text-white">boundary</span>{" "}
            between the <span className="text-primary-gradient">imaginary</span>{" "}
            and the <span className="text-primary-gradient">physical</span>{" "}
            through radical technical precision.
          </h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-container container px-6 mx-auto mb-32">
        <div className="md:grid-cols-4 border-y ghost-border grid grid-cols-2 gap-4 py-12">
          <div className="stat-item last:border-r-0 flex flex-col items-center justify-center p-8 border-t-0 border-b-0 border-l-0 border-r">
            <h3 className="font-display text-primary mb-2 text-5xl font-bold">
              500+
            </h3>
            <p className="text-on_surface_variant text-xs font-bold tracking-widest uppercase">
              Events Delivered
            </p>
          </div>
          <div className="stat-item md:border-r last:border-r-0 flex flex-col items-center justify-center p-8 border-t-0 border-b-0 border-l-0">
            <h3 className="font-display text-primary mb-2 text-5xl font-bold">
              10+
            </h3>
            <p className="text-on_surface_variant text-xs font-bold tracking-widest uppercase">
              Countries Reached
            </p>
          </div>
          <div className="stat-item last:border-r-0 flex flex-col items-center justify-center p-8 border-t-0 border-b-0 border-l-0 border-r">
            <h3 className="font-display text-primary mb-2 text-5xl font-bold">
              1.2M
            </h3>
            <p className="text-on_surface_variant text-xs font-bold tracking-widest uppercase">
              Attendees Managed
            </p>
          </div>
          <div className="stat-item last:border-r-0 flex flex-col items-center justify-center p-8 border-t-0 border-b-0 border-l-0">
            <h3 className="font-display text-primary mb-2 text-5xl font-bold">
              04ms
            </h3>
            <p className="text-on_surface_variant text-xs font-bold tracking-widest uppercase">
              System Latency
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Video Section */}
      <section className="container px-6 mx-auto mb-32">
        <h2 className="font-display border-primary inline-block pb-2 mb-8 text-3xl font-bold uppercase border-b-2">
          The Manifesto
        </h2>
        <div className="aspect-video surface-container-high group ambient-lift relative flex items-center justify-center w-full overflow-hidden cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Video cover"
            fill
            className="group-hover:scale-105 object-cover transition-transform duration-1000 ease-out opacity-50"
          />
          <div className="bg-black/40 absolute inset-0 z-10" />
          <Button
            size="icon"
            className="bg-primary hover:scale-110 active:scale-95 z-20 w-20 h-20 pl-2 text-black transition-all rounded-full shadow-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
            </svg>
          </Button>
          <div className="bottom-8 left-8 absolute z-20">
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase">
              Movement is the only truth.
            </h3>
          </div>
        </div>
      </section>

      {/* Curators Grid */}
      <section className="container px-6 mx-auto mb-40">
        <div className="mb-12">
          <h2 className="font-display mb-2 text-3xl font-bold uppercase">
            The Curators
          </h2>
          <p className="text-on_surface_variant">
            The minds driving high-performance execution.
          </p>
        </div>
        <div className="md:grid-cols-3 grid grid-cols-1 gap-8">
          {curatorsData.map((curator, i) => (
            <div
              key={i}
              className="aspect-[4/5] relative surface-container overflow-hidden group ghost-border">
              <Image
                src={curator.image}
                alt={curator.name}
                fill
                className="opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale hover:grayscale-0 object-cover transition-all duration-700 ease-out"
              />

              <div className="bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100 absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 pointer-events-none">
                <h3 className="font-display group-hover:translate-y-0 text-2xl font-bold text-white transition-transform duration-300 ease-out translate-y-4">
                  {curator.name}
                </h3>
                <p className="text-primary group-hover:translate-y-0 font-sans text-xs font-medium tracking-widest uppercase transition-transform duration-300 ease-out translate-y-4">
                  {curator.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High Impact Banner */}
      <section className="w-full bg-gradient-to-b from-[#0e0e0f] via-surface-container-high to-[#0e0e0f] py-40 text-center ghost-border border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="container relative z-10 px-6 mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] font-display font-bold uppercase tracking-tighter text-white mb-8">
            We don't just <br />
            manage the stage. <br />
            <span className="text-primary-gradient">We define it.</span>
          </h2>
          <p className="tracking-[0.3em] text-sm uppercase font-bold text-on_surface_variant">
            Our mission is momentum.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
