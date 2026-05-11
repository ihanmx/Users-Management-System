import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function WelcomeBanner() {
  const t = useTranslations("Dashboard");

  return (
    <div className="relative overflow-hidden ds-rounded-3xl bg-linear-to-br from-cyan-500 via-cyan-600 to-cyan-700 p-8 text-white ds-shadow-lg">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 inset-e-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 inset-s-1/3 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{t("welcome")} 👋</h1>
          <p className="mt-2 max-w-md text-sm text-cyan-50/90">
            {t("welcomeSubtitle")}
          </p>
        </div>

        <Link
          href="/dashboard/users"
          className="group inline-flex items-center justify-center gap-2 ds-rounded-xl ds-bg px-5 py-3 text-sm font-semibold ds-text-alt ds-shadow-md hover:opacity-95 transition-shadow"
        >
          {t("manageUsers")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
