"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import useGetUser from "../hooks/useGetUser";
import useUpdateUser from "../hooks/useUpdateUser";
import type { UpdateUserPayload } from "../api/updateUserApi";
import type { GetUserResponse } from "../api/getUserApi";

const UpdateUserForm = () => {
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);

  const { data: user, isPending, isError, error } = useGetUser(userId);

  if (isPending) return <p>Loading user…</p>;
  if (isError) return <p className="text-red-600">Error: {error.message}</p>;
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
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
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

      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving…" : "Save changes"}
      </Button>

      {error && <p className="text-red-600">{error.message}</p>}
    </form>
  );
};

export default UpdateUserForm;
