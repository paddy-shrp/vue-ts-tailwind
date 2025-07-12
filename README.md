# vue-project

This template should help get you started developing with Vue 3 in Vite.

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
