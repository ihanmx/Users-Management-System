"use client";
import Button from "@/components/atoms/Button";
import useLogout from "../hooks/useLogout";

export default function LogoutButton() {
  const logout = useLogout();
  return <Button onClick={logout}>Logout</Button>;
}
