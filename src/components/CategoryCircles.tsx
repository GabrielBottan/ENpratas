import Image from "next/image";
import { CATEGORIES } from "@/data/products";
import { categoryWhatsApp } from "@/lib/whatsapp";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeading from "./SectionHeading";

export default function CategoryCircles() {
  return (
    <section id="catalogo" className="mx-auto max-w-[1440px] px-5 pb-5 pt-14 md:px-6">
      <SectionHeading title="Compre por categoria" />
      <div className="no-scrollbar mt-8 flex justify-start gap-7 overflow-x-auto px-1 md:justify-between md:gap-4">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.name}
            href={categoryWhatsApp(cat.name)}
            target="_blank"
            rel="noopener"
            className="group flex w-[92px] flex-none flex-col items-center gap-3 md:w-28"
          >
            <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border border-sand transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_-18px_rgba(90,30,55,0.5)] md:h-[104px] md:w-[104px]">
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="104px"
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder rounded />
              )}
            </div>
            <span className="text-center text-[11px] uppercase tracking-[0.14em] text-[#4a3840] md:text-[12px]">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
