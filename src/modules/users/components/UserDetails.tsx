"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Mail, Hash, Pencil, Trash2 } from "lucide-react";
import Card from "@/components/atoms/Card";
import useGetUser from "../hooks/useGetUser";
import useDeleteUser from "../hooks/useDeleteUser";
import { confirmDelete } from "@/lib/swal";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const UserDetails = () => {
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);
  const router = useRouter();

  const tUsers = useTranslations("Users");
  const tCommon = useTranslations("Common");

  const { data: user, isPending, isError, error } = useGetUser(userId);
  const { mutate: deleteUser } = useDeleteUser();

  const handleDelete = async () => {
    const ok = await confirmDelete({
      title: tUsers("deleteConfirmTitle"),
      text: tUsers("deleteConfirmText"),
      confirmText: tCommon("delete"),
      cancelText: tCommon("cancel"),
    });
    if (ok) {
      deleteUser(userId, {
        onSuccess: () => router.push("/dashboard/users"),
      });
    }
  };

  if (isPending)
    return <p className="p-8 ds-text-secondary">{tCommon("loading")}</p>;
  if (isError) return <p className="p-8 text-red-600">{error.message}</p>;
  if (!user) return null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 space-y-6">
      <Link
        href="/dashboard/users"
        className="inline-flex items-center gap-2 text-sm font-medium ds-text-secondary hover:ds-text-alt transition-colors"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        {tCommon("back")}
      </Link>

      <Card size="xl" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -inset-e-24 h-64 w-64 rounded-full bg-linear-to-br from-cyan-400/30 to-transparent blur-3xl" />

        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center ds-rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-700 text-2xl font-bold text-white ds-shadow-lg">
            {getInitials(user.name)}
          </div>

          <div className="flex-1 text-center sm:text-start">
            <span className="inline-flex items-center ds-rounded-3xl bg-cyan-50 px-2.5 py-0.5 text-xs font-medium ds-text-alt dark:bg-cyan-500/10">
              {tUsers("memberLabel")}
            </span>
            <h1 className="mt-2 text-3xl font-bold ds-text-primary">
              {user.name}
            </h1>
            <p className="mt-1 text-sm ds-text-secondary">{user.email}</p>
          </div>
        </div>
      </Card>

      <Card size="lg">
        <h2 className="text-sm font-semibold uppercase tracking-wider ds-text-secondary">
          {tUsers("details")}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InfoRow
            icon={<Hash className="h-4 w-4" />}
            label={tCommon("id")}
            value={String(user.id)}
          />
          <InfoRow
            icon={<Mail className="h-4 w-4" />}
            label={tCommon("email")}
            value={user.email}
          />
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <Link
          href={`/dashboard/users/${user.id}/edit`}
          className="inline-flex items-center gap-2 ds-rounded-xl border border-zinc-300 dark:border-zinc-700 ds-bg px-5 py-2.5 text-sm font-semibold ds-text-primary hover:opacity-90 transition-colors"
        >
          <Pencil className="h-4 w-4" />
          {tCommon("edit")}
        </Link>
        <button
          onClick={handleDelete}
          className="inline-flex items-center gap-2 ds-rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white ds-shadow-md hover:bg-red-700 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          {tCommon("delete")}
        </button>
      </div>
    </div>
  );
};

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 ds-rounded-xl border border-zinc-200 dark:border-zinc-800 ds-bg-alt p-4">
      <div className="flex h-9 w-9 items-center justify-center ds-rounded-lg ds-bg ds-text-alt ds-shadow-sm">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide ds-text-secondary">
          {label}
        </p>
        <p className="truncate text-sm font-semibold ds-text-primary">
          {value}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
