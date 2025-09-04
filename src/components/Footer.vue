<template>
  <footer class="relative py-12 overflow-hidden transition-all duration-500 text-white">
    <!-- Dynamic background using primary colors -->
    <div 
      class="absolute inset-0 transition-all duration-500"
      :style="{
        background: isDark 
          ? 'linear-gradient(to bottom right, var(--color-dark) 0%, var(--color-dark-light) 100%)'
          : 'linear-gradient(to bottom right, var(--color-primary) 0%, var(--color-secondary) 100%)'
      }"
    ></div>

    <!-- Pattern overlay that adapts to mode -->
    <div class="absolute inset-0 opacity-20">
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

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-center lg:text-left">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <a href="/" class="block group">
            <div class="flex items-center justify-center lg:justify-start">
              <div
                class="p-1 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                :class="isDark 
                  ? 'bg-gradient-to-r from-white/20 to-white/10 border border-white/30' 
                  : 'bg-gradient-to-r from-primary to-secondary'"
              >
                <div 
                  class="backdrop-blur-sm p-1 rounded-md transition-all duration-300"
                  :class="isDark 
                    ? 'bg-transparent' 
                    : 'bg-white/10'"
                >
                  <span
                    class="font-bold text-xl transition-colors duration-500"
                    :class="isDark ? 'text-white' : 'text-white'"
                    >Instant Frontend</span
                  >
                </div>
              </div>
            </div>
          </a>
          <p class="mt-4 text-white/90 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Accelerating web development with AI-generated templates and instant deployment.
          </p>
        </div>

        <!-- Links Section -->
        <div class="lg:col-span-1">
          <div class="grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0">
            <div>
              <h5 class="text-xl font-medium mb-3 text-white/90">
                Resources
              </h5>
              <ul class="space-y-3">
                <li>
                  <a
                    href="https://huggingface.co/spaces/enzostvs/deepsite"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >Deepsite</a
                  >
                </li>
                <li>
                  <a
                    href="https://vuejs.org"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >Vue.js</a
                  >
                </li>
                <li>
                  <a
                    href="https://vitejs.dev"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >Vite</a
                  >
                </li>
                <li>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >Vercel</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-xl font-medium mb-3 text-white/90">
                Connect
              </h5>
              <ul class="space-y-3">
                <li>
                  <a
                    href="https://github.com/paddy-shrp"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >GitHub</a
                  >
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/patrick-schroeppel"
                    target="_blank"
                    class="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >LinkedIn</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="mt-4 pt-8 text-center text-white/70 backdrop-blur-sm">
        <p>© {{ new Date().getFullYear() }} Instant Frontend. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
</script>
