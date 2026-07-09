"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/site";
import { genericWhatsApp } from "@/lib/whatsapp";
import { BagIcon, HeartIcon, SearchIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid once scrolled (or when the mobile menu is open); transparent over the hero at the top.
  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-cream/90 text-[#4a3840] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3 md:px-8">
        <div className="flex items-center gap-7">
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>

          <a href="#top" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={SITE.brand}
              width={160}
              height={56}
              priority
              className={`h-11 w-auto object-contain transition md:h-14 ${
                solid ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
              }`}
            />
          </a>

          <nav className="hidden items-center gap-6 text-[12px] uppercase tracking-[0.14em] lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-wine">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 transition-colors md:flex ${
              solid ? "border-line-strong bg-white text-ink" : "border-white/60 bg-white/10 text-white"
            }`}
          >
            <SearchIcon className="h-4 w-4 opacity-80" />
            <input
              placeholder="O que você procura?"
              aria-label="Buscar"
              className={`w-[150px] bg-transparent text-[13px] outline-none lg:w-[190px] ${
                solid ? "text-ink placeholder:text-[#7a6a62]" : "text-white placeholder:text-white/70"
              }`}
            />
          </div>
          <button type="button" aria-label="Buscar" className="md:hidden">
            <SearchIcon className="h-[19px] w-[19px]" />
          </button>
          <button type="button" aria-label="Favoritos" className="hidden sm:flex">
            <HeartIcon className="h-[19px] w-[19px] fill-none stroke-current stroke-[1.6]" />
          </button>
          <a href={genericWhatsApp()} target="_blank" rel="noopener" aria-label="Sacola / WhatsApp">
            <BagIcon className="h-[19px] w-[19px]" />
          </a>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-cream px-5 py-3 text-[#4a3840] lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[13px] uppercase tracking-[0.14em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
