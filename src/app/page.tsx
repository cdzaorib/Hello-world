import { ClickTracker } from "@/components/ClickTracker";
import { Essence } from "@/components/Essence";
import { Experience } from "@/components/Experience";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Professionals } from "@/components/Professionals";
import { Specialties } from "@/components/Specialties";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Specialties />
        <Essence />
        <Professionals />
        <Experience />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ClickTracker />
    </>
  );
}
