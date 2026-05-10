import UsersTable from "@/modules/users/components/UsersTable";
export default function UsersPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <UsersTable />
    </div>
  );
}
