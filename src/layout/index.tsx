import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <main className={`relative ${className}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
