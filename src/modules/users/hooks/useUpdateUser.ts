import { useApiMutation } from "@/hooks/useApiMutation";
import { useQueryClient } from "@tanstack/react-query";
import {
  updateUserApi,
  type UpdateUserArgs,
  type UpdateUserResponse,
} from "../api/updateUserApi";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  return useApiMutation<UpdateUserArgs, UpdateUserResponse>({
    mutationFn: updateUserApi,
    options: {
      onSuccess: (_data, variables) => {
        //data is the response from the server, variables are the args passed to the mutation function
        queryClient.invalidateQueries({ queryKey: ["users"] });
        queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
      },
    },
  });
}
