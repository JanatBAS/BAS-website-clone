import { Metadata } from "next";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ShopProducts from "@/components/ShopProducts";

export const metadata: Metadata = {
  title: "Shop | Bitcoin Association Switzerland",
  description:
    "Browse and buy Bitcoin merchandise from the Bitcoin Association Switzerland. T-shirts, hoodies, accessories and more — powered by dezentralshop.ch.",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Shop"
          description={
            <>
              Official Bitcoin Association Switzerland merchandise, powered by{" "}
              <a
                href="https://dezentralshop.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a9d8f] hover:text-[#34b8a8] transition-colors"
              >
                dezentralshop.ch
              </a>
            </>
          }
        />

        {/* Products Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader className="mb-8">Our Products</SectionHeader>
            <ShopProducts />
          </div>
        </section>
      </main>
      <FooterSimple />
    </>
  );
}
