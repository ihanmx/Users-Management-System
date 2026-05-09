import { useApiQuery } from "@/hooks/useApiQuery";
import { getUsersApi } from "../api/getUsersApi";

export default function useUsers() {
  return useApiQuery({
    queryKey: ["users"],
    queryFn: () => getUsersApi(),
    options: {
      retry: 1,
    },
  });
}
