import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Public pages that end with the full footer (logo, social and legal links). */
export default function FullFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
