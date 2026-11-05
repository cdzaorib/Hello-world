# Conceito Saúde Estética Integrativa — landing page

Landing page única (Bangu, Rio de Janeiro) focada em levar o visitante ao WhatsApp da profissional certa.
Next.js (App Router) · React · TypeScript strict · Tailwind CSS v4 · Motion · Lucide · `next/image`.
Sem banco de dados, autenticação ou API própria.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Estrutura da página

Header fixo → Hero (foto oficial em arco + faixa de destaques) → Procedimentos (filtros + 12 cards) → Nossa Essência → Profissionais → Depoimentos (só com itens reais) → CTA final → Rodapé.

## Onde editar

Todo o conteúdo fica em `src/content/` (tipado); os componentes não têm textos de marca fixos.

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | marca, Instagram, localização, endereço/mapa/horários (opcionais), textos do hero, destaques, essência, seletor, CTA final e mensagens de WhatsApp |
| `procedures.ts` | os 12 procedimentos: título, descrição curta, ícone, categoria (filtro) e profissional responsável |
| `professionals.ts` | profissionais: nome, área, foto, avatar, **WhatsApp**, registro e bio (só aparecem se preenchidos) |
| `testimonials.ts` | depoimentos reais autorizados (vazio = seção oculta) |

Cores e tipografia: tokens em `src/app/globals.css` (verde profundo, sálvia, dourado, creme, grafite; Cormorant Garamond + Manrope, self-hosted). Dourado em texto usa `gold-dark` (fundo claro) ou `gold-light` (fundo verde) para manter contraste AA.

Imagens: `public/images/`, referenciadas pelos arquivos de conteúdo. Com `src: null` aparece um espaço reservado.

## Agendamento por WhatsApp

**Procedimentos (1 clique):** cada card abre direto o WhatsApp da profissional responsável com:

> Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com {profissional} para o procedimento de {procedimento}. Poderiam me informar sobre a disponibilidade?

| Profissional | Área | Procedimentos | WhatsApp |
| --- | --- | --- | --- |
| Claudia Marques | Saúde Integrativa | Tricologia Integrativa, Nutrição Funcional Especializada, Naturopatia / Limpeza do Terreno Biológico, Terapia Capilar Personalizada, Suplementação Individualizada, Terapias Integrativas | `552121168332` |
| Munique Cabral | Estética Avançada | Harmonização Corporal, Glútea, de Seios e Íntima, Emagrecimento Sistêmico, Protocolos Regenerativos com PRP | `5521979341201` |

**CTAs gerais** (header, hero, botão flutuante, menu mobile e CTA final) abrem o seletor *"Com quem deseja agendar sua avaliação?"* (`BookingDialog`), que leva ao WhatsApp da profissional escolhida, sem formulário. O seletor é um `<dialog>` nativo: foco preso, Esc fecha, foco volta ao botão de origem; no celular aparece como painel inferior.

Para abrir o seletor de qualquer componente: `<BookingTrigger location="...">` ou `openBooking()` (`src/lib/booking.ts`).
Para mudar quem atende um procedimento, troque `professional` em `procedures.ts`; para mudar um número, edite `whatsappNumber` em `professionals.ts`.

## Mensuração

Cliques geram eventos via `src/lib/track.ts` (`CustomEvent("conceito:track")` + `window.dataLayer`, se existir):
`procedure_click` (procedure, professional), `booking_open` (location), `whatsapp_click` (location, professional), `instagram_click` (location).
**Nenhum pixel/analytics está instalado.** Conecte GA4/GTM/Meta apenas depois de configurar consentimento (LGPD).

## Pendências

- [ ] Validar com as profissionais as descrições curtas dos 12 procedimentos (`procedures.ts`), redigidas de forma neutra, sem promessa de resultado
- [ ] Logotipo original em alta resolução (hoje `public/images/logo.png` é um recorte de 512px do avatar do Instagram; idealmente SVG)
- [ ] Fotos originais em alta resolução: a da Claudia, as ampolas e os detalhes do uniforme vêm de recortes de baixa resolução. Não há fotos do espaço físico
- [ ] Formação, registro profissional e bio de cada profissional (ficam ocultos até serem preenchidos; o título "Dra." não foi usado)
- [ ] Endereço completo, Google Maps, horário, e-mail, razão social/CNPJ (aparecem automaticamente quando preenchidos em `site.ts`)
- [ ] Validação de escopo/elegibilidade de cada procedimento (inclui Protocolos com PRP) e das regras de publicidade dos conselhos profissionais
- [ ] Depoimentos e antes/depois: só com consentimento por escrito
- [ ] Revisão jurídica do aviso de privacidade (`src/app/politica-de-privacidade`, é rascunho)

## Publicar na Vercel

Projeto Vercel: `conceitosaudeesteticaintegrativa`.

- **Produção:** https://conceitosaudeesteticaintegrativa.vercel.app (publica ao mesclar no `main`).
- **Prévias:** cada branch/PR gera um link de prévia (exige login na Vercel).
- `NEXT_PUBLIC_SITE_URL` está configurada na Vercel com o domínio oficial (canonical, Open Graph e sitemap).
- **Domínio próprio (sem `.vercel.app`):** registre o domínio, adicione em *Settings → Domains* e atualize `NEXT_PUBLIC_SITE_URL`.

## Qualidade

HTML semântico, skip link, `<dialog>` nativo para menu e seletor (foco e Esc), áreas de toque ≥ 44px, foco visível, `prefers-reduced-motion` respeitado, entrada do hero só com CSS, fontes self-hosted, `next/image`, página estática, JSON-LD (`HealthAndBeautyBusiness` + catálogo de serviços) só com dados confirmados, SEO local (Bangu / Rio de Janeiro).
