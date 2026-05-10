import UsersTable from "@/modules/users/components/UsersTable";
import ActionSection from "@/components/organisms/ActionSection";
export default function UsersPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ActionSection />
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <UsersTable />
    </div>
  );
}
