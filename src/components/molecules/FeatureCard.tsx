import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="group relative ds-rounded-2xl border border-zinc-200 dark:border-zinc-800 ds-bg p-6 transition-all hover:-translate-y-1 ds-shadow-sm hover:ds-shadow-lg">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center ds-rounded-xl bg-linear-to-br from-cyan-500 to-cyan-600 text-white ds-shadow-md transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-semibold ds-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed ds-text-secondary">{description}</p>
    </div>
  );
}
