import { WHATSAPP_NUMBER } from "@/data/site";

const BASE = "https://wa.me/";

function build(message: string): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `${BASE}${digits}?text=${encodeURIComponent(message)}`;
}

/** Link that opens WhatsApp asking about a specific product. */
export function productWhatsApp(productName: string): string {
  return build(`Olá! Tenho interesse na peça: ${productName}. Poderia me ajudar?`);
}

/** Link that opens WhatsApp asking about a category. */
export function categoryWhatsApp(categoryName: string): string {
  return build(`Olá! Gostaria de ver os modelos de ${categoryName}. Poderia me ajudar?`);
}

/** Generic "talk to us" link used by the header bag and floating button. */
export function genericWhatsApp(): string {
  return build("Olá! Gostaria de saber mais sobre as joias da EN Store Prata.");
}
