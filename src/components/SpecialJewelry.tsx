import { ESPECIAIS } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { productWhatsApp } from "@/lib/whatsapp";
import ImagePlaceholder from "./ImagePlaceholder";

export default function SpecialJewelry() {
  return (
    <section id="especiais" className="mx-auto max-w-[1440px] px-5 pb-11 pt-14 md:px-6">
      <div className="mb-2 text-center font-script text-[40px] leading-[0.8] text-wine">
        personalize
      </div>
      <h2 className="m-0 text-center font-serif text-[30px] font-semibold text-ink md:text-[34px]">
        Joias Especiais
      </h2>
      <p className="mx-auto mb-8 mt-1.5 max-w-[520px] text-center font-serif text-[17px] italic text-muted md:text-[18px]">
        Nomes, iniciais e datas em prata 925 — uma peça só sua.
      </p>
      <div className="no-scrollbar flex gap-3.5 overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible">
        {ESPECIAIS.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[3/4] w-[200px] flex-none overflow-hidden bg-sand md:w-auto"
          >
            <ImagePlaceholder />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(44,25,34,.78), rgba(44,25,34,.05) 60%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-serif text-[18px] font-semibold leading-tight text-[#fbf3ea]">
                {item.name}
              </div>
              <div className="my-1 text-[14px] text-[#e9d0da]">
                {formatPrice(item.price)}
              </div>
              <a
                href={productWhatsApp(item.name)}
                target="_blank"
                rel="noopener"
                className="mt-1.5 inline-flex items-center gap-1.5 border border-[#fbf3ea]/55 px-3 py-2 text-[11px] uppercase tracking-[0.13em] text-[#fbf3ea] transition-colors hover:bg-[#fbf3ea]/15"
              >
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
