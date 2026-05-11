import { ServerTokenService } from "@/services/serverTokenService";
import Navbar from "@/components/organisms/Navbar";
import LogoutButton from "@/modules/auth/components/LogoutButton";
import { publicRoutes, protectedRoutes } from "../../utils/Routes";

export default async function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isSignedIn = await ServerTokenService.hasToken();
  return (
    <>
      <Navbar
        routes={isSignedIn ? protectedRoutes : publicRoutes}
        actions={isSignedIn ? <LogoutButton /> : null}
      />
      <main className="flex-1">{children}</main>
    </>
  );
}
