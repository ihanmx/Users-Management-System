"use client";
import { signInApi, SignInPayload, SignInResponse } from "../api/signInApi";
import { useApiMutation } from "@/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { showError } from "@/lib/swal";

export default function useSignIn() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const tAuth = useTranslations("Auth");
  const tCommon = useTranslations("Common");

  return useApiMutation<SignInPayload, SignInResponse>({
    mutationFn: signInApi,
    options: {
      onSuccess: (data) => {
        TokenService.setToken(data.accessToken);
        queryClient.clear();
        router.push("/dashboard");
      },
      onError: () => {
        showError(tAuth("invalidCredentials"), tCommon("errorTitle"));
      },
    },
  });
}
