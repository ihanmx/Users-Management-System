import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "xl";
type Width = "auto" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface CardProps {
  children?: ReactNode;
  className?: string;
  size?: Size;
  width?: Width;
}

const SIZES: Record<Size, string> = {
  sm: "p-3 gap-2",
  md: "p-5 gap-4",
  lg: "p-6 gap-5",
  xl: "p-8 gap-6",
};

const WIDTHS: Record<Width, string> = {
  auto: "",
  sm: "w-full max-w-sm",
  md: "w-full max-w-md",
  lg: "w-full max-w-lg",
  xl: "w-full max-w-xl",
  "2xl": "w-full max-w-2xl",
  full: "w-full",
};

const Card = ({
  children,
  className,
  size = "md",
  width = "auto",
}: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col ds-rounded-2xl ds-bg ds-shadow-sm border border-zinc-200 dark:border-zinc-800",
        SIZES[size],
        WIDTHS[width],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
