import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeatureCards from "@/components/FeatureCards";
import BitcoinWidgets from "@/components/BitcoinWidgets";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home (updated) - Bitcoin Association Switzerland",
};

export default function HomeUpdated() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <FeatureCards />
        <BitcoinWidgets />
      </main>
      <Footer />
    </>
  );
}
