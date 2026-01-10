import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeatureCards from "@/components/FeatureCards";
import BitcoinWidgets from "@/components/BitcoinWidgets";
import Footer from "@/components/Footer";

export default function HomePage() {
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
