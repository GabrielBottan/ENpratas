import { GemIcon } from "./icons";

/**
 * Neutral placeholder used in place of product / editorial photography.
 * The store is launching without stock imagery — these soft panels keep the
 * layout elegant until real photos are dropped in.
 */
export default function ImagePlaceholder({
  label,
  rounded = false,
  className = "",
}: {
  label?: string;
  rounded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-panel ${
        rounded ? "rounded-full" : ""
      } ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 30% 20%, #fdf7f4 0%, #f5ebe4 52%, #efe1d8 100%)",
      }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-2 px-3 text-center">
        <GemIcon className="h-7 w-7 text-wine/30" />
        {label ? (
          <span className="max-w-[80%] font-serif text-[12px] italic leading-tight text-muted/70">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
