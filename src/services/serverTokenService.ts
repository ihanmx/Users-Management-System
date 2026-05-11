import "server-only";
import { cookies } from "next/headers";
import { ENV } from "@/config/env";

const TOKEN_KEY = ENV.ACCESS_TOKEN_KEY || "access_token";

export const ServerTokenService = {
  getToken: async () => (await cookies()).get(TOKEN_KEY)?.value,
  hasToken: async () => !!(await cookies()).get(TOKEN_KEY),
};
