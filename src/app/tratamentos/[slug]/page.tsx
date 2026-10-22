import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageSlot } from "@/components/ImageSlot";
import { treatmentsWithPage } from "@/content/treatments";
import { bookingUrl } from "@/lib/whatsapp";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return treatmentsWithPage.map((t) => ({ slug: t.slug }));
}

const find = (slug: string) => treatmentsWithPage.find((t) => t.slug === slug);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const t = find((await params).slug);
  return t ? { title: t.title, description: t.summary, alternates: { canonical: `/tratamentos/${t.slug}` } } : {};
}

export default async function TreatmentPage({ params }: { params: Promise<Params> }) {
  const t = find((await params).slug);
  if (!t?.detail) notFound();
  return (
    <>
      <Header />
      <main id="conteudo" className="container-x max-w-3xl pt-32 pb-20">
        <h1 className="font-display text-5xl font-medium">{t.title}</h1>
        <ImageSlot src={t.image.src} alt={t.image.alt} label="Imagem do tratamento" className="mt-8 aspect-[16/9] rounded-2xl" />
        <div className="mt-8 space-y-4 leading-relaxed text-cafe/80">
          {t.detail.body.map((p) => <p key={p}>{p}</p>)}
        </div>
        <Button href={bookingUrl(`Olá! Gostaria de saber mais sobre: ${t.title}.`)} external className="mt-10">Agendar avaliação</Button>
      </main>
      <Footer />
    </>
  );
}
