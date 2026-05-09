import Users from "@/modules/users/components/Users";

export default function UsersPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <Users />
    </div>
  );
}
