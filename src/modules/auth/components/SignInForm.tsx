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
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <Title size="lg" className="text-center">
          {t("title")}
        </Title>
        <Text>{t("email")}</Text>
        <Input
          type="email"
          placeholder={t("email")}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Text>{t("password")}</Text>
        <Input
          type="password"
          placeholder={t("password")}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button type="submit" className="w-full">
          {t("submit")}
        </Button>
        {isPending ? "Signing in…" : t("submit")}
      </form>
    </Card>
  );
};

export default SignInForm;
