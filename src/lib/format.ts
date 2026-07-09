import { CURRENCY, INSTALLMENTS } from "@/data/site";

/** Formats a numeric price using the store currency, pt-style (comma decimals). */
export function formatPrice(value: number): string {
  const formatted = value.toFixed(2).replace(".", ",");
  return CURRENCY === "R$" ? `R$ ${formatted}` : `${formatted} ${CURRENCY}`;
}

/** "10x de 4,49 €" style installment label, or null when installments are off. */
export function installmentLabel(value: number): string | null {
  if (INSTALLMENTS <= 1) return null;
  return `${INSTALLMENTS}x de ${formatPrice(value / INSTALLMENTS)} sem juros`;
}
