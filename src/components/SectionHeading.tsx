type Props = { kicker: string; title: string; description?: string };

export default function SectionHeading({ kicker, title, description }: Props) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">{kicker}</p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-body">{description}</p>}
    </div>
  );
}
