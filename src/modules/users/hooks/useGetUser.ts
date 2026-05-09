import { getUserApi } from "../api/getUserApi";
import { useApiQuery } from "@/hooks/useApiQuery";

export default function useGetUser(id: number) {
  return useApiQuery({
    queryKey: ["user", id],
    queryFn: () => getUserApi(id),
    options: {
      retry: 1,
    },
  });
}
