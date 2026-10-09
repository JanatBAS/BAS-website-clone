import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ShopProducts from "@/components/ShopProducts";
import { getShopProducts } from "@/lib/shop";

// The product list is refreshed at most once an hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse and buy Bitcoin merchandise from the Bitcoin Association Switzerland. T-shirts, hoodies, accessories and more — powered by dezentralshop.ch.",
};

export default async function ShopPage() {
  const products = await getShopProducts();

  return (
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
              className="text-brand-teal hover:text-[#34b8a8] transition-colors"
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
          <ShopProducts products={products} />
        </div>
      </section>
    </main>
  );
}
