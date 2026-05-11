"use client";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import useSignIn from "../hooks/useSignIn";
import { useState } from "react";
const SignInForm = () => {
  const t = useTranslations("SignInPage");
  const [form, setForm] = useState({ email: "", password: "" });
  const { mutate: signIn, isPending } = useSignIn();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(form, {
      onSuccess: () => {
        console.log("User created successfully");
      },
      onError: () => {
        console.error("Error creating user");
      },
    });
  };
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-10">
      <Card size="lg" width="md">
        <Title size="lg" className="text-center">
          {t("title")}
        </Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Text>{t("email")}</Text>
            <Input
              type="email"
              placeholder={t("email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <Text>{t("password")}</Text>
            <Input
              type="password"
              placeholder={t("password")}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <Button type="submit" disabled={isPending} fullWidth center={false}>
            {isPending ? "Signing in…" : t("submit")}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignInForm;
