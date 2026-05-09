import apiClient from "@/services/apiClient";

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export function createUserApi(
  data: CreateUserPayload,
): Promise<CreateUserResponse> {
  return apiClient.post<CreateUserResponse>(`/users`, data);
}
