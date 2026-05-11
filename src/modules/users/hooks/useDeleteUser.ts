import { useApiMutation } from "@/hooks/useApiMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { deleteUserApi } from "../api/deleteUserApi";
import { showSuccess, showError } from "@/lib/swal";

export default function useDeleteUser() {
  const queryClient = useQueryClient();
  const tUsers = useTranslations("Users");
  const tCommon = useTranslations("Common");

  return useApiMutation<number, void>({
    mutationFn: deleteUserApi,
    options: {
      onSuccess: (_data, id) => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        queryClient.removeQueries({ queryKey: ["user", id] });
        showSuccess(tUsers("deleted"));
      },
      onError: (err) => {
        showError(err.message || tUsers("deleteError"), tCommon("errorTitle"));
      },
    },
  });
}
