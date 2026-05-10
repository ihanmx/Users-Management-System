"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import useGetUsers from "@/modules/users/hooks/useGetUsers";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function RecentUsers() {
  const tDash = useTranslations("Dashboard");
  const tCommon = useTranslations("Common");
  const { data, isPending } = useGetUsers();

  const recent = (data ?? []).slice(0, 5);

  return (
    <div className="ds-rounded-2xl border border-zinc-200 dark:border-zinc-800 ds-bg ds-shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 p-5">
        <h2 className="text-base font-semibold ds-text-primary">
          {tDash("recentUsers")}
        </h2>
        <Link
          href="/dashboard/users"
          className="text-xs font-semibold ds-text-alt hover:underline"
        >
          {tDash("viewAll")} →
        </Link>
      </div>

      {isPending ? (
        <p className="p-5 text-sm ds-text-secondary">{tCommon("loading")}</p>
      ) : recent.length === 0 ? (
        <p className="p-5 text-sm ds-text-secondary">{tCommon("noUsers")}</p>
      ) : (
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {recent.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-cyan-700 text-sm font-semibold text-white">
                {getInitials(user.name)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium ds-text-primary">
                  {user.name}
                </p>
                <p className="truncate text-xs ds-text-secondary">
                  {user.email}
                </p>
              </div>
              <Link
                href={`/dashboard/users/${user.id}`}
                className="text-xs font-medium ds-text-alt hover:underline"
              >
                →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
