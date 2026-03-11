import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  showCTA?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  showCTA = false,
}: ServiceCardProps) {
  return (
    <article className="card p-6 flex flex-col gap-4 group border border-transparent hover:border-gold/30 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-200">
        <Icon
          size={22}
          className="text-navy group-hover:text-gold transition-colors duration-200"
          aria-hidden="true"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-heading text-lg font-semibold text-navy mb-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>
      {showCTA && (
        <Link
          href="/appointments"
          className="text-gold text-sm font-semibold font-body hover:text-navy transition-colors duration-200 flex items-center gap-1 group/link"
        >
          Book for this service
          <span className="group-hover/link:translate-x-1 transition-transform duration-200 inline-block">
            →
          </span>
        </Link>
      )}
    </article>
  );
}
