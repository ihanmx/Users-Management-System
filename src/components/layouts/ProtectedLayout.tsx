import Navbar from "@/components/organisms/Navbar";
import LogoutButton from "@/modules/auth/components/LogoutButton";
import { protectedRoutes } from "@/shared/utils/Routes";
import AuthGuard from "@/guards/AuthGuard";
export default function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar routes={protectedRoutes} actions={<LogoutButton />} />
      <main className="flex-1">
        <AuthGuard>{children}</AuthGuard>
      </main>
    </>
  );
}
