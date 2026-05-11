import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import SlideUp from "@/animations/slideUp";
import FadeIn from "@/animations/fadeIn";
export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 inset-s-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-linear-to-br from-cyan-400/30 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 inset-e-0 h-72 w-72 rounded-full bg-linear-to-tr from-amber-400/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 lg:pt-32 lg:pb-28 text-center">
        <span className="inline-flex items-center gap-2 ds-rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium ds-text-alt">
          <Sparkles className="h-3.5 w-3.5" />
          {t("heroEyebrow")}
        </span>
        <FadeIn>
          <h1 className="mt-6 text-4xl font-bold tracking-tight ds-text-primary sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
        </FadeIn>

        <SlideUp>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ds-text-secondary">
            {t("heroSubtitle")}
          </p>
        </SlideUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/sign-in"
            className="group inline-flex items-center gap-2 ds-rounded-xl bg-linear-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white ds-shadow-lg hover:opacity-95 transition-all"
          >
            {t("heroPrimary")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </Link>
          <Link
            href="/sign-in"
            className="ds-rounded-xl border border-zinc-300 dark:border-zinc-700 ds-bg px-6 py-3 text-sm font-semibold ds-text-primary hover:opacity-90 transition-colors"
          >
            {t("heroSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
