/**
 * Central store configuration. Edit these values to customise the catalog —
 * no other file needs to change for number / currency / copy updates.
 */

// WhatsApp number in international format (only digits are used).
// Default is a Portugal placeholder — REPLACE with the real store number.
export const WHATSAPP_NUMBER = "351912345678";

// Store currency symbol shown next to prices.
export const CURRENCY: "€" | "R$" = "€";

// Number of interest-free installments. Set to 1 to hide installment labels.
export const INSTALLMENTS = 10;

export const SITE = {
  brand: "EN Store Prata",
  tagline: "Seu detalhe mais precioso · Prata 925",
  announcement: "Prata 925 legítima · Pedidos pelo WhatsApp",
  email: "contato@enstoreprata.pt",
  hours: "Seg. a Sex., 9h–18h",
  instagram: "https://instagram.com/",
  facebook: "#",
  tiktok: "#",
} as const;

export const NAV_LINKS = [
  { label: "Joias", href: "#catalogo" },
  { label: "Mais Vendidos", href: "#mais-vendidos" },
  { label: "Coleções", href: "#destaques" },
  { label: "Personalizados", href: "#especiais" },
  { label: "Contato", href: "#contato" },
] as const;
