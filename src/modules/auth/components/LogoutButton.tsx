"use client";
import Button from "@/components/atoms/Button";
import useLogout from "../hooks/useLogout";
import { useTranslations } from "next-intl";
export default function LogoutButton() {
  const t = useTranslations("LogoutButton");
  const logout = useLogout();
  return <Button onClick={logout}>{t("logout")}</Button>;
}
