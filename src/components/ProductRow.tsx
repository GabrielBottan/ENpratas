"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CategoryTab, HighlightTab, Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  id?: string;
  title: string;
  products?: Product[];
  tabs?: CategoryTab[];
  groups?: Record<HighlightTab, Product[]>;
}

export default function ProductRow({ id, title, products, tabs, groups }: Props) {
  const [tab, setTab] = useState<HighlightTab>(tabs?.[0]?.key ?? "aneis");
  const list = groups ? groups[tab] : products ?? [];

  const scroller = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    measure();
    const onScroll = () => setPage(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [measure, list]);

  useEffect(() => {
    scroller.current?.scrollTo({ left: 0 });
    setPage(0);
    const t = setTimeout(measure, 60);
    return () => clearTimeout(t);
  }, [tab, measure]);

  const pageScroll = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };
  const goTo = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id={id} className="mx-auto max-w-[1440px] px-4 py-9 md:px-8">
      <h2 className="m-0 text-center font-serif text-[19px] font-semibold uppercase tracking-[0.2em] text-ink md:text-[22px]">
        {title}
      </h2>

      {tabs ? (
        <div className="mb-6 mt-3 flex justify-center gap-7">
          {tabs.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className="border-b-[1.5px] pb-1 text-[12px] uppercase tracking-[0.16em] transition-colors"
                style={{
                  color: active ? "#8a2149" : "#9c8b7e",
                  borderColor: active ? "#8a2149" : "transparent",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mb-6 mt-2" />
      )}

      <div className="relative">
        {pages > 1 ? (
          <>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => pageScroll(-1)}
              className="absolute -left-1 top-[34%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[18px] leading-none text-ink shadow-[0_4px_14px_-6px_rgba(60,30,40,0.5)] transition hover:bg-white md:-left-3"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              aria-label="Proximo"
              onClick={() => pageScroll(1)}
              className="absolute -right-1 top-[34%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[18px] leading-none text-ink shadow-[0_4px_14px_-6px_rgba(60,30,40,0.5)] transition hover:bg-white md:-right-3"
            >
              &rsaquo;
            </button>
          </>
        ) : null}

        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth"
        >
          {list.map((product) => (
            <div
              key={product.id}
              className="w-[calc(50%-6px)] flex-none snap-start md:w-[calc(25%-9px)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {pages > 1 ? (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Pagina ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-[3px] rounded-full transition-all"
              style={{ width: page === i ? 30 : 18, background: page === i ? "#6a5341" : "#d9cbc0" }}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
