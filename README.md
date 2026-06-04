# TAIW — TrainAIWorld

**Smart Auto-Apply Platform for AI Trainers**

> ⚡ **Live Demo**: Deployed on Vercel

A modern, fully interactive demo website for TAIW (TrainAIWorld) — a platform that helps AI Trainers discover opportunities on top platforms (Outlier, Scale AI, Surge AI, Micro1, etc.) and submit high-quality, personalized applications in seconds using intelligent auto-generation.

## ✨ Key Features (Fully Functional Demo)

- **Smart Auto-Apply Engine**: Click any job → fill quick profile → AI generates contextual, professional application text tailored to job type (Reasoning, RLHF, Data Quality, STEM). Editable output + one-click submit.
- **Advanced Job Discovery**: Real-time search + category filters (High-Pay Reasoning, RLHF & Alignment, Data Quality). 8 curated high-quality opportunities.
- **My Applications Tracker**: Persistent demo dashboard (localStorage). View, update status (Pending → Reviewed → Hired), withdraw, and re-view generated text.
- **Professional Onboarding**: Complete signup flow that creates a demo user session and unlocks personalized features.
- **Responsive & Polished UX**: Mobile-first navigation, beautiful modals, toast notifications, keyboard shortcuts (`/` to focus search, `ESC` to close modals).
- **Production-Ready Structure**: Clean Tailwind + vanilla JS. Easy to host on Vercel, Netlify, or GitHub Pages.

## Tech Stack
- Pure HTML + Tailwind CSS (CDN) + Font Awesome
- Vanilla JavaScript (no build step required)
- localStorage for demo persistence

## Live Deployment

This project is automatically deployed on **Vercel**.

**Production URL**: Check your Vercel Dashboard for the latest deployment URL.

## One-Click Deployment to Vercel (Recommended)

This project is optimized for instant deployment on Vercel:

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click **"Import GitHub Repository"**
3. Select the repository `Cladius-Weinert/taiw-trainaiworld`
4. Click **Deploy**

Vercel will automatically detect it as a static site and give you a live URL in under 2 minutes.

Every future push to `main` will trigger automatic redeployment.

## Getting Started (Local)

1. Clone or download the repository
2. Open `index.html` directly in any modern browser
3. (Optional) For live reload during development, use a simple server:
   ```bash
   npx serve .
   ```

## How to Use the Demo
1. Browse jobs and use the search bar + filter chips.
2. Click **Smart Apply** on any opportunity.
3. Fill (or edit) your profile details → click **Generate Personalized Application**.
4. Review/edit the generated text → **Submit Application**.
5. Open **My Applications** (navbar) to track status and manage submissions.
6. Create a free account via **Join as Trainer** to personalize the experience.

## Project Status
This is a **fully functional, production-quality demo** ready for:
- Client presentations
- Portfolio / case study
- Further development into a real SaaS

---

Built with care for the AI Trainer community. Ready to scale.