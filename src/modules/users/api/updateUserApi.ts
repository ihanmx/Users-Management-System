import apiClient from "@/services/apiClient";
import type { CreateUserPayload } from "./createUserApi";

export type UpdateUserPayload = Partial<CreateUserPayload>;

export interface UpdateUserResponse {
  id: number;
  name: string;
  email: string;
}

export interface UpdateUserArgs {
  id: number;
  data: UpdateUserPayload;
}

export function updateUserApi({
  id,
  data,
}: UpdateUserArgs): Promise<UpdateUserResponse> {
  return apiClient.patch<UpdateUserResponse>(`/users/${id}`, data);
}
