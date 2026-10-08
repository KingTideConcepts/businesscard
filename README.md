# King Tide Concepts — QR Digital Business Card & Splash Portal

A fast, zero-dependency, 100% static landing page designed for the QR code on **King Tide Concepts** business cards. Built to host effortlessly on **GitHub Pages**, **AWS S3 + CloudFront**, or Cloudflare Pages.

## ✨ Features

1. **"King Tide" Rising Wave Intro Animation (~2.2s)**
   - Deep abyssal navy backdrop with bioluminescent cyan (`#38eef8` / `#007c83`) and golden sand (`#d7b56d`) accents.
   - Three surging SVG wave layers cresting while the golden sun halo draws around the rising King Tide Trident emblem.
   - Smoothly unfolds into an interactive 3D glassmorphic digital business card.
2. **Prominent Main Website & Assessment CTAs**
   - Front-and-center **"Enter KingTideConcepts.com ↗"** button with animated sheen.
   - Secondary quick-action link to the **Business Momentum Assessment** (`/assessment`).
3. **One-Tap "Save to Contacts" (`.vcf` vCard Generator)**
   - Dynamically generates and downloads a standards-compliant `VCARD 3.0` `.vcf` contact card for iOS & Android with the active founder or company profile.
4. **Interactive 3D Card Flip & Direct Action Grid**
   - Tap **"Flip Card"** (or *"See how we work & QR ↻"*) to flip the card 180° in 3D space, revealing the 3 King Tide service pillars (*01 Chart the challenge*, *02 Build the system*, *03 Put it into motion*) and the embedded Trident QR code.
   - Direct tiles for **Email**, **Call / Connect**, **LinkedIn**, and **Instagram**.
5. **Personalized Team Member URLs (`?card=...`)**
   - Supports all 5 co-founders + the company default from a single static deployment:
     - `index.html` or `?card=ktc` — **King Tide Concepts** (Company Card)
     - `?card=harry` — **Harry Atwall** (Co-Founder · AI & ML)
     - `?card=mike` — **Mike Ramer** (Co-Founder · Operations)
     - `?card=jordan` — **Jordan Webb** (Co-Founder · Software & IT)
     - `?card=joe` — **Joe Soria** (Co-Founder · IT & Logistics)
     - `?card=don` — **Don Vasser** (Co-Founder · Strategy & Growth)

---

## 🔗 URL Query Parameters Reference

You can customize how any QR code behaves just by adding query parameters to the URL encoded in your QR code:

| Parameter | Example | Behavior |
| :--- | :--- | :--- |
| `card` | `?card=harry` | Loads Harry Atwall's personalized profile, bio, and `.vcf` contact card |
| `lock` | `?card=harry&lock=1` | Hides the bottom team member switcher bar (great for printed individual cards) |
| `redirect` | `?redirect=auto` | Automatically redirects to `https://www.kingtideconcepts.com` 4 seconds after the intro animation finishes (with a "Stay on Card" button) |
| `delay` | `?redirect=auto&delay=3` | Customizes the auto-redirect countdown in seconds |
| `phone` / `email` | `?card=harry&phone=910-555-0199` | Overrides phone number or email directly via URL |

---

## 🚀 Deploying to GitHub Pages or AWS S3

### Option A: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**, select your branch (`main`) and root folder (`/`), and click **Save**.

### Option B: AWS S3 Static Hosting
```bash
aws s3 sync . s3://your-bucket-name --exclude ".git/*" --exclude "README.md"
```
