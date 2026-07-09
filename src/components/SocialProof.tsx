import { TESTIMONIALS } from "@/data/products";

export default function SocialProof() {
  return (
    <section className="bg-dark text-[#ebdacb]">
      <div className="mx-auto max-w-[1080px] px-5 py-14 text-center md:px-6">
        <div className="text-[32px] tracking-[3px] text-gold md:text-[36px]">★★★★★</div>
        <div className="mb-1 mt-2 font-serif text-[24px] md:text-[26px]">
          4,9 de 5 — mais de 2.400 clientes
        </div>
        <p className="mb-8 font-serif text-[16px] italic text-[#b79fa9]">
          Depoimentos reais de quem já recebeu suas joias.
        </p>
        <div className="grid gap-5 text-left md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="border border-[#fbf3ea]/10 bg-[#fbf3ea]/5 px-5 py-5"
            >
              <div className="mb-2.5 text-[14px] tracking-[1px] text-gold">★★★★★</div>
              <p className="m-0 mb-3.5 font-serif text-[17px] leading-relaxed text-[#f0e2d4]">
                {t.text}
              </p>
              <div className="text-[12px] uppercase tracking-[0.12em] text-[#b79fa9]">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
