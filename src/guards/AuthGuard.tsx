"use client";
import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { TokenService } from "@/services/tokenService";
import { ENV } from "@/config/env";
const subscribe = () => () => {};

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const hasToken = useSyncExternalStore(
    subscribe,
    () => TokenService.hasToken(),
    () => false,
  );
  const allowed = ENV.DISABLE_DASHBOARD_PROTECTION || hasToken;

  useEffect(() => {
    if (ENV.DISABLE_DASHBOARD_PROTECTION) return;
    if (TokenService.hasToken()) return; //we dont use allowed here because we want to check the token on every render, not just the first one to survive when page is refreshed
    router.replace("/sign-in");
  }, [router]);
  //this taken from the first render to ensure thet server and client are in async, and to prevent flashing of protected content before the redirect happens. if allowed is false, we return null to render nothing, otherwise we render the children. this way we avoid rendering protected content for a brief moment before the redirect happens.
  if (!allowed) return null;
  return <>{children}</>;
};

export default AuthGuard;

// Arg	What React asks	What we provide
// 1. subscribe	"How do I listen for changes?"	We don't — return a noop unsubscribe. Cookies don't fire events.
// 2. getClientSnapshot	"What's the value in the browser?"	() => TokenService.hasToken() — reads document.cookie.
// 3. getServerSnapshot	"What value should I pretend it is during SSR?"	() => false — assume "no token" for the HTML render.
