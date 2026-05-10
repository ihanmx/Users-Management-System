"use client";
import { signInApi, SignInPayload, SignInResponse } from "../api/signInApi";
import { useApiMutation } from "@/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
export default function useSignIn() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useApiMutation<SignInPayload, SignInResponse>({
    mutationFn: signInApi,
    options: {
      onSuccess: (data) => {
        TokenService.setToken(data.accessToken);
        queryClient.clear();
        router.push("/dashboard"); // Clear the entire cache to remove any user-specific data
      },
    },
  });
}
