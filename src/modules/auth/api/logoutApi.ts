import apiClient from "@/services/apiClient";

export function logoutApi(): Promise<void> {
  return apiClient.post(`/logout`);
}

// in case there is /logout endpoint in the backend
