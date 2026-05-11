"use client";

import { useTranslations } from "next-intl";
import { Users, UserPlus, UserCheck, ShieldCheck } from "lucide-react";
import StatCard from "@/components/molecules/StatCard";
import useGetUsers from "@/modules/users/hooks/useGetUsers";

export default function StatsGrid() {
  const t = useTranslations("Dashboard");
  const { data } = useGetUsers();

  const totalUsers = data?.length ?? 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label={t("totalUsers")}
        value={totalUsers}
        icon={Users}
        accent="primary"
        trend="+12% this week"
      />
      <StatCard
        label={t("newThisWeek")}
        value="8"
        icon={UserPlus}
        accent="emerald"
        trend="+3 vs last week"
      />
      <StatCard
        label={t("activeUsers")}
        value="42"
        icon={UserCheck}
        accent="violet"
        trend="+5 today"
      />
      <StatCard
        label={t("admins")}
        value="3"
        icon={ShieldCheck}
        accent="secondary"
      />
    </div>
  );
}
