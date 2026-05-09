import apiClient from "@/services/apiClient";

export interface GetUserResponse {
  id: number;
  email: string;
  name: string;
}

export function getUserApi(id: number): Promise<GetUserResponse> {
  return apiClient.get<GetUserResponse>(`/users/${id}`);
}
