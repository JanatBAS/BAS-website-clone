import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}
