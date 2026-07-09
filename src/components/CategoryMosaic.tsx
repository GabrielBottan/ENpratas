import Image from "next/image";
import { MOSAIC } from "@/data/products";
import { categoryWhatsApp } from "@/lib/whatsapp";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CategoryMosaic() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-9 md:px-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {MOSAIC.map((item) => (
          <a
            key={item.label}
            href={categoryWhatsApp(item.label)}
            target="_blank"
            rel="noopener"
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                  <ImagePlaceholder />
                </div>
              )}
            </div>
            <div className="mt-3 text-center text-[12px] uppercase tracking-[0.16em] text-ink">
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
