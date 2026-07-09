import { SITE } from "@/data/site";

export default function AnnouncementBar() {
  return (
    <div className="bg-dark px-4 py-2.5 text-center text-[11px] font-light uppercase tracking-[0.16em] text-[#e9d9c8]">
      {SITE.announcement}
    </div>
  );
}
