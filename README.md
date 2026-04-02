# CramWiz — The AI Study Platform

Built with Next.js. Deploys to Vercel (free tier).

---

## DEPLOY TO VERCEL (Step by Step)

### Step 1 — Push to GitHub
1. Create a new repository on github.com (name it `cramwiz`)
2. Upload all these files to the repo
3. Make sure `.env.local` is NOT uploaded (it's in .gitignore — good)

### Step 2 — Connect to Vercel
1. Go to vercel.com → Sign up / Log in (free)
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework will be auto-detected as **Next.js**
5. Click "Deploy" — do NOT deploy yet, go to Step 3 first

### Step 3 — Add Environment Variables (IMPORTANT)
In Vercel project settings → Environment Variables, add these:

| Name | Value | Environments |
|------|-------|-------------|
| `ANTHROPIC_API_KEY` | `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` | Production, Preview, Development |
| `NEXT_PUBLIC_FORMSPREE_ID` | `mlgorbdr` | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | `https://your-app-name.vercel.app` | Production |

⚠️  IMPORTANT: The API key must be set BEFORE you deploy. It lives on the server — students never see it.

### Step 4 — Deploy
Click Deploy. Takes ~2 minutes. Your site will be live at `your-project.vercel.app`

---

## FIRST TIME AFTER DEPLOYMENT

1. Visit your live site
2. Log in as admin:
   - Email: `admin@cramwiz.com`
   - Password: `admin2024`
3. Go to Admin Panel
4. Generate access codes (1,000 are pre-loaded, you can generate more)
5. When a student pays, go to Admin Panel → Payment Submissions → Confirm & Send Code

---

## FILE STRUCTURE

```
cramwiz/
├── pages/
│   ├── index.js          ← Full app (all pages, all features)
│   ├── _app.js           ← App wrapper
│   ├── _document.js      ← HTML head (fonts, meta)
│   └── api/
│       └── ai.js         ← BACKEND: Secure API proxy (holds your API key)
├── public/
│   └── logo.png          ← CramWiz logo
├── styles/
│   └── globals.css       ← Global styles
├── package.json          ← Dependencies (Next.js 14)
├── next.config.js        ← Next.js config
├── .env.example          ← Template for env variables
├── .env.local            ← Local dev only (NEVER commit this)
└── .gitignore            ← Protects .env files from Git
```

---

## HOW THE BACKEND WORKS

The browser NEVER calls Anthropic directly. Every AI request goes:

```
Student browser → /api/ai (your Vercel server) → Anthropic API
```

The API key lives on the server in Vercel's environment variables.
It is never exposed to students or visible in the browser.

---

## ADMIN LOGIN
- Email: admin@cramwiz.com  
- Password: admin2024

Change admin password: Go to Admin Panel → there you can see admin details.
To change it, update `admin2024` in the source code (pages/index.js, search "admin2024").

---

## PAYMENT FLOW
1. Student clicks "Get Started" → sees your Moniepoint account details
2. They transfer ₦3,000 and upload receipt
3. You get notified via Formspree email
4. Log into admin panel → confirm payment → system assigns code
5. Your email client opens with the code pre-filled to send to the student
6. WhatsApp also opens as backup
7. Student registers with the code (code is locked to their email)
