import Footer from "./Footer/footer";
import { Header } from "./Headerr/header";
import Summary from "./Summary/summary";

export default function DashboardLayout({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header href={href} />
      <main className="pt-16 p-4">{children}</main>
      <div className="flex-1 flex items-start justify-center h-full w-full bg-gray-500 mt-0">
        <Summary href={href} />
      </div>

      <Footer />
    </div>
  );
}
