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
| `site.ts` | marca, WhatsApp, Instagram, localização, endereço, mapa, horários, textos do hero, essência e CTA final |
| `specialties.ts` | especialidades (dois grupos) — nomes vindos das publicações oficiais |
| `professionals.ts` | profissionais (foto, formação, registro: só após confirmação) |
| `gallery.ts` | galeria de fotos oficiais |
| `testimonials.ts` | depoimentos reais autorizados (vazio = não aparece) |

Cores: tokens em `src/app/globals.css` (verde profundo, sálvia, dourado, creme, grafite). O dourado `#B49A5B` é usado só em linhas/bordas; textos usam `gold-dark` para manter contraste AA.

Imagens: coloque em `public/images/` e informe `src: "/images/arquivo.jpg"`. Com `src: null` aparece um espaço reservado marcado "pendente".

## WhatsApp e mensuração

- Defina `whatsappNumber` em `site.ts` (dígitos com DDI+DDD, ex. `5521999999999`). Todos os CTAs abrem `wa.me` com a mensagem predefinida; cada especialidade envia uma mensagem contextual.
- **Enquanto o número for `null`, os CTAs levam ao Instagram oficial**, nunca a um número fictício.
- Cliques geram eventos (`whatsapp_click`, `specialty_click`, `instagram_click`, com `location`/`specialty`) via `src/lib/track.ts`: disparam `CustomEvent("conceito:track")` e empurram para `window.dataLayer` se existir. **Nenhum pixel/analytics está instalado.** Conecte GA4/GTM/Meta apenas depois de configurar consentimento (LGPD).

## Pendências para publicar

Informações extraídas das capturas do Instagram: nome, posicionamento, localização (Bangu, RJ), nomes das especialidades e das duas profissionais. O restante **não foi inventado**:

- [ ] Número de WhatsApp validado
- [ ] Logotipo original em alta resolução — hoje `public/images/logo.png` é um recorte (512px) do avatar do Instagram; substituir pelo arquivo oficial (idealmente SVG)
- [ ] Fotos oficiais (profissionais, clínica, atendimento) com autorização de uso de imagem. As artes das publicações não foram reaproveitadas
- [ ] Endereço completo e link do Google Maps
- [ ] Horário de atendimento, e-mail, razão social/CNPJ
- [ ] Formação, registro profissional e especialidade de cada profissional (sem títulos inventados)
- [ ] Validação, com a clínica, do escopo/elegibilidade e de uma descrição para cada especialidade
- [ ] Depoimentos reais autorizados
- [ ] Antes/depois: só publicar com consentimento do paciente e conforme as normas de publicidade dos conselhos profissionais (CFM/CFN/CRBM etc., conforme cada profissional)
- [ ] Revisão jurídica do aviso de privacidade (`src/app/politica-de-privacidade`, é rascunho)

## Publicar na Vercel

1. Importe o repositório (Next.js é detectado automaticamente).
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
3. Deploy e configure o domínio em *Settings → Domains*.

## Qualidade

HTML semântico, skip link, menu mobile acessível (Esc fecha, `aria-expanded`), foco visível, `prefers-reduced-motion` respeitado, fontes self-hosted, `next/image`, página estática, JSON-LD (`HealthAndBeautyBusiness`) só com dados confirmados e SEO local (Bangu / Rio de Janeiro).
