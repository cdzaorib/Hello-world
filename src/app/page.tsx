import { Essence } from "@/components/Essence";
import { FinalCta } from "@/components/FinalCta";
import { FloatingBooking } from "@/components/FloatingBooking";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Procedures } from "@/components/Procedures";
import { Professionals } from "@/components/Professionals";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Procedures />
        <Essence />
        <Professionals />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingBooking />
    </>
  );
}
