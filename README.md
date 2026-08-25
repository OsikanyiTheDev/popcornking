<div align="center">

# 🍿 POPCORN KING Ghana

**Fresh Popcorn. Big Moments.**

[![Live Web App](https://img.shields.io/badge/Live_Site-popcornkingghana.web.app-FFC800?style=for-the-badge&logo=firebase&logoColor=black)](https://popcornkingghana.web.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<p align="center">
  The official digital storefront, live event catering booking platform, and interactive flavour menu for <strong>POPCORN KING Ghana</strong> (Accra).
</p>

</div>

---

## 🌟 Key Features

- **👑 Signature Gourmet Flavours**: Handcrafted recipes including *Sweet Caramel Glaze, Cinema Classic Sea Salt, Premium Ghanaian Cocoa Chocolate, Milky Way, and Party Rainbow*.
- **🎪 Live Event & Cart Catering**: Instant catering packages for weddings, birthday parties, corporate retreats, campus festivals, and VIP summits across Greater Accra.
- **⚡ Instant Event Budget Calculator**: Real-time pricing calculator for party sizes (50 to 500+ guests) with custom add-ons (branded packaging, extra attendant, multiple carts).
- **🛍️ Retail & Bulk Ordering**: Fast cart drawer with direct WhatsApp instant checkout (`+233 55 099 9008`) and custom bulk quotation inquiries.
- **✨ AI Flavor Concierge**: Smart conversational recommendation assistant powered by Google Gemini to help guests match flavours to their event vibe or dietary preferences.
- **📄 Printable Visual Menu**: High-resolution print modal with downloadable flyers and ingredient breakdowns.
- **📍 Accra Pickup & Delivery Locator**: Details for pickup hubs (East Legon, Osu, Spintex, Airport City) and nationwide logistics.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) + [esbuild](https://esbuild.github.io/)
- **Backend / API**: Express.js (`server.ts`) + `@google/genai` (Gemini API for AI Concierge)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- (Optional) [Firebase CLI](https://firebase.google.com/docs/cli) for hosting deployments

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/popcorn-king-ghana.git
cd popcorn-king-ghana
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables (Optional for AI Concierge)
Create a `.env` file in the project root:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the app.

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```
This compiles the frontend assets into `/dist` and bundles `server.ts` into `/dist/server.cjs`.

### Deploy to Firebase Hosting
```bash
# 1. Login to Firebase CLI
firebase login

# 2. Select project (if multiple projects exist)
firebase use popcornkingghana

# 3. Deploy hosting files
firebase deploy --only hosting
```

Your app will be live at:
- `https://popcornkingghana.web.app`
- `https://popcornkingghana.firebaseapp.com`

---

## 📂 Project Structure

```
├── public/                 # Static public assets (favicons, manifest)
├── src/
│   ├── assets/             # Brand logos, flyers & high-res event photography
│   ├── components/         # Modular React UI components (Hero, Cart, Catering, etc.)
│   ├── data/               # Products, pricing tiers, FAQs, reviews, and pickup hubs
│   ├── types.ts            # Shared TypeScript interfaces
│   ├── main.tsx            # React application entry point
│   └── index.css           # Global Tailwind styling
├── api/                    # Serverless/API proxy routes
├── server.ts               # Express development & production server + Gemini API proxy
├── firebase.json           # Firebase Hosting configuration & rewrites
└── package.json            # Project dependencies & build scripts
```

---

## 📞 Contact & Socials

- **WhatsApp / Phone**: [+233 55 099 9008](https://wa.me/233550999008)
- **Email**: [jillskillion@gmail.com](mailto:jillskillion@gmail.com)
- **Facebook**: [Popcorn King Facebook Page](https://www.facebook.com/profile.php?id=61593377867403)
- **Location**: Accra, Greater Accra Region, Ghana 🇬🇭

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
