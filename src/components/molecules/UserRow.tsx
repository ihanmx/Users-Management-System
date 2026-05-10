import Button from "@/components/atoms/Button";
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
  return (
    <tr className="border-b border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
            {getInitials(user.name)}
          </div>
          <span className="font-medium">{user.name}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
        {user.email}
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={() => onView?.(user.id)}>
            View
          </Button>
          <Button size="sm" variant="ghost" onClick={() => onEdit?.(user.id)}>
            Edit
          </Button>
          <Button
            size="sm"
            variant="outline1"
            onClick={() => onDelete?.(user.id)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
