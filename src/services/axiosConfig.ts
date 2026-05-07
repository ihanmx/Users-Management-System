import axios, { AxiosInstance } from "axios";
import { ENV } from "@/config/env";
import { TokenService } from "@/services/tokenService";

//Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENV.API_URL,
  timeout: ENV.API_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//Request interceptor to add auth token if available

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default axiosInstance;
