import { useApiMutation } from "@/hooks/useApiMutation";
import {
  createUserApi,
  type CreateUserPayload,
  type CreateUserResponse,
} from "../api/createUserApi";
import { useQueryClient } from "@tanstack/react-query";

export default function useCreateUser() {
  const queryClient = useQueryClient(); //to reach the cache and invalidate queries after mutation success because mutation dont't have queryKey like query, so we need to use queryClient to invalidate the queries that are related to users after creating a new user successfully

  return useApiMutation<CreateUserPayload, CreateUserResponse>({
    mutationFn: createUserApi,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    },
  });
}
