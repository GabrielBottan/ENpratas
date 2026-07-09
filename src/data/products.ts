export type ProductBadge = "Lançamento" | "Personalizado" | "Oferta";

/** Default product photo used for every product until individual photos exist. */
export const DEFAULT_PRODUCT_IMAGE = "/images/foto-01.jpg";

/** Decorative finish swatches shown on cards (metal-tone dots), like the reference. */
export const DEFAULT_SWATCHES = ["#c9cccd", "#e3caa5", "#e6b7bd"];

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: ProductBadge;
  rating?: number;
  ratingCount?: number;
  image?: string;
  /** When true, price is shown as "a partir de …" (personalisable pieces). */
  from?: boolean;
}

export type HighlightTab = "aneis" | "colares" | "brincos";

export interface CategoryTab {
  key: HighlightTab;
  label: string;
}

export const HIGHLIGHT_TABS: CategoryTab[] = [
  { key: "aneis", label: "Anéis" },
  { key: "colares", label: "Colares" },
  { key: "brincos", label: "Brincos" },
];

export const HIGHLIGHTS: Record<HighlightTab, Product[]> = {
  aneis: [
    { id: "a1", name: "Anel Signature Duo Letras Cravejado", price: 129.99, from: true, badge: "Lançamento" },
    { id: "a2", name: "Anel de Prata Cushion Taylor", price: 43.99, from: true },
    { id: "a3", name: "Anel Aparador Selena Aliança Cravejada 3mm", price: 41.99, oldPrice: 59.9 },
    { id: "a4", name: "Anel de Prata Solitário Amor II", price: 16.99, rating: 5, ratingCount: 61 },
    { id: "a5", name: "Anel Solitário Oval Hailey", price: 19.99, rating: 5, ratingCount: 42 },
    { id: "a6", name: "Anel Aparador Navete Cravejado", price: 32.99, from: true },
    { id: "a7", name: "Anel Meia Aliança Zircônia", price: 27.99, oldPrice: 34.9 },
    { id: "a8", name: "Anel Nome Personalizado", price: 59.99, from: true, badge: "Personalizado" },
  ],
  colares: [
    { id: "c1", name: "Colar de Prata Nome Signature Icon Cravejado", price: 118.99, from: true, badge: "Personalizado" },
    { id: "c2", name: "Colar Ponto de Luz Zircônia", price: 22.99, from: true },
    { id: "c3", name: "Colar Choker Riviera 2 Garras", price: 129.99, oldPrice: 159.9 },
    { id: "c4", name: "Colar Coração Duplo Cravejado", price: 42.99, rating: 5, ratingCount: 34 },
    { id: "c5", name: "Colar Gargantilha Elos", price: 47.99, from: true },
    { id: "c6", name: "Colar Medalha Personalizada 2 Fotos", price: 122.99, from: true, badge: "Personalizado" },
    { id: "c7", name: "Colar Pingente Estrela", price: 34.99 },
    { id: "c8", name: "Colar Riviera Cravejado Completo", price: 149.99, oldPrice: 189.9 },
  ],
  brincos: [
    { id: "b1", name: "Kit Brinco Trio de Prata Argolas Cravejadas", price: 32.99, from: true, badge: "Lançamento" },
    { id: "b2", name: "Brinco Ear Cuff Estelar", price: 24.99 },
    { id: "b3", name: "Brinco Gota Solitário", price: 29.99, oldPrice: 39.9 },
    { id: "b4", name: "Brinco Argola Cravejada", price: 36.99, rating: 5, ratingCount: 88 },
    { id: "b5", name: "Brinco Ponto de Luz Zircônia", price: 22.99, rating: 5, ratingCount: 142 },
    { id: "b6", name: "Brinco Flor Moissanite", price: 45.99, from: true },
    { id: "b7", name: "Brinco Argola Média Lisa", price: 27.99 },
    { id: "b8", name: "Brinco Cobra Zircônias", price: 39.99, badge: "Lançamento" },
  ],
};

export const LANCAMENTOS: Product[] = [
  { id: "l1", name: "Colar de Prata Nome Signature Icon Cravejado Personalizado", price: 118.99, from: true, badge: "Lançamento" },
  { id: "l2", name: "Anel de Prata Signature Duo Letras Cravejado", price: 129.99, from: true, badge: "Lançamento" },
  { id: "l3", name: "Colar de Prata Nome Essence Cravejado Personalizado", price: 109.99, from: true, badge: "Lançamento" },
  { id: "l4", name: "Piercing Fake de Prata Moissanite 1.52ct", price: 69.99, oldPrice: 84.9, badge: "Oferta" },
  { id: "l5", name: "Pulseira Riviera 4 Garras", price: 69.99, badge: "Lançamento" },
  { id: "l6", name: "Conjunto Ponto de Luz", price: 84.99, from: true, badge: "Lançamento" },
  { id: "l7", name: "Brinco Ear Cuff Estelar", price: 31.99, oldPrice: 42.9, badge: "Oferta" },
  { id: "l8", name: "Colar Choker Nome Personalizado", price: 99.99, from: true, badge: "Lançamento" },
];

export const MAIS_VENDIDOS: Product[] = [
  { id: "v1", name: "Kit Brinco Trio de Prata Argolas Cravejadas", price: 32.99, rating: 5, ratingCount: 842 },
  { id: "v2", name: "Pulseira Fio Vermelho com Ponto de Luz", price: 19.99, rating: 5, ratingCount: 1210 },
  { id: "v3", name: "Anel de Prata Solitário Oval Hailey", price: 19.99, rating: 5, ratingCount: 376 },
  { id: "v4", name: "Colar de Prata Medalha Personalizada com 2 Fotos", price: 122.99, from: true, rating: 5, ratingCount: 519, badge: "Personalizado" },
  { id: "v5", name: "Tornozeleira Elos Finos", price: 27.99, rating: 4, ratingCount: 288 },
  { id: "v6", name: "Colar Ponto de Luz Coração", price: 24.99, rating: 5, ratingCount: 604 },
  { id: "v7", name: "Brinco Argola Cravejada", price: 36.99, rating: 5, ratingCount: 733 },
  { id: "v8", name: "Anel Aparador Selena Aliança 3mm", price: 41.99, rating: 5, ratingCount: 210 },
];

export interface Category {
  name: string;
  image?: string;
}

export const CATEGORIES: Category[] = [
  { name: "Colares", image: "/images/colarteste.jpg" },
  { name: "Anéis", image: "/images/anel.jpg" },
  { name: "Brincos", image: "/images/brinco.jpg" },
  { name: "Pulseiras", image: "/images/pulseira.jpg" },
  { name: "Conjuntos", image: "/images/conjunto.jpg" },
  { name: "Tornozeleiras", image: "/images/tornozeleira.jpg" },
];

export interface MosaicItem {
  label: string;
}

export const MOSAIC: MosaicItem[] = [
  { label: "Anéis" },
  { label: "Colares" },
  { label: "Mais Vendidos" },
  { label: "Brincos" },
];

export interface SpecialItem {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export const ESPECIAIS: SpecialItem[] = [
  { id: "e1", name: "Colar de Prata Choker Riviera 3 Garras Degradê", price: 59.9 },
  { id: "e2", name: "Colar de Prata Ponto de Luz Coração Moissanite", price: 54.9 },
  { id: "e3", name: "Pulseira de Prata Riviera 4 Garras", price: 66.9 },
  { id: "e4", name: "Argola de Prata Cravejada Moissanite", price: 48.9 },
  { id: "e5", name: "Anel de Prata Mindinho Pinky Ring", price: 26.9 },
];

export interface Testimonial {
  text: string;
  name: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { text: "A peça chegou linda e bem embalada. A prata é de verdade, super brilhante. Amei!", name: "Marta S." },
  { text: "Fiz o pedido pelo WhatsApp e o atendimento foi impecável. Recomendo demais.", name: "Inês C." },
  { text: "Comprei o colar com o nome da minha filha. Ficou perfeito, virou presente favorito.", name: "Rita M." },
];
