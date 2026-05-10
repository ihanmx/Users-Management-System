import { Users } from "@/assets/icons/icons";
import Icon from "../atoms/Icon";
import Logo from "../atoms/logo";

import { ThemeToggle } from "../atoms/ThemeButton";

interface Props {
  routes?: { id: number; key: string; path: string }[];
}
export default function Navbar({ routes }: Props) {
  return (
    <nav className="flex items-center gap-3 px-6 py-4 border-b">
      <Icon IconComponent={Users} size={32} color="primary" />
      <Logo />
      <div className="ml-auto">
        <ThemeToggle />
        {routes?.map((route) => (
          <a
            key={route.id}
            href={route.path}
            className="ml-4 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {route.key}
          </a>
        ))}
      </div>
    </nav>
  );
}
