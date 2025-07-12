# Deepsite + Vercel - Vue 3 + Vite Project

A modern Vue 3 + Vite project showcasing the integration of AI-generated websites with Vue.js and Vercel deployment.

## 🚀 Features

- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite** for lightning-fast development and building
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Vue Router** for client-side routing
- **Font Awesome** icons
- **Responsive design** with mobile-first approach

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── Header.vue      # Navigation component
│   ├── Footer.vue      # Footer component
│   ├── HeroSection.vue # Hero banner section
│   ├── ProcessSection.vue # Step-by-step process
│   ├── CTASection.vue  # Call-to-action section
│   └── AboutSection.vue # About page content
├── pages/              # Page components
│   ├── Home.vue        # Home page
│   └── About.vue       # About page
├── router/             # Vue Router configuration
├── assets/             # Static assets and styles
│   ├── main.css        # Main CSS with Tailwind imports
│   ├── custom.css      # Custom styles and animations
│   └── base.css        # Base styles
└── main.ts             # Application entry point
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Styling

- **Tailwind CSS v4** for utility classes
- **Custom CSS** for animations and specific styles
- **CSS Variables** for consistent theming
- **Responsive design** with mobile-first approach

## 📱 Components

### Header.vue

- Responsive navigation with mobile menu
- Vue Router integration for page navigation
- Active state styling

### HeroSection.vue

- Gradient background with animated blobs
- Terminal demo with animated code lines
- Call-to-action buttons

### ProcessSection.vue

- Step-by-step process cards with hover animations
- Terminal code example with staggered animations
- Detailed guide with numbered steps

### CTASection.vue

- Call-to-action with gradient background
- External links to Deepsite and Vercel

### AboutSection.vue

- About page content with illustration placeholder
- Feature highlights with icons
- Vision statement and team quote

### Footer.vue

- Comprehensive footer with links
- Resource and connect sections
- Branding with gradient logo

## 🔧 Customization

### Colors

Custom colors are defined in `src/assets/custom.css`:

- `--color-primary`: #6366f1 (indigo)
- `--color-secondary`: #8b5cf6 (violet)
- `--color-dark`: #1e293b (slate)

### Animations

- Blob animations for hero section
- Fade-in animations for code lines
- Hover effects for step cards
- Smooth page transitions

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📄 License

MIT License - feel free to use this project as a starting point for your own applications.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Ideal File Structure for the Source Folder

src/
├── assets/ # Images, fonts, global static files
├── components/ # Reusable components
│ └── common/ # Truly generic components (buttons, modals, etc.)
├── layouts/ # Layouts used in routes (MainLayout, AuthLayout, etc.)
├── pages/ # Route-level views (each corresponds to a route)
│ ├── Home.vue
│ ├── About.vue
│ └── auth/
│ ├── Login.vue
│ └── Register.vue
├── router/
│ ├── index.ts # Create router instance here
│ └── routes.ts # Define route configs here
├── store/ # Pinia or Vuex stores
├── composables/ # Reusable logic (useAuth.ts, useFetch.ts, etc.)
├── services/ # API services or external logic
├── types/ # TypeScript types/interfaces
├── App.vue # Root component
└── main.ts # Entry point
