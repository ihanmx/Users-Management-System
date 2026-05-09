import { useApiMutation } from "@/hooks/useApiMutation";
import { useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "../api/deleteUserApi";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  return useApiMutation<number, void>({
    mutationFn: deleteUserApi,
    options: {
      onSuccess: (_data, id) => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        queryClient.removeQueries({ queryKey: ["user", id] });
      },
    },
  });
}
