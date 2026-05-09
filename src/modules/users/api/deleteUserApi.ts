import apiClient from "@/services/apiClient";

export function deleteUserApi(id: number): Promise<void> {
  return apiClient.delete(`/users/${id}`);
}
