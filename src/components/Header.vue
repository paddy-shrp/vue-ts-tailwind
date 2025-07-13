<template>
    <div class="bg-gray-50 text-slate-800">
        <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="block">
                            <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg">
                                <div class="bg-white p-1 rounded-md">
                                    <span
                                        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-xl">Instant
                                        Frontend</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <router-link to="/"
                            :class="{ 'text-primary font-medium': $route.path === '/', 'text-gray-600 hover:text-primary': $route.path !== '/' }">Home</router-link>
                        <a href="#process" class="text-gray-600 hover:text-primary transition">Process</a>
                        <a href="https://github.com/paddy-shrp/vue-ts-tailwind" target="_blank"
                            class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Get Template
                        </a>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 hover:text-primary">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <router-link to="/" @click="mobileMenuOpen = false"
                        class="block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-white bg-primary': $route.path === '/', 'text-gray-600 hover:bg-gray-100': $route.path !== '/' }">Home</router-link>
                    <a href="#process" @click="mobileMenuOpen = false"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100">Process</a>
                    <a href="https://github.com/paddy-shrp/vue-ts-tailwind" target="_blank"
                        class="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Get Template
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>