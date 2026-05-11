"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import type { User } from "@/types/user";

interface Props {
  user: User;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function UserRow({ user, onView, onEdit, onDelete }: Props) {
  const t = useTranslations("Common");

  return (
    <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-cyan-700 text-sm font-semibold text-white ds-shadow-sm">
            {getInitials(user.name)}
          </div>
          <div className="min-w-0">
            <p className="font-medium ds-text-primary truncate">{user.name}</p>
            <p className="text-xs ds-text-secondary truncate sm:hidden">
              {user.email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 ds-text-secondary hidden sm:table-cell">
        {user.email}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-1">
          <button
            onClick={() => onView?.(user.id)}
            aria-label={t("view")}
            title={t("view")}
            className="inline-flex h-8 w-8 items-center justify-center ds-rounded-lg ds-text-secondary hover:bg-cyan-50 hover:ds-text-alt dark:hover:bg-cyan-500/10 transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEdit?.(user.id)}
            aria-label={t("edit")}
            title={t("edit")}
            className="inline-flex h-8 w-8 items-center justify-center ds-rounded-lg ds-text-secondary hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400 transition-colors"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete?.(user.id)}
            aria-label={t("delete")}
            title={t("delete")}
            className="inline-flex h-8 w-8 items-center justify-center ds-rounded-lg ds-text-secondary hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
