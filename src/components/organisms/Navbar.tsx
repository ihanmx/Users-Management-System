import { Users } from "@/assets/icons/icons";
import Icon from "../atoms/Icon";
import Logo from "../atoms/logo";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-3 px-6 py-4 border-b">
      <Icon IconComponent={Users} size={32} color="primary" />
      <Logo />
    </nav>
  );
}
