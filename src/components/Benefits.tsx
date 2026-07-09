import type { ReactNode } from "react";

interface Benefit {
  title: string;
  sub: string;
  icon: ReactNode;
}

const BENEFITS: Benefit[] = [
  { title: "Prata 925 legítima", sub: "Peças em prata de lei", icon: <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" /> },
  {
    title: "Parcelamento facilitado",
    sub: "Em até 10x sem juros",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  { title: "Atendimento no WhatsApp", sub: "Tire dúvidas e faça o pedido", icon: <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /> },
  {
    title: "Envio para todo o país",
    sub: "Entrega com cuidado",
    icon: (
      <>
        <rect x="1" y="6" width="14" height="11" rx="1" />
        <path d="M15 9h4l3 3v5h-7" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-6 sm:grid sm:grid-cols-2 sm:gap-y-6 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-line/70">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex w-[230px] items-center gap-3 px-4 sm:w-auto sm:justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.3}
              className="h-8 w-8 flex-none text-wine"
              aria-hidden
            >
              {b.icon}
            </svg>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.05em] text-ink">{b.title}</div>
              <div className="text-[12px] text-muted">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
