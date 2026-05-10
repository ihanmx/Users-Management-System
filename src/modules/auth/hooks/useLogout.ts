"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TokenService } from "@/services/tokenService";

export default function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return () => {
    TokenService.removeToken();
    queryClient.clear();
    router.push("/sign-in");
  };
}
