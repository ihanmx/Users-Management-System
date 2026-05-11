import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const t = useTranslations("Home");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden ds-rounded-3xl bg-linear-to-br from-cyan-500 to-cyan-700 p-10 sm:p-14 text-white ds-shadow-lg">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 inset-e-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 inset-s-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-4 text-base text-cyan-50/90">{t("ctaSubtitle")}</p>
          <Link
            href="/sign-in"
            className="group mt-8 inline-flex items-center gap-2 ds-rounded-xl ds-bg px-6 py-3 text-sm font-semibold ds-text-alt ds-shadow-md hover:opacity-95 transition-shadow"
          >
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
