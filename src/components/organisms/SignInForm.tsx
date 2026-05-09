"use client";
import { useTranslations } from "next-intl";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const SignInForm = () => {
  const t = useTranslations("SignInPage");
  return (
    <Card>
      <Title size="lg" className="text-center">
        {t("title")}
      </Title>
      <Text>{t("email")}</Text>
      <Input type="email" placeholder={t("email")} />
      <Text>{t("password")}</Text>
      <Input type="password" placeholder={t("password")} />
      <Button className="w-full">{t("submit")}</Button>
    </Card>
  );
};

export default SignInForm;
