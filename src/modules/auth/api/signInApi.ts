import apiClient from "@/services/apiClient";

export interface SignInPayload {
  email: string;
  password: string;
}
export interface SignInResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}

export function signInApi(data: SignInPayload): Promise<SignInResponse> {
  return apiClient.post<SignInResponse>(`/login`, data);
}
