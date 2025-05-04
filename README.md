# Rains Plastics LLC Website

## Overview

This is the official website for Rains Plastics LLC, built as a modern, mobile-responsive Single Page Application (SPA) using the Quasar Framework (Vue 3). It features smooth navigation, product and service showcases, a contact form with validation, and a custom design reflecting the company's brand.

---

## Tech Stack

- **Frontend Framework:** [Quasar Framework (Vue 3)](https://quasar.dev/)
- **UI Library:** [Quasar Components](https://quasar.dev/vue-components)
- **Routing:** [Vue Router 4](https://router.vuejs.org/)
- **Validation:** [Zod](https://zod.dev/)
- **Notifications:** [SweetAlert2](https://sweetalert2.github.io/)
- **Animations:** [@vueuse/motion](https://motion.vueuse.org/)
- **Email/Contact API:** [Express](https://expressjs.com/) + [Nodemailer](https://nodemailer.com/) (deployed as Vercel serverless functions)
- **Deployment:** [Vercel](https://vercel.com/)
- **Styling:** SCSS, Quasar variables, custom CSS

---

## Project Structure

```
├── api/                       # Serverless API endpoints (contact form)
├── public/                    # Static assets
├── src/
│   ├── assets/                # Images, icons, backgrounds
│   │   ├── forms/             # Form components (ContactForm.vue)
│   │   ├── home/              # Home page sections (Hero, Services, Showcase, etc.)
│   │   ├── layout/            # Layout components (Footer, etc.)
│   │   └── ...
│   ├── css/                   # Global and variable SCSS files
│   ├── layouts/               # MainLayout.vue (site shell, nav, footer)
│   ├── pages/                 # SPA pages (IndexPage.vue, ProductsPage.vue, etc.)
│   ├── router/                # Vue Router setup
│   └── ...
├── .env                       # Environment variables (email, secrets)
├── package.json               # Project scripts and dependencies
├── quasar.config.js           # Quasar configuration
├── vercel.json                # Vercel deployment config
└── README.md                  # This file
```

---

## Key Features

- **Mobile-First Design:** Fully responsive, optimized for all devices
- **Modern Navigation:** Smooth scroll, mobile drawer, social icons
- **Product & Service Showcases:** Animated, filterable, and visually rich
- **Contact Form:** Validated, with API integration and user feedback
- **Custom Theming:** Brand colors, custom SCSS, and Quasar variable overrides
- **Serverless API:** Contact form handled via Vercel serverless functions
- **SEO & Accessibility:** Semantic HTML, accessible components

---

## Setup & Development

### Prerequisites

- Node.js v18+
- npm v8+

### 1. Install dependencies

```
npm install
```

### 2. Development server

```
npm run dev
```

Visit [http://localhost:9000](http://localhost:9000) to view the app.

### 3. Lint & format

```
npm run lint
npm run format
```

### 4. Build for production

```
npm run build
```

### 5. Vercel deployment (build & output)

```
npm run vercel-build
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
TRANSPORTER_EMAIL=your_gmail_address@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
BUSINESS_EMAIL=your_business_email@example.com
NODE_ENV=development
```

---

## Deployment

- **Vercel:** The project is configured for Vercel with `vercel.json` and a custom `vercel-build` script.
- **API:** The `/api/contact` endpoint is deployed as a serverless function for handling contact form submissions.

---

## Customization

- **Brand Colors:** Edit `src/css/quasar.variables.scss` and `src/css/app.scss` for color/theme changes.
- **Assets:** Place images/icons in `src/assets/images/`.
- **Navigation:** Update `src/layouts/MainLayout.vue` for nav structure.
- **Footer:** Edit `src/components/layout/TheFooter.vue` for footer content.

---

## Contact

For questions or support, contact the site admin at the business email specified in `.env`.

---

## License

This project is proprietary to Rains Plastics LLC. All rights reserved.
