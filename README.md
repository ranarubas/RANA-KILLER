# Majestic Arabian

Premium pet lifestyle storefront built with **Next.js 14 (App Router), React, TypeScript and Tailwind CSS**.
Runs on a local mock catalogue today and is structured to switch to the **Shopify Storefront API** without frontend changes.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Requires Node 18.18 or newer. Copy `.env.example` to `.env.local` if you want to change settings.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Majestic Arabian storefront"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/majestic-arabian.git
git push -u origin main
```

## Deploy on Vercel

1. Go to vercel.com, choose **Add New > Project** and import the GitHub repository.
2. Framework is detected as Next.js. Leave build settings as they are.
3. Add the variables from `.env.example` under **Settings > Environment Variables** (at minimum `NEXT_PUBLIC_SITE_URL`).
4. Click **Deploy**. Add your domain under **Settings > Domains**.

## Project structure

```
app/                  routes: home, collections/[handle], products/[handle], pages/[slug], cart, search, api/*
components/layout     header, mega menu, mobile menu, footer, cart drawer, search overlay
components/product    product card, gallery, purchase box, quick view, FBT, recently viewed, cart view
components/sections   home page sections
components/collection filters, sorting, mobile filter drawer
components/ui         icons, accordion, stars, price, quantity selector...
lib/commerce          data access layer (mock catalogue or Shopify)
lib/data              mock products, collections, navigation, policy pages, sample reviews
lib/config.ts         brand settings (currency, free shipping threshold, social links)
```

## Connecting Shopify later

Set `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` (create a Storefront API token in a Shopify custom app).
When both exist, `lib/commerce` reads products and collections from Shopify and `/api/checkout` creates a Shopify cart and redirects to its checkout.
Create Shopify collections with the handles `dog`, `cat`, `pet-care`, `pet-accessories`, `smart-pets`, `best-sellers`, `new-arrivals`, and tag products with `dog` / `cat`.
The Shopify adapter (`lib/commerce/shopify.ts`) was written against the documented API but has not been run against a live store. Test it on a development store first.
Ratings need a review app (Judge.me, Loox...). Map its data in `mapProduct`.

## Before you launch

- **Images:** all photos are placeholders from Unsplash (`lib/images.ts`). Replace them with your own licensed photos.
- **Products:** `lib/data/products.ts` names, prices, ratings and review counts are placeholders.
- **Reviews:** the sample reviews are labelled on the page. Set `NEXT_PUBLIC_SHOW_SAMPLE_REVIEWS=false` to hide them. Never publish invented reviews as real.
- **Legal pages:** Privacy, Terms, Returns and Impressum contain starter text. Have them reviewed. Shops serving Germany need a complete Impressum and a correct withdrawal (14-day) notice.
- **Newsletter:** set `NEWSLETTER_WEBHOOK_URL` (Zapier, Make, Klaviyo...). Without it, sign-ups show an error in production.
- **Contact form** opens the visitor's email app (`NEXT_PUBLIC_SUPPORT_EMAIL`). Replace with a form service if you prefer.
- **Free shipping threshold:** `NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD` (default 60, in euros).
