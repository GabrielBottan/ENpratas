import { genericWhatsApp } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={genericWhatsApp()}
      target="_blank"
      rel="noopener"
      aria-label="Fale no WhatsApp"
      className="float-y fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_10px_26px_-8px_rgba(37,211,102,0.7)]"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
