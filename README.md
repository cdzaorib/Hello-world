# Conceito Saúde Estética — site institucional

Next.js (App Router) · React · TypeScript strict · Tailwind CSS v4 · Motion · Lucide · `next/image`.
Site estático, sem banco de dados, autenticação ou API própria.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

Copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL` (usada em sitemap, robots e Open Graph).

## Onde editar o conteúdo

Tudo o que é institucional fica em `src/content/` (tipado). Os componentes não têm textos de marca fixos.

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | nome, WhatsApp, Instagram, endereço, mapa, horários, e-mail, textos do hero e "Sobre" |
| `treatments.ts` | tratamentos (cards + páginas individuais `/tratamentos/[slug]`) |
| `differentials.ts` | diferenciais |
| `gallery.ts` | galeria |
| `testimonials.ts` | depoimentos (a seção só aparece se houver itens) |
| `faq.ts` | perguntas frequentes |

Imagens: coloque os arquivos em `public/images/` e informe `src: "/images/arquivo.jpg"`. Enquanto `src` for `null`, aparece um espaço reservado identificado como "pendente".

## Agendamento via WhatsApp

Defina `whatsappNumber` em `src/content/site.ts` (somente dígitos com DDI+DDD, ex. `5511999999999`). Todos os botões passam a abrir `wa.me` com mensagem predefinida. **Enquanto o número for `null`, os botões levam ao Instagram oficial**, nunca a um número fictício.

## Pendências para publicar (informações reais necessárias)

O Instagram não pôde ser lido durante o desenvolvimento (acesso bloqueado). Nada abaixo foi inventado:

- [ ] Número de WhatsApp validado
- [ ] Logotipo oficial e paleta oficial (hoje: texto provisório e paleta sugerida em `globals.css`)
- [ ] Lista real de tratamentos (nome, resumo, imagem; `placeholder: false`) e textos de páginas individuais
- [ ] Diferenciais confirmados pela clínica
- [ ] Fotos reais (hero, clínica, equipe, tratamentos), com autorização de uso de imagem de pacientes (LGPD)
- [ ] Texto institucional oficial (`about` em `site.ts`)
- [ ] Endereço, link/embed do Google Maps, horário, e-mail
- [ ] Razão social / CNPJ para o rodapé
- [ ] Depoimentos reais com autorização por escrito
- [ ] Respostas do FAQ (formas de pagamento etc.)
- [ ] Revisão jurídica da política de privacidade (`src/app/politica-de-privacidade`, é um rascunho)

Dados estruturados (JSON-LD) incluem apenas campos preenchidos; os pendentes são omitidos.

## Publicar na Vercel

1. Importe o repositório na Vercel (framework detectado automaticamente: Next.js).
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
3. Deploy. Aponte o domínio em *Settings → Domains*.

## Acessibilidade e performance

Skip link, HTML semântico, menu mobile com `aria-expanded` e fechamento por Esc, foco visível, `prefers-reduced-motion` respeitado (CSS e Motion), fontes self-hosted (`@fontsource`), imagens via `next/image`, páginas estáticas.
