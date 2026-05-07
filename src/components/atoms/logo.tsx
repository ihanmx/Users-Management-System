import Link from "next/link";
import { Nunito } from "next/font/google";
import { useTranslations } from "next-intl";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Logo() {
  const t = useTranslations("Navbar");
  return (
    <Link
      href="/"
      className={`${nunito.className} text-2xl font-bold ds-text-alt select-none`}
    >
      {t("brand")}
    </Link>
  );
}
