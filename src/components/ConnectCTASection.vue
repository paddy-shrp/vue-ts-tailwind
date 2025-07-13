<template>
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Join thousands of developers who are already using our template to create stunning
          websites. Get started today and deploy your project in minutes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="text-center">
          <div
            class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p class="text-gray-600">
            Get up and running in under 5 minutes with our optimized template.
          </p>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Production Ready</h3>
          <p class="text-gray-600">
            Built with best practices and ready for deployment to any platform.
          </p>
        </div>
      </div>

      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold mb-4">Start Building Today</h3>
            <p class="text-gray-600 mb-6">
              Don't wait to bring your ideas to life. Our template provides everything you need to
              create professional frontend with Vue 3, TypeScript, and Tailwind CSS.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Vue 3 with Composition API</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">TypeScript for type safety</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Tailwind CSS for styling</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Ready for deployment</span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <a
              href="https://github.com/paddy-shrp/vue-ts-tailwind"
              target="_blank"
              class="block w-full bg-gray-900 text-white text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span>View on GitHub</span>
              </div>
            </a>

            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/paddy-shrp/vue-ts-tailwind"
              target="_blank"
              class="block w-full bg-primary text-white text-center py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
                <span>Deploy on Vercel</span>
              </div>
            </a>

            <div class="text-center">
              <p class="text-sm text-gray-500">Or use the command line:</p>
              <div class="bg-gray-900 text-green-400 p-3 rounded-lg mt-2 font-mono text-sm">
                npx degit paddy-shrp/vue-ts-tailwind my-project
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Connect with me</h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just chatting about
          tech. Let's connect and build something amazing together!
        </p>
        <div class="flex justify-center space-x-8">
          <a
            href="https://github.com/paddy-shrp"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
            aria-label="GitHub"
          >
            <svg class="w-12 h-12 text-gray-800 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="text-lg font-semibold text-gray-900">GitHub</span>
            <span class="text-sm text-gray-600 mt-1">@paddy-shrp</span>
          </a>
          <a
            href="https://linkedin.com/in/patrick-schroeppel"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
            aria-label="LinkedIn"
          >
            <svg class="w-12 h-12 text-blue-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            <span class="text-lg font-semibold text-gray-900">LinkedIn</span>
            <span class="text-sm text-gray-600 mt-1">Patrick Schroeppel</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
