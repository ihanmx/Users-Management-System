import Navbar from "@/components/organisms/Navbar";
import { publicRoutes } from "@/shared/utils/Routes";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar routes={publicRoutes} />
      <main className="flex-1">{children}</main>
    </>
  );
}
