import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface Props {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendDirection?: "up" | "down";
  accent?: "primary" | "secondary" | "violet" | "emerald";
  className?: string;
}

const ACCENTS: Record<NonNullable<Props["accent"]>, string> = {
  primary: "from-cyan-500/15 to-cyan-500/0 text-cyan-600 dark:text-cyan-400",
  secondary:
    "from-amber-500/15 to-amber-500/0 text-amber-600 dark:text-amber-400",
  violet:
    "from-violet-500/15 to-violet-500/0 text-violet-600 dark:text-violet-400",
  emerald:
    "from-emerald-500/15 to-emerald-500/0 text-emerald-600 dark:text-emerald-400",
};

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendDirection = "up",
  accent = "primary",
  className,
}: Props) {
  const accentClasses = ACCENTS[accent];

  return (
    <div
      className={cn(
        "relative overflow-hidden ds-rounded-2xl border border-zinc-200/80 dark:border-zinc-800 ds-bg p-5 ds-shadow-sm transition-shadow",
        className,
      )}
    >
      <div
        className={cn(
          "absolute -top-12 -inset-e-12 h-32 w-32 rounded-full bg-linear-to-br blur-2xl opacity-70",
          accentClasses,
        )}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide ds-text-secondary">
            {label}
          </p>
          <p className="mt-2 text-3xl font-semibold ds-text-primary">{value}</p>
          {trend && (
            <p
              className={cn(
                "mt-2 text-xs font-medium",
                trendDirection === "up"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400",
              )}
            >
              {trendDirection === "up" ? "▲" : "▼"} {trend}
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center ds-rounded-xl",
            accentClasses,
            "bg-linear-to-br",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
