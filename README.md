# Six33 Consulting

Marketing website for Six33 Consulting, a faith-based leadership and life consulting business for church ministry leaders.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Deploys to Cloudflare Workers from GitHub. No CMS or database.

## Local setup

Requirements: Node 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

Other scripts:

| Script              | What it does                                                   |
| ------------------- | -------------------------------------------------------------- |
| `npm run dev`       | Start the Next.js dev server                                   |
| `npm run build`     | Production build (Next.js only)                                |
| `npm run lint`      | ESLint                                                         |
| `npm run typecheck` | TypeScript check                                               |
| `npm run preview`   | Build for Cloudflare and run it locally in the Workers runtime |
| `npm run deploy`    | Build for Cloudflare and deploy with Wrangler (manual deploy)  |

## Environment variables

| Variable                  | Required | Purpose                                                                                  |
| ------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`          | Yes      | Resend API key used by the contact form. Secret. Never commit it.                        |
| `CONTACT_TO_EMAIL`        | Yes      | Address that receives contact form submissions. Placeholder is `john@example.com`.       |
| `CONTACT_FROM_EMAIL`      | No       | "From" address. `onboarding@resend.dev` works for testing. Use your verified domain live. |
| `NEXT_PUBLIC_SITE_URL`    | Yes      | Public site URL. Used by the sitemap, robots.txt, and Open Graph tags.                   |
| `NEXT_PUBLIC_BOOKING_URL` | Yes      | Cal.com or Calendly event URL for the booking embed on the Contact page.                 |

Locally these live in `.env.local` (copy `.env.example`). For `npm run preview`, secrets go in `.dev.vars` (copy `.dev.vars.example`). On Cloudflare, public values live in `wrangler.jsonc` under `vars`, and secrets are set in the dashboard or with `npx wrangler secret put RESEND_API_KEY`.

## Deploy to Cloudflare from GitHub

The site uses the OpenNext Cloudflare adapter (`@opennextjs/cloudflare`) and deploys to Cloudflare Workers with static assets.

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard, go to **Workers & Pages**, choose **Create**, then **Workers**, then **Import a repository**, and pick the repo.
3. Use these build settings:
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
   - Root directory: leave blank if the repo root is this folder, otherwise set it to the folder that contains `package.json`.
4. Under **Variables and Secrets**, add `RESEND_API_KEY` as a secret. Update the public values in `wrangler.jsonc` (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BOOKING_URL`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) and commit.
5. Save and deploy. Every push to the production branch redeploys. Other branches get preview URLs.
6. Add your custom domain under the Worker's **Settings**, then **Domains & Routes**.

To deploy manually from your machine instead, run `npx wrangler login` once, then `npm run deploy`.

## Where things live

- `src/lib/site.ts`: business name, tagline, verse, email, booking URL, social links, nav links, and the FAQ list.
- `src/lib/services.ts`: the six offers. Pricing is intentionally left off the site and discussed on the free call.
- `src/components/Logo.tsx`: temporary text logo. Swap the inner markup for your SVG when it is ready. The faded wordmark in `Footer.tsx` is plain text.
- `src/components/Testimonials.tsx`: hidden. Set `SHOW_TESTIMONIALS` to `true` and fill in the list to turn it on.
- `src/components/Reveal.tsx`: the scroll-in effect. Respects `prefers-reduced-motion`.
- `src/components/StepsTabs.tsx` and `AudienceTabs.tsx`: the interactive tab sections on the Home page.
- `src/components/BookingEmbed.tsx`: Cal.com or Calendly iframe, driven by `NEXT_PUBLIC_BOOKING_URL`.
- `src/app/api/contact/route.ts`: contact form handler that sends email through Resend.
- `src/app/globals.css`: colors, fonts, and the reveal animation. Italic accents inside headings use `<em>`.
- `src/app/icon.svg`: placeholder favicon. Replace with the real mark.
- `src/app/opengraph-image.tsx`: generated Open Graph image.
- `public/images/john-shirey.jpg`: founder headshot, used on the About page. Add this file.
- `public/images/*.svg`: placeholder backgrounds for the hero, closing call to action, contact form, audience block, and highlighted service card. Replace each with a real photo of the same name, or update the `src` in the component.

## Before launch checklist

- [ ] Add `public/images/john-shirey.jpg`
- [ ] Replace the placeholder images in `public/images`
- [ ] Update or remove the social links in `src/lib/site.ts`
- [ ] Set the real email in `src/lib/site.ts` and `CONTACT_TO_EMAIL`
- [ ] Set the real booking URL in `NEXT_PUBLIC_BOOKING_URL`
- [ ] Verify your sending domain in Resend and update `CONTACT_FROM_EMAIL`
- [ ] Replace the placeholder favicon and, later, the text logo
- [ ] Finalize the privacy policy wording in `src/app/privacy/page.tsx`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live domain
