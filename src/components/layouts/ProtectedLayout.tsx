import Navbar from "@/components/organisms/Navbar";
import { protectedRoutes } from "@/shared/utils/Routes";

export default function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar routes={protectedRoutes} />
      <main className="flex-1">{children}</main>
    </>
  );
}
