Source code for [adysfolio.vercel.app](https://adysfolio.vercel.app) — a personal portfolio and blog. Built with Next.js 16, Fumadocs, and a slightly over-engineered PDF viewer.

---

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)             |
| Language   | TypeScript 5                                   |
| UI         | React 19, Tailwind CSS v4, shadcn/ui, Radix UI |
| Icons      | Lucide React, Tabler Icons                     |
| Blog / MDX | Fumadocs Core + UI 16, fumadocs-mdx            |
| Resume     | react-pdf, GitHub Releases                     |
| OG Images  | @takumi-rs/image-response                      |
| Linting    | ESLint 10, eslint-config-next                  |

---

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

No database or auth setup required.

---

## Key Features

- **Blog** powered by Fumadocs MDX
- **PDF resume viewer** via react-pdf, proxied from GitHub Releases
- **OG image generation** per page and per blog post
- **Full-text search** via Fumadocs built-in search
- **Dark mode** with system preference detection
- **Security headers** — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Structured data** — JSON-LD for Person, WebSite, BlogPosting, BreadcrumbList

---

## Environment Variables

All env vars are optional for local development:

```env
# Optional — base URL override. Auto-detected from Vercel env otherwise.
NEXT_PUBLIC_BASE_URL=https://adysfolio.vercel.app
```

---

## Deploy

Designed for **[Vercel](https://vercel.com)**. Set `NEXT_PUBLIC_BASE_URL` in the Vercel dashboard.
