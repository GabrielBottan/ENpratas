import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Sacramento } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.brand} — Joias de Prata 925`,
  description:
    "Joias de prata 925 legítima. Anéis, colares, brincos e peças personalizadas. Faça seu pedido pelo WhatsApp.",
  openGraph: {
    title: `${SITE.brand} — Joias de Prata 925`,
    description: "Joias de prata 925 que carregam a sua identidade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body
        className={`${cormorant.variable} ${jost.variable} ${sacramento.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
