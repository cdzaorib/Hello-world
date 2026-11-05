# Conceito Saúde Estética Integrativa — landing page

Landing page única (Bangu, Rio de Janeiro) focada em levar o visitante ao WhatsApp.
Next.js (App Router) · React · TypeScript strict · Tailwind CSS v4 · Motion · Lucide · `next/image`.
Sem banco de dados, autenticação ou API própria.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

Copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL` (sitemap, robots e Open Graph).

## Onde editar

Todo o conteúdo fica em `src/content/` (tipado); os componentes não têm textos de marca fixos.

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | marca, WhatsApp geral, Instagram, localização, endereço, mapa, horários, textos e mensagens de WhatsApp |
| `procedures.ts` | vitrine única de procedimentos; cada um aponta para a profissional responsável (`professional`) |
| `professionals.ts` | profissionais: nome, área, foto, **WhatsApp de agendamento**, registro (só após confirmação) |
| `gallery.ts` | galeria de fotos oficiais |
| `testimonials.ts` | depoimentos reais autorizados (vazio = não aparece) |

Cores: tokens em `src/app/globals.css` (verde profundo, sálvia, dourado, creme, grafite). O dourado `#B49A5B` é usado só em linhas/bordas; textos usam `gold-dark` para manter contraste AA.

Imagens: coloque em `public/images/` e informe `src: "/images/arquivo.jpg"`. Com `src: null` aparece um espaço reservado marcado "pendente".

## Agendamento por WhatsApp

Os procedimentos aparecem juntos, sem separação por profissional, mas **cada card abre o WhatsApp da profissional responsável** com a mensagem:

> Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com {profissional} para o procedimento de {procedimento}. Poderiam me informar sobre a disponibilidade?

| Profissional | Procedimentos | WhatsApp |
| --- | --- | --- |
| Claudia Marques | Tricologia Integrativa, Nutrição Funcional Especializada, Naturopatia / Limpeza do Terreno Biológico, Terapia Capilar Personalizada, Suplementação Individualizada, Terapias Integrativas | `552121168332` |
| Munique Cabral | Harmonização Corporal, Glútea, de Seios e Íntima, Emagrecimento Sistêmico, Protocolos Regenerativos com PRP | **pendente** |

Ordem de destino de um card: WhatsApp da profissional → WhatsApp geral (`site.whatsappNumber`) → Instagram oficial. Nunca um número fictício.
Para mudar quem atende um procedimento, troque `professional` em `procedures.ts`; para mudar um número, edite `whatsappNumber` em `professionals.ts` (dígitos com DDI+DDD).

Os botões gerais (header, hero, botão flutuante, CTA final) usam `site.whatsappNumber`, ainda pendente; por enquanto levam ao Instagram.

## Mensuração

- Cliques geram eventos (`procedure_click` com `procedure`/`professional`/`channel`; `whatsapp_click` e `instagram_click` com `location`) via `src/lib/track.ts`: disparam `CustomEvent("conceito:track")` e empurram para `window.dataLayer` se existir. **Nenhum pixel/analytics está instalado.** Conecte GA4/GTM/Meta apenas depois de configurar consentimento (LGPD).

## Pendências para publicar

Informações confirmadas pelo material enviado: nome, posicionamento, localização (Bangu, RJ), procedimentos e responsáveis, profissionais e suas áreas, WhatsApp da Claudia. O restante **não foi inventado**:

- [ ] WhatsApp da Munique Cabral (`professionals.ts`) — até lá, os procedimentos dela levam ao Instagram
- [ ] WhatsApp geral da clínica (`site.ts`), ou decidir para onde vão os botões gerais
- [ ] Confirmar que `55 21 2116-8332` (formato de telefone fixo) está ativo no WhatsApp Business
- [ ] Logotipo original em alta resolução — hoje `public/images/logo.png` é um recorte (512px) do avatar do Instagram; substituir pelo arquivo oficial (idealmente SVG)
- [ ] Fotos: hero e profissionais já usam o material enviado (recortes sem texto; a foto da Claudia vem de uma arte e tem só 464×580 px, vale trocar por um original). Faltam clínica/atendimento/galeria. Confirmar autorização de uso de imagem e que as fotos representam as profissionais reais
- [ ] Logotipo: o arquivo em alta enviado é o selo "Blend de Óleos" (produto), por isso não foi usado
- [ ] Endereço completo e link do Google Maps
- [ ] Horário de atendimento, e-mail, razão social/CNPJ
- [ ] Formação e registro profissional de cada profissional (área já preenchida conforme o material oficial; o título "Dra." não foi usado)
- [ ] Validação, com a clínica, do escopo/elegibilidade de cada procedimento (inclui Protocolos com PRP)
- [ ] Depoimentos reais autorizados
- [ ] Antes/depois: só publicar com consentimento do paciente e conforme as normas de publicidade dos conselhos profissionais (CFM/CFN/CRBM etc., conforme cada profissional)
- [ ] Revisão jurídica do aviso de privacidade (`src/app/politica-de-privacidade`, é rascunho)

## Publicar na Vercel

1. Importe o repositório (Next.js é detectado automaticamente).
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
3. Deploy e configure o domínio em *Settings → Domains*.

## Qualidade

HTML semântico, skip link, menu mobile acessível (Esc fecha, `aria-expanded`), foco visível, `prefers-reduced-motion` respeitado, fontes self-hosted, `next/image`, página estática, JSON-LD (`HealthAndBeautyBusiness`) só com dados confirmados e SEO local (Bangu / Rio de Janeiro).
