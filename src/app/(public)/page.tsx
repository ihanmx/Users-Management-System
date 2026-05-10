import Hero from "@/components/landing/Hero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsStrip from "@/components/landing/StatsStrip";
import CtaSection from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsStrip />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
