export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="m-0 font-serif text-[19px] font-semibold uppercase tracking-[0.2em] text-ink md:text-[22px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-[520px] font-serif text-[17px] italic text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
