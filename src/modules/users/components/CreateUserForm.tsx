"use client";
import React from "react";
import Input from "@/components/atoms/Input";
import useCreateUser from "../hooks/useCreateUser";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import { on } from "events";
const CreateUserForm = () => {
  const { mutate, isPending, error } = useCreateUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    (mutate(form),
      {
        onSuccess: () => {
          console.log("User created successfully");
        },
        onError: () => {
          console.error("Error creating user");
        },
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button type="submit" disabled={isPending}>
          Create User
        </Button>
        {error && <p className="text-red-600">{error.message}</p>}
        {isPending && <p>Creating user...</p>}
      </form>
    </div>
  );
};

export default CreateUserForm;
