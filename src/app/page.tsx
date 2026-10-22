import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Treatments } from "@/components/Treatments";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
