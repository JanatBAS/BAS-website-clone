import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

/** Public pages that end with the compact footer (social and legal links). */
export default function SimpleFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <FooterSimple />
    </>
  );
}
