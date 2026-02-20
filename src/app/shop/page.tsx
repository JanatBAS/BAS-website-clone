import { Metadata } from "next";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
              Shop
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Official Bitcoin Association Switzerland merchandise, powered by{" "}
              <a
                href="https://dezentralshop.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a9d8f] hover:text-[#34b8a8] transition-colors"
              >
                dezentralshop.ch
              </a>
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#8b7355] text-lg font-light mb-8 font-serif italic">
              Our Products
            </h2>
            <ShopProducts />
          </div>
        </section>
      </main>
      <FooterSimple />
    </>
  );
}
