"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

let isFirstLoad = true;

export function Preloader() {
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isFirstLoad) {
      gsap.set(overlayRef.current, { display: "none" });
      return;
    }

    let ctx;

    const animateOut = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        gsap.set(overlayRef.current, { y: "0%", display: "flex" });
        gsap.set(textRef.current, { opacity: 1, y: 0 });

        tl.to(textRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: "power3.inOut",
        }).to(overlayRef.current, {
          y: "-100%",
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(overlayRef.current, { display: "none" });
            isFirstLoad = false;
          },
        });
      }, overlayRef);
    };

    const waitForAssetsAndAnimate = async () => {
      if (
        typeof document !== "undefined" &&
        document.readyState !== "complete"
      ) {
        await new Promise((resolve) =>
          window.addEventListener("load", resolve, { once: true }),
        );
      }

      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      });

      const videoPromises = videos.map((vid) => {
        if (vid.readyState >= 3) return Promise.resolve();
        return new Promise((resolve) => {
          vid.addEventListener("canplay", resolve, { once: true });
          vid.addEventListener("error", resolve, { once: true });
        });
      });

      const timeoutPromise = new Promise((resolve) =>
        setTimeout(resolve, 5000),
      );
      await Promise.race([
        Promise.all([...imagePromises, ...videoPromises]),
        timeoutPromise,
      ]);

      setTimeout(() => {
        animateOut();
      }, 500);
    };

    waitForAssetsAndAnimate();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 bg-[#0e0e0f] flex flex-col items-center justify-center">
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center gap-6">
        <Image
          src="/logo_viakrit.webp"
          height={100}
          width={106}
          alt="Viakrit Logo"
          className="object-contain"
          priority
        />
        <h1 className="font-display md:text-5xl whitespace-nowrap object-contain text-3xl font-bold tracking-tighter text-center text-white uppercase">
          VIAKRIT EVENTS
        </h1>
      </div>
    </div>
  );
}
