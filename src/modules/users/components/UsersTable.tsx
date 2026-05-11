"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import useGetUsers from "../hooks/useGetUsers";
import useDeleteUser from "../hooks/useDeleteUser";
import UserRow from "@/components/molecules/UserRow";
import { confirmDelete } from "@/lib/swal";

export default function UsersTable() {
  const router = useRouter();
  const tCommon = useTranslations("Common");
  const tUsers = useTranslations("Users");

  const { data, isPending, isError, error } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();

  if (isPending)
    return <div className="ds-text-secondary">{tCommon("loading")}</div>;
  if (isError) return <div className="text-red-600">{error.message}</div>;
  if (!data || data.length === 0)
    return <div className="ds-text-secondary">{tCommon("noUsers")}</div>;

  const handleView = (id: number) => router.push(`/dashboard/users/${id}`);
  const handleEdit = (id: number) => router.push(`/dashboard/users/${id}/edit`);
  const handleDelete = async (id: number) => {
    const confirmed = await confirmDelete({
      title: tUsers("deleteConfirmTitle"),
      text: tUsers("deleteConfirmText"),
      confirmText: tCommon("delete"),
      cancelText: tCommon("cancel"),
    });
    if (confirmed) deleteUser(id);
  };

  return (
    <div className="overflow-x-auto ds-rounded-2xl border border-zinc-200 dark:border-zinc-800 ds-bg ds-shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="ds-bg-alt text-xs uppercase ds-text-secondary">
          <tr>
            <th className="px-4 py-3 font-medium">{tCommon("name")}</th>
            <th className="px-4 py-3 font-medium">{tCommon("email")}</th>
            <th className="px-4 py-3 font-medium">{tCommon("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
