import Image from "next/image";
import { SITE } from "@/data/site";
import { genericWhatsApp } from "@/lib/whatsapp";

const INSTITUCIONAL = ["Sobre nós", "Nosso blog", "Perguntas frequentes"];
const DUVIDAS = ["Trocas e devoluções", "Garantia", "Formas de pagamento", "Rastrear pedido"];

function IconLink({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-[#e9d0da]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark text-[#c9b4a6]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-9 px-5 pb-8 pt-14 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:px-6">
        <div>
          <Image
            src="/images/logo.png"
            alt={SITE.brand}
            width={180}
            height={70}
            className="h-16 w-auto object-contain brightness-110"
          />
          <p className="my-4 max-w-[280px] font-serif text-[16px] italic leading-relaxed text-[#b79fa9]">
            Joias de prata 925 legítima. Seu detalhe mais precioso, feito para durar.
          </p>
          <div className="flex gap-3.5">
            <IconLink label="Instagram" href={SITE.instagram}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </IconLink>
            <IconLink label="Facebook" href={SITE.facebook}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </IconLink>
            <IconLink label="TikTok" href={SITE.tiktok}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 3c.3 2.2 1.8 3.9 4 4.2v3c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
              </svg>
            </IconLink>
          </div>
        </div>

        <div>
          <div className="mb-4 text-[12px] uppercase tracking-[0.16em] text-[#e9d0da]">Institucional</div>
          {INSTITUCIONAL.map((l) => (
            <a key={l} href="#" className="mb-2.5 block text-[14px] text-[#b79fa9] transition-colors hover:text-[#f0e2d4]">
              {l}
            </a>
          ))}
        </div>

        <div>
          <div className="mb-4 text-[12px] uppercase tracking-[0.16em] text-[#e9d0da]">Dúvidas</div>
          {DUVIDAS.map((l) => (
            <a key={l} href="#" className="mb-2.5 block text-[14px] text-[#b79fa9] transition-colors hover:text-[#f0e2d4]">
              {l}
            </a>
          ))}
        </div>

        <div>
          <div className="mb-4 text-[12px] uppercase tracking-[0.16em] text-[#e9d0da]">Atendimento</div>
          <p className="m-0 text-[14px] leading-7 text-[#b79fa9]">
            {SITE.hours}
            <br />
            {SITE.email}
            <br />
            <a href={genericWhatsApp()} target="_blank" rel="noopener" className="text-[#e9d0da]">
              Falar no WhatsApp
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-4 text-[12px] text-[#8f7a82] md:px-6">
          <span>© {new Date().getFullYear()} {SITE.brand}. Todos os direitos reservados.</span>
          <div className="flex items-center gap-2 tracking-[0.1em] text-[#b79fa9]">
            VISA · MASTERCARD · MB WAY · PAYPAL
          </div>
        </div>
      </div>
    </footer>
  );
}
