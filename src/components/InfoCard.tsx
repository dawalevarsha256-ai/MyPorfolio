import { ArrowUpRight, Award, CalendarDays, Building2 } from "lucide-react";

type Props = {
  title: string;
  organization: string;
  date: string;
  description?: string;
  image?: string;
  href?: string;
  actionLabel?: string;
};

export default function InfoCard({ title, organization, date, description, image, href, actionLabel }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-surface">
          <img src={image} alt={`${title} visual`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" onError={(event) => { event.currentTarget.parentElement?.classList.add("hidden"); }} />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-accent">
          <Award size={19} />
        </div>
        <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-body">
          <span className="inline-flex items-center gap-1.5"><Building2 size={15} />{organization}</span>
          <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} />{date}</span>
        </div>
        {description && <p className="mt-4 text-sm leading-6 text-body">{description}</p>}
        {href && (
          <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-blue-800">
            {actionLabel || "View details"} <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
