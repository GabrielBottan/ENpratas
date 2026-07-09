"use client";

import Image from "next/image";
import { useState } from "react";
import { DEFAULT_PRODUCT_IMAGE, DEFAULT_SWATCHES, type Product } from "@/data/products";
import { formatPrice, installmentLabel } from "@/lib/format";
import { productWhatsApp } from "@/lib/whatsapp";
import { HeartIcon } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
  const [fav, setFav] = useState(false);
  const parcel = installmentLabel(product.price);
  const image = product.image ?? DEFAULT_PRODUCT_IMAGE;

  return (
    <div className="group flex h-full flex-col bg-white">
      <div className="relative aspect-square w-full overflow-hidden bg-panel">
        <Image
          src={image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <button
          type="button"
          aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-pressed={fav}
          onClick={() => setFav((v) => !v)}
          className="absolute left-3 top-3 z-[2]"
        >
          <HeartIcon
            className="h-[18px] w-[18px] stroke-[1.5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform hover:scale-110"
            style={{ fill: fav ? "#8a2149" : "rgba(255,255,255,0.4)", stroke: fav ? "#8a2149" : "#ffffff" }}
          />
        </button>
        {product.badge ? (
          <span className="absolute right-3 top-3 z-[2] bg-wine px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-3 pt-3">
        <div className="mb-2 flex gap-1.5">
          {DEFAULT_SWATCHES.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full border border-black/10"
              style={{ background: c }}
            />
          ))}
        </div>

        <h3 className="m-0 line-clamp-2 min-h-[2.6em] text-[11px] font-normal uppercase leading-[1.3] tracking-[0.03em] text-[#4a3840] md:text-[11.5px]">
          {product.name}
        </h3>

        <div className="mt-1 flex min-h-[16px] items-center gap-1.5 text-[11px]">
          {product.ratingCount ? (
            <>
              <span className="tracking-[1px] text-gold">{"★".repeat(product.rating ?? 5)}</span>
              <span className="text-[#a99b8d]">({product.ratingCount})</span>
            </>
          ) : null}
        </div>

        <div className="mt-auto flex flex-col gap-0.5 pt-2">
          <div className="min-h-[15px] leading-none">
            {product.oldPrice ? (
              <span className="text-[11px] text-[#b6a896] line-through">
                {formatPrice(product.oldPrice)}
              </span>
            ) : product.from ? (
              <span className="text-[11px] text-muted">a partir de</span>
            ) : null}
          </div>
          <span className="text-[13px] font-semibold text-ink">{formatPrice(product.price)}</span>
          <span className="min-h-[16px] text-[11.5px] text-[#5b4a44]">{parcel}</span>
        </div>

        <a
          href={productWhatsApp(product.name)}
          target="_blank"
          rel="noopener"
          className="mt-3 flex items-center justify-center bg-[#6a5341] px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-wine"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
