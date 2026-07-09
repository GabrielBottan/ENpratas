import AnnouncementBar from "@/components/AnnouncementBar";
import Benefits from "@/components/Benefits";
import CategoryCircles from "@/components/CategoryCircles";
import CategoryMosaic from "@/components/CategoryMosaic";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ProductRow from "@/components/ProductRow";
import Reveal from "@/components/Reveal";
import SocialProof from "@/components/SocialProof";
import SpecialJewelry from "@/components/SpecialJewelry";
import {
  HIGHLIGHTS,
  HIGHLIGHT_TABS,
  LANCAMENTOS,
  MAIS_VENDIDOS,
} from "@/data/products";

export default function Home() {
  return (
    <main id="top">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Benefits />

      <Reveal>
        <CategoryCircles />
      </Reveal>

      <Reveal>
        <ProductRow id="destaques" title="Destaques" tabs={HIGHLIGHT_TABS} groups={HIGHLIGHTS} />
      </Reveal>

      <Reveal>
        <CategoryMosaic />
      </Reveal>

      <Reveal>
        <ProductRow id="lancamentos" title="Lançamentos" products={LANCAMENTOS} />
      </Reveal>

      <section id="mais-vendidos" className="bg-panel py-2">
        <Reveal>
          <ProductRow title="Best-Sellers" products={MAIS_VENDIDOS} />
        </Reveal>
      </section>

      <Reveal>
        <SpecialJewelry />
      </Reveal>

      <SocialProof />
      <Newsletter />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
