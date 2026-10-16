# Akshay Photography — React + Vite

A responsive photography portfolio website with a cinematic hero, editorial black/gold + ivory styling, filtered masonry gallery, image lightbox, Instagram links, and WhatsApp enquiry CTA.

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Before showing to the client

1. In `src/App.jsx`, replace `91XXXXXXXXXX` in `whatsappNumber` with Akshay's WhatsApp number, including country code and digits only. Example format: `919876543210`.
2. Replace the temporary Unsplash images with photographs Akshay has approved for use. The current images are visual placeholders and must not be represented as his own work.
3. Confirm the business name, services, contact details, location, and Instagram handle with the client.
4. Update the page title and SEO description in `index.html` if needed.
5. Test all image URLs, WhatsApp CTA, Instagram link, and the production build before deployment.

## Project structure

```text
akshay-photography/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

Images load from Unsplash over the internet. An internet connection is required for those images and Google Fonts.
