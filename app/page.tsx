import Hero from "@/components/hero";
import PartnerSection from "@/components/partener-us";
import PartenerProgram from "@/components/partenerprogram";
import Perks from "@/components/perks";
import ResourcesCarousel from "@/components/resources";
import Guide from "@/components/guide";
import { Parteners } from "@/components/partener";


export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <PartnerSection />
      <Perks />
      <Parteners />
      <PartenerProgram />
      <ResourcesCarousel />
      <Guide />
    </main>
  );
}
