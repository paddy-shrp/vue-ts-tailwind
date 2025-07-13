<template>
    <footer
        class="relative bg-gradient-to-br from-pink-700 via-purple-800 to-secondary-dark text-white py-12 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-20">
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]">
            </div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-center lg:text-left">
                <!-- Brand Section -->
                <div class="lg:col-span-1">
                    <a href="/" class="block group">
                        <div class="flex items-center justify-center lg:justify-start">
                            <div
                                class="bg-gradient-to-r from-pink-400 to-purple-500 p-1 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <div class="bg-white/10 backdrop-blur-sm p-1 rounded-md">
                                    <span
                                        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 text-xl">Instant
                                        Frontend</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <p class="mt-4 text-pink-100 max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Accelerating web development with AI-generated templates and instant deployment.
                    </p>
                </div>

                <!-- Links Section -->
                <div class="lg:col-span-1">
                    <div class="grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0">
                        <div>
                            <h5
                                class="text-xl font-medium mb-3 text-pink-100 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text">
                                Resources</h5>
                            <ul class="space-y-3">
                                <li>
                                    <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Deepsite</a>
                                </li>
                                <li>
                                    <a href="https://vuejs.org" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Vue.js</a>
                                </li>
                                <li>
                                    <a href="https://vitejs.dev" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Vite</a>
                                </li>
                                <li>
                                    <a href="https://vercel.com" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">Vercel</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h5
                                class="text-xl font-medium mb-3 text-pink-100 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text">
                                Connect</h5>
                            <ul class="space-y-3">
                                <li>
                                    <a href="https://github.com/paddy-shrp" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/patrick-schroeppel" target="_blank"
                                        class="text-pink-200 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Copyright Section -->
            <div class="mt-12 pt-8 border-t border-pink-400/30 text-center text-pink-200 backdrop-blur-sm">
                <p>© {{ new Date().getFullYear() }} Instant Frontend. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Footer component logic
</script>