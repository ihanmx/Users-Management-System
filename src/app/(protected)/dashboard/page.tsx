import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentUsers from "@/components/dashboard/RecentUsers";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 space-y-6">
      <WelcomeBanner />
      <StatsGrid />
      <RecentUsers />
    </div>
  );
}
