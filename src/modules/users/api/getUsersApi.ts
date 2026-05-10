import apiClient from "@/services/apiClient";
import type { User } from "@/types/user";

export type GetUsersResponse = User;

export function getUsersApi(): Promise<GetUsersResponse[]> {
  return apiClient.get<GetUsersResponse[]>(`/users`);
}
