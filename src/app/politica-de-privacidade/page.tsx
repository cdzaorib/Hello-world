import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="conteudo" className="container-x max-w-3xl pt-32 pb-20">
        <h1 className="font-display text-5xl font-medium">Política de privacidade</h1>
        <p className="mt-4 rounded-lg bg-nude/50 p-4 text-sm">
          [RASCUNHO — revisar com responsável jurídico antes de publicar.] Texto-base alinhado à LGPD (Lei 13.709/2018).
        </p>
        <div className="mt-8 space-y-5 leading-relaxed text-cafe/85">
          <p>Este site é da {site.legal.companyName ?? site.name}. Ele não coleta dados por formulários nem usa cookies de rastreamento ou publicidade.</p>
          <h2 className="font-display text-2xl">Contato pelo WhatsApp e Instagram</h2>
          <p>Ao clicar nos botões de contato você é direcionado(a) ao WhatsApp ou ao Instagram, serviços de terceiros com políticas próprias. Os dados que você enviar por lá serão usados apenas para atendimento e agendamento.</p>
          <h2 className="font-display text-2xl">Imagens e depoimentos</h2>
          <p>Fotos de pacientes e depoimentos só são publicados com autorização expressa e podem ser removidos a pedido.</p>
          <h2 className="font-display text-2xl">Seus direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão de seus dados pelos canais de contato oficiais da clínica.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
