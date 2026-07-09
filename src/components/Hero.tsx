"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Self-contained hero artwork — separate crops for desktop and mobile. */
const DESKTOP = ["/images/hero.png", "/images/hero-2.png"];
const MOBILE = ["/images/hero-m01.png", "/images/hero-m02.png"];
const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const count = DESKTOP.length;

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count]);

  const go = (dir: number) => setActive((i) => (i + dir + count) % count);

  return (
    <section className="relative -mt-[68px] w-full bg-sand md:-mt-[82px]">
      {/* Mobile artwork */}
      <div className="relative aspect-[940/1494] w-full overflow-hidden md:hidden">
        {MOBILE.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: active === index ? 1 : 0 }}
          >
            <Image src={src} alt="EN Store Prata" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Desktop artwork */}
      <div className="relative hidden aspect-[1920/800] w-full overflow-hidden md:block">
        {DESKTOP.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: active === index ? 1 : 0 }}
          >
            <Image src={src} alt="EN Store Prata" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Controls (overlay) */}
      <button
        type="button"
        aria-label="Banner anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-[20px] leading-none text-ink transition hover:bg-white/85 md:left-6"
      >
        &lsaquo;
      </button>
      <button
        type="button"
        aria-label="Proximo banner"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-[20px] leading-none text-ink transition hover:bg-white/85 md:right-6"
      >
        &rsaquo;
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {DESKTOP.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Ir para o banner ${index + 1}`}
            onClick={() => setActive(index)}
            className="h-1.5 rounded-full transition-all"
            style={{ width: active === index ? 26 : 7, background: active === index ? "#3a2b2e" : "rgba(58,43,46,.4)" }}
          />
        ))}
      </div>
    </section>
  );
}
