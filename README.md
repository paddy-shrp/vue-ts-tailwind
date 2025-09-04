# Vue 3 + TypeScript + Tailwind Template

A modern Vue 3 project with TypeScript, Tailwind CSS, and Vite for rapid frontend development.

For a visual walkthrough and live showcase of this template, check out the tutorial site:  
https://vue-ts-tailwind-frontend.vercel.app/

## 🚀 Quick Start

```bash
# Clone the template
npx degit paddy-shrp/vue-ts-tailwind my-project

# Navigate to project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Vue components
├── pages/              # Page components
├── router/             # Vue Router configuration
├── assets/             # Static assets and styles
└── main.ts             # Application entry point
```

## 🎨 Features

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vue Router** for navigation
- **Vite** for fast development
- **Responsive design**

## 🐳 Docker Support

This project includes full Docker support for both development and production environments.

### Development with Docker

```bash
# Start development server in Docker
docker-compose --profile dev up --build

# Or run individual commands
docker build -f Dockerfile.dev -t vue-app-dev .
docker run -p 5173:5173 -v $(pwd):/app vue-app-dev
```

### Production with Docker

```bash
# Build and run production container
docker-compose --profile prod up --build

# Or run individual commands
docker build -t vue-app .
docker run -p 80:80 vue-app

# Run on custom port
docker run -p 3000:80 vue-app
```

### Docker Commands

```bash
# Build production image
docker build -t vue-app .

# Build development image
docker build -f Dockerfile.dev -t vue-app-dev .

# Run production container
docker run -p 80:80 vue-app

# Run development container
docker run -p 5173:5173 -v $(pwd):/app vue-app-dev

# Stop all containers
docker-compose down

# View logs
docker-compose logs -f
```

## 🚀 Deployment

Deploy to Vercel, Netlify, or any platform with zero configuration. For containerized deployments, use the provided Dockerfile with any container orchestration platform like Kubernetes, Docker Swarm, or cloud container services.

## 📄 License

MIT License
