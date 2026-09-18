# Six33 Consulting

Marketing website for Six33 Consulting, a ministry and leadership consulting business for church leaders.

Positioning: **Faith First. Family Second. Ministry Third.** Three consulting areas (worship leadership coaching, worship production and systems, ministry leader and church systems) and a four-step service ladder. Pricing is intentionally kept off the site and discussed on the intro call.

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

- `src/lib/site.ts`: business name, tagline, verse, email, booking URL, social links, nav links, the FAQ list, and `heroHeadlines` (three approved hero headline options; `src/components/Hero.tsx` picks the index).
- `src/lib/services.ts`: `coreAreas` (the three consulting areas), `engagements` (the four-step service ladder), `resetWeeks` (the Ministry Reset weeks, also used by the "how it works" tabs), `solution` (Clarity / Systems / People / Rhythms / Sustainability), and `shifts` (overwhelmed to organized). Pricing is intentionally left out and discussed on the intro call.
- `src/lib/audiences.ts`: the four audiences, shared by `AudienceTabs.tsx` and the Who We Serve page so the anchors stay in sync.
- `src/app/packet/page.tsx`: the client-facing offerings packet at `/packet`. Not linked in the nav and excluded from the sitemap and robots.txt, so it is a link you send rather than a page people stumble onto. The "Print or save as PDF" button uses print styles at the bottom of `globals.css`.
- `src/components/Problem.tsx`, `Solution.tsx`, `CoreAreas.tsx`: the problem, solution, and three-areas sections on the home page.
- `src/components/Pillars.tsx`: the Six33 framework (Faith / Family / Ministry). Exports `framework`, which the packet also uses.
- `src/components/Logo.tsx` and `LogoMark.tsx`: the logo lockup and the seek-first chevron mark. Standalone copies live at `public/logo.svg` and `public/logo-mark.svg`. The faded wordmark in `Footer.tsx` is plain text.
- `src/components/Testimonials.tsx`: hidden. Set `SHOW_TESTIMONIALS` to `true` and fill in the list to turn it on.
- `src/components/Reveal.tsx`: the scroll-in effect. Respects `prefers-reduced-motion`.
- `src/components/StepsTabs.tsx` and `AudienceTabs.tsx`: the interactive tab sections on the Home page.
- `src/components/BookingEmbed.tsx`: Cal.com or Calendly iframe, driven by `NEXT_PUBLIC_BOOKING_URL`.
- `src/app/api/contact/route.ts`: contact form handler that sends email through Resend.
- `src/app/globals.css`: colors, fonts, and the reveal animation. Italic accents inside headings use `<em>`.
- `src/app/icon.svg`: favicon built from the mark.
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
- [ ] Finalize the privacy policy wording in `src/app/privacy/page.tsx`
- [ ] Decide whether the packet at `/packet` should stay unlisted or get a footer link
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live domain
