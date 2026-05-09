import CreateUserForm from "@/modules/users/components/CreateUserForm";

export default function CreateUserPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Create New User</h1>
      <CreateUserForm />
    </div>
  );
}
