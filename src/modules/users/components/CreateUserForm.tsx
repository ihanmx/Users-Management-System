"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import useCreateUser from "../hooks/useCreateUser";

const CreateUserForm = () => {
  const router = useRouter();
  const tUsers = useTranslations("Users");
  const tCommon = useTranslations("Common");

  const { mutate, isPending } = useCreateUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => router.push("/dashboard/users"),
    });
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-10">
      <Card size="lg" width="md">
        <Title size="lg" className="text-center">
          {tUsers("createTitle")}
        </Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Text>{tCommon("name")}</Text>
            <Input
              placeholder={tCommon("name")}
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div>
            <Text>{tCommon("email")}</Text>
            <Input
              type="email"
              placeholder={tCommon("email")}
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <Text>{tCommon("password")}</Text>
            <Input
              type="password"
              placeholder={tCommon("password")}
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <Button type="submit" disabled={isPending} fullWidth center={false}>
            {isPending ? tUsers("creating") : tUsers("submitCreate")}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUserForm;
