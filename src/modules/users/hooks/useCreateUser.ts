import { useApiMutation } from "@/hooks/useApiMutation";
import {
  createUserApi,
  type CreateUserPayload,
  type CreateUserResponse,
} from "../api/createUserApi";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { showSuccess, showError } from "@/lib/swal";

export default function useCreateUser() {
  const queryClient = useQueryClient();
  const tUsers = useTranslations("Users");
  const tCommon = useTranslations("Common");

  return useApiMutation<CreateUserPayload, CreateUserResponse>({
    mutationFn: createUserApi,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        showSuccess(tUsers("created"));
      },
      onError: () => {
        showError(tUsers("createError"), tCommon("errorTitle"));
      },
    },
  });
}
