import Cookies from "js-cookie";
import { ENV } from "@/config/env";

const TOKEN_KEY = ENV.ACCESS_TOKEN_KEY || "access_token";

export const TokenService = {
  setToken: (token: string) => {
    Cookies.set(TOKEN_KEY, token, {
      expires: 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    }); // Token expires in 7 days
  },

  getToken: () => {
    return Cookies.get(TOKEN_KEY);
  },

  removeToken: () => {
    Cookies.remove(TOKEN_KEY);
  },

  hasToken: () => {
    return !!Cookies.get(TOKEN_KEY);
  },
};
