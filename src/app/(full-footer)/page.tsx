import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeatureCards from "@/components/FeatureCards";
import { SITE_OPEN_GRAPH, SITE_URL } from "@/lib/site";

// Title and description come from the root layout.
export const metadata: Metadata = {
  openGraph: { ...SITE_OPEN_GRAPH, url: SITE_URL },
};

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Bitcoin Association Switzerland</h1>
      <Hero />
      <Mission />
      <FeatureCards />
    </main>
  );
}
