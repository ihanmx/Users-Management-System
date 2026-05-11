"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import useGetUser from "../hooks/useGetUser";
import useUpdateUser from "../hooks/useUpdateUser";
import type { UpdateUserPayload } from "../api/updateUserApi";
import type { GetUserResponse } from "../api/getUserApi";

const UpdateUserForm = () => {
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);

  const { data: user, isPending, isError, error } = useGetUser(userId);

  if (isPending) return <p className="p-6">Loading user…</p>;
  if (isError)
    return <p className="p-6 text-red-600">Error: {error.message}</p>;
  if (!user) return null;

  return <UpdateUserFormInner userId={userId} user={user} />;
};

const UpdateUserFormInner = ({
  userId,
  user,
}: {
  userId: number;
  user: GetUserResponse;
}) => {
  const router = useRouter();
  const { mutate, isPending: isSaving, error } = useUpdateUser();

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: UpdateUserPayload = {
      name: form.name,
      email: form.email,
    };
    if (form.password.trim() !== "") {
      payload.password = form.password;
    }

    mutate(
      { id: userId, data: payload },
      { onSuccess: () => router.push("/dashboard/users") },
    );
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <Card size="lg" width="md">
        <Title size="md">Edit user</Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            placeholder="New password (leave blank to keep current)"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <Button type="submit" disabled={isSaving} fullWidth center={false}>
            {isSaving ? "Saving…" : "Save changes"}
          </Button>

          {error && <p className="text-red-600 text-sm">{error.message}</p>}
        </form>
      </Card>
    </div>
  );
};

export default UpdateUserForm;
