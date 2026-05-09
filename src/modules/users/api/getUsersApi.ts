import apiClient from "@/services/apiClient";

export interface GetUsersResponse {
  email: string;
  name: string;
  password: string;
  id: number;
}

export function getUsersApi(): Promise<GetUsersResponse[]> {
  return apiClient.get<GetUsersResponse[]>(`/users`);
}
