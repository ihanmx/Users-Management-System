import { cn } from "@/lib/cn";
interface Props {
  size?: number;
  color?: "black" | "disabled" | "primary" | "secondary" | "ghost" | "outline1";
  className?: string;
  IconComponent: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}
export default function Icon({
  IconComponent,
  color = "black",
  size,
  className,
}: Props) {
  const colors = {
    black: "ds-text-primary",
    disabled: "ds-text-disabled",
    primary: "ds-text-primary",
    secondary: "ds-text-secondary",
    ghost: "ds-text-ghost",
    outline1: "ds-text-outline1",
  };
  return <IconComponent size={size} className={cn(colors[color], className)} />;
}
