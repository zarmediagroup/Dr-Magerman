# Dr Magerman — GP Practice Website

A professional, SEO-optimised Next.js 14 website for **Dr Magerman General Practice**, Athlone, Cape Town.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS variables
- **Animations**: Framer Motion
- **Forms**: React Hook Form + EmailJS
- **SEO**: Next.js Metadata API + JSON-LD structured data
- **Fonts**: Google Fonts — Playfair Display + DM Sans
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Getting Started

### 1. Install Dependencies

```bash
cd dr-magerman
npm install
```

### 2. Configure EmailJS

The contact form sends emails directly via EmailJS (no backend required).

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Add a **Gmail service** → Connect to `drmagerman@gmail.com`
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — Sender's full name
   - `{{from_email}}` — Sender's email address
   - `{{phone}}` — Sender's phone number
   - `{{reason}}` — Reason for contact
   - `{{message}}` — Message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**

### 3. Create `.env.local`

```bash
cp .env.local.example .env.local
```

Then fill in your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ **Never commit `.env.local` to version control.**

### 4. Update Practice Details

Replace all placeholder values in the codebase:

| Placeholder | Replace With |
|-------------|-------------|
| `[Practice Address]` | Full street address |
| `[Practice Street Address]` | Street address in JSON-LD |
| `+27 XX XXX XXXX` | Real phone number |
| `+27XXXXXXXXX` | Phone number (no spaces, for links) |
| `[XXXXXXXX]` | HPCSA registration number |
| `[Registration Number]` | HPCSA number in footer |
| `info@drmagerman.co.za` | Real email address |

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
/app
  layout.tsx          ← Global metadata, fonts, JSON-LD, navbar, footer
  page.tsx            ← Home page
  about/page.tsx      ← About Dr Magerman
  services/page.tsx   ← All GP services
  faq/page.tsx        ← FAQ accordion
  contact/page.tsx    ← Contact form + map
  appointments/page.tsx ← Booking options
  sitemap.ts          ← XML sitemap
  robots.ts           ← Robots.txt
/components
  Navbar.tsx          ← Sticky navbar with mobile hamburger
  Footer.tsx          ← 4-column footer
  FloatingCTA.tsx     ← WhatsApp floating button
  HeroSection.tsx     ← Hero with framer motion
  TrustBar.tsx        ← Trust indicators bar
  ServiceCard.tsx     ← Reusable service card
  TestimonialCarousel.tsx ← Auto-rotating testimonials
  FAQAccordion.tsx    ← Animated FAQ accordion
  ContactForm.tsx     ← EmailJS contact form
/styles
  globals.css         ← CSS variables and base styles
/public
  favicon.ico         ← Add your favicon here
  og-image.jpg        ← 1200×630px Open Graph image (add your own)
```

---

## Deployment to Vercel

1. Push the repository to GitHub
2. Go to [https://vercel.com](https://vercel.com) → New Project → Import your repo
3. Add your **Environment Variables** in Vercel project settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Deploy — Vercel will automatically detect Next.js

### Custom Domain Setup

1. In Vercel project settings → **Domains** → Add `drmagerman.co.za`
2. Update your DNS records at your domain registrar:
   - Add a `CNAME` record: `www` → `cname.vercel-dns.com`
   - Add an `A` record: `@` → `76.76.21.21`

---

## SEO Checklist

- [x] Metadata titles and descriptions on all pages
- [x] Open Graph tags for social sharing
- [x] JSON-LD structured data (MedicalBusiness schema)
- [x] Sitemap.xml at `/sitemap.xml`
- [x] Robots.txt at `/robots.txt`
- [x] Canonical URLs
- [x] All images have descriptive `alt` attributes
- [x] Semantic HTML throughout
- [x] Next/Image for optimised images
- [ ] Add your real OG image at `/public/og-image.jpg` (1200×630px)
- [ ] Submit sitemap to Google Search Console

---

## Accessibility

- Skip-to-content link
- ARIA labels on all icon buttons
- Focus rings on all interactive elements
- Form fields with associated `<label>` elements
- Colour contrast ≥ 4.5:1 throughout
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`)

---

## Customisation

### Update Phone Numbers

Search for `+27XXXXXXXXX` and `+27 XX XXX XXXX` across the project and replace with the real number.

### Update WhatsApp Link

In `components/FloatingCTA.tsx` and `app/appointments/page.tsx`, update the `wa.me` URL.

### Update Google Maps Embed

In `app/contact/page.tsx`, replace the Google Maps `src` with the actual embed URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search for the practice address
3. Click **Share** → **Embed a map** → Copy the `src` URL

### Add Real Doctor Photo

Replace the Unsplash placeholder URLs with real doctor photos:

```tsx
// Replace:
src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800"

// With:
src="/images/dr-magerman.jpg"  // Place image in /public/images/
```

---

## Support

Built for Dr Magerman General Practice — Athlone, Cape Town.
