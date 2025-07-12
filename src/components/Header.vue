<template>
    <div class="bg-gray-50 text-slate-800">
        <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 flex items-center">
                            <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg">
                                <div class="bg-white p-1 rounded-md">
                                    <span
                                        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-xl">Deepsite+Vercel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <router-link to="/"
                            :class="{ 'text-primary font-medium': $route.path === '/', 'text-gray-600 hover:text-primary': $route.path !== '/' }">Home</router-link>
                        <router-link to="/about"
                            :class="{ 'text-primary font-medium': $route.path === '/about', 'text-gray-600 hover:text-primary': $route.path !== '/about' }">About</router-link>
                        <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank"
                            class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition">Try
                            Deepsite</a>

                        <!-- Auth Buttons -->
                        <div v-if="!isAuthenticated" class="flex items-center space-x-4">
                            <router-link to="/auth/login" class="text-gray-600 hover:text-primary">
                                Sign In
                            </router-link>
                            <router-link to="/auth/register"
                                class="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg transition">
                                Sign Up
                            </router-link>
                        </div>

                        <!-- User Menu -->
                        <div v-else class="relative">
                            <button @click="userMenuOpen = !userMenuOpen"
                                class="flex items-center space-x-2 text-gray-600 hover:text-primary">
                                <img v-if="user?.user_metadata?.avatar_url" :src="user.user_metadata.avatar_url"
                                    :alt="user.user_metadata.full_name || 'User'" class="w-8 h-8 rounded-full">
                                <div v-else
                                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    {{ (user?.user_metadata?.full_name || user?.email || 'U').charAt(0).toUpperCase() }}
                                </div>
                                <span class="hidden sm:block">{{ user?.user_metadata?.full_name || user?.email }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <!-- Dropdown Menu -->
                            <div v-if="userMenuOpen"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <router-link to="/dashboard"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Dashboard
                                </router-link>
                                <router-link to="/profile"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profile
                                </router-link>
                                <hr class="my-1">
                                <button @click="handleSignOut"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Sign Out
                                </button>
                            </div>
                        </div>
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
                    <router-link to="/about" @click="mobileMenuOpen = false"
                        class="block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-white bg-primary': $route.path === '/about', 'text-gray-600 hover:bg-gray-100': $route.path !== '/about' }">About</router-link>
                    <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank"
                        class="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white">Try Deepsite</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)

const { user, isAuthenticated, signOut } = useAuth()

const handleSignOut = async () => {
    await signOut()
    userMenuOpen.value = false
}
</script>