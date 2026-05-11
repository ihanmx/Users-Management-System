import { useTranslations } from "next-intl";
import { UserCog, Search, Languages } from "lucide-react";
import FeatureCard from "@/components/molecules/FeatureCard";

export default function FeaturesSection() {
  const t = useTranslations("Home");

  const features = [
    {
      icon: UserCog,
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      icon: Search,
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      icon: Languages,
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight ds-text-primary sm:text-4xl">
          {t("featuresTitle")}
        </h2>
        <p className="mt-4 ds-text-secondary">{t("featuresSubtitle")}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
