<template>
  <section class="relative overflow-hidden">
    <!-- Dynamic background using theme colors -->
    <div
      class="absolute inset-0 transition-all duration-500"
      :style="{
        background: isDark 
          ? 'linear-gradient(to bottom right, var(--color-dark) 0%, var(--color-dark-light) 50%, var(--color-foreground) 100%)'
          : 'linear-gradient(to bottom right, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-secondary-dark) 100%)'
      }"
    ></div>
    
    <!-- Pattern overlay that adapts to mode -->
    <div class="absolute inset-0 opacity-40">
      <div
        class="absolute top-0 left-0 w-full h-full transition-all duration-500"
        :style="{
          backgroundImage: isDark 
            ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <div class="md:w-1/2">
          <h1 
            class="text-4xl md:text-5xl font-bold leading-tight mb-6 transition-colors duration-500"
            :class="isDark ? 'text-white drop-shadow-lg' : 'text-white drop-shadow-lg'"
          >
            Build Professional Frontends Instantly
          </h1>
          <p 
            class="text-xl mb-8 transition-colors duration-500"
            :class="isDark ? 'text-white/90 drop-shadow-md' : 'text-white/90 drop-shadow-md'"
          >
            See the complete process of creating stunning frontends with AI tools and deploying them
            instantly. This site demonstrates the Instant Frontend workflow using our Vue 3 +
            TypeScript + Tailwind template with built-in dark mode support.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="#process"
              class="backdrop-blur-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl bg-white/20 text-white hover:bg-white/30 border border-white/30"
            >
              See the Process
            </a>
            <a
              href="https://github.com/paddy-shrp/vue-ts-tailwind"
              target="_blank"
              class="font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm shadow-lg hover:shadow-xl border-2 border-white/50 text-white hover:bg-white/10"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              Get the Template
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="relative flex flex-col items-start justify-center space-y-8">
              <!-- Step 1: Generate -->
              <div class="flex items-center space-x-4 group">
                <div
                  class="backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-lg shadow-2xl aspect-square transition-all duration-300 w-16 h-16 bg-white/10 text-white border border-white/30"
                >
                  1
                </div>
                <div>
                  <span class="font-semibold text-base block mb-1 text-white drop-shadow-md">
                    Generate
                  </span>
                  <span class="text-sm text-white/80 drop-shadow-sm">
                    Use Deepsite AI to generate your frontend's HTML structure in seconds.
                  </span>
                </div>
              </div>

              <!-- Arrow -->
              <div class="flex flex-col items-center ml-8">
                <div class="w-0.5 h-8 animate-pulse bg-white/60"></div>
              </div>

              <!-- Step 2: Develop -->
              <div class="flex items-center space-x-4 group">
                <div
                  class="backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-lg shadow-2xl aspect-square transition-all duration-300 w-16 h-16 bg-white/10 text-white border border-white/30"
                >
                  2
                </div>
                <div>
                  <span class="font-semibold text-base block mb-1 text-white drop-shadow-md">
                    Develop
                  </span>
                  <span class="text-sm text-white/80 drop-shadow-sm">
                    Refine, style, and enhance your frontend with Vue 3, TypeScript, and Tailwind
                    CSS.
                  </span>
                </div>
              </div>

              <!-- Arrow -->
              <div class="flex flex-col items-center ml-8">
                <div class="w-0.5 h-8 animate-pulse bg-white/60"></div>
              </div>

              <!-- Step 3: Deploy -->
              <div class="flex items-center space-x-4 group">
                <div
                  class="backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-lg shadow-2xl aspect-square transition-all duration-300 w-16 h-16 bg-white/10 text-white border border-white/30"
                >
                  3
                </div>
                <div>
                  <span class="font-semibold text-base block mb-1 text-white drop-shadow-md">
                    Deploy
                  </span>
                  <span class="text-sm text-white/80 drop-shadow-sm">
                    Launch your frontend instantly to Vercel or your favorite platform.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
</script>
