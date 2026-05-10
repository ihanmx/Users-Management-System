import { Users } from "@/assets/icons/icons";
import Icon from "../atoms/Icon";
import Logo from "../atoms/logo";

import { ThemeToggle } from "../atoms/ThemeButton";
import Link from "next/dist/client/link";

interface Props {
  routes?: { id: number; key: string; path: string }[];
  actions?: React.ReactNode;
}
export default function Navbar({ routes, actions }: Props) {
  return (
    <nav className="flex items-center gap-3 px-6 py-4 border-b">
      <Icon IconComponent={Users} size={32} color="primary" />
      <Logo />
      <div className="ml-auto flex items-center gap-4">
        <ThemeToggle />
        {routes?.map((route) => (
          <Link
            key={route.id}
            href={route.path}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {route.key}
          </Link>
        ))}
        {actions}
      </div>
    </nav>
  );
}
