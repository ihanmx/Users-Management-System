import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  variant?: "success" | "warning" | "neutral" | "danger";
  className?: string;
}

const VARIANTS = {
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  neutral: "bg-zinc-100 text-zinc-700",
  danger: "bg-red-100 text-red-700",
};

export default function Badge({
  children,
  variant = "neutral",
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
