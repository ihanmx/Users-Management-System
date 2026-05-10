"use client";

import { useRouter } from "next/navigation";
import useGetUsers from "../hooks/useGetUsers";
import useDeleteUser from "../hooks/useDeleteUser";
import UserRow from "@/components/molecules/UserRow";

export default function UsersTable() {
  const router = useRouter();
  const { data, isPending, isError, error } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div className="text-red-600">Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No users found</div>;

  const handleView = (id: number) => router.push(`/dashboard/users/${id}`);
  const handleEdit = (id: number) => router.push(`/dashboard/users/${id}/edit`);
  const handleDelete = (id: number) => {
    if (confirm("Delete this user?")) deleteUser(id);
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-50 text-xs uppercase text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Actions</th>
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
