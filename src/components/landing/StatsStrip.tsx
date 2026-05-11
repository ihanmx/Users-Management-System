import { useTranslations } from "next-intl";

export default function StatsStrip() {
  const t = useTranslations("Home");

  const stats = [
    { label: t("stat1"), value: "12K+" },
    { label: t("stat2"), value: "99.9%" },
    { label: t("stat3"), value: "120ms" },
    { label: t("stat4"), value: "20+" },
  ];

  return (
    <section className="border-y border-zinc-200 dark:border-zinc-800 ds-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-sm font-medium uppercase tracking-wider ds-text-secondary">
          {t("statsTitle")}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold ds-text-alt sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm ds-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
