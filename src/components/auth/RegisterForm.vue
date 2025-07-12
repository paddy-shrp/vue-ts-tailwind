<template>
    <div class="max-w-md mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Full Name Field -->
            <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <input id="fullName" v-model="fullName" type="text" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.fullName }" placeholder="Enter your full name" />
                <p v-if="errors.fullName" class="mt-1 text-sm text-red-600">{{ errors.fullName }}</p>
            </div>

            <!-- Email Field -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <input id="email" v-model="email" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.email }" placeholder="Enter your email" />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <!-- Password Field -->
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <input id="password" v-model="password" type="password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.password }" placeholder="Create a password" />
                <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>

            <!-- Confirm Password Field -->
            <div>
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                </label>
                <input id="confirmPassword" v-model="confirmPassword" type="password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.confirmPassword }" placeholder="Confirm your password" />
                <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-center">
                <input id="terms" v-model="acceptTerms" type="checkbox" required
                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="terms" class="ml-2 block text-sm text-gray-700">
                    I agree to the
                    <a href="#" class="text-primary hover:text-primary-dark">Terms of Service</a>
                    and
                    <a href="#" class="text-primary hover:text-primary-dark">Privacy Policy</a>
                </label>
            </div>

            <!-- Error Message -->
            <div v-if="authError" class="bg-red-50 border border-red-200 rounded-md p-4">
                <p class="text-sm text-red-600">{{ authError }}</p>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="loading"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="loading" class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    Creating account...
                </span>
                <span v-else>Create Account</span>
            </button>

            <!-- OAuth Providers -->
            <div class="mt-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300" />
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-3">
                    <button type="button" @click="signUpWithGoogle" :disabled="loading"
                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg class="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span class="ml-2">Google</span>
                    </button>

                    <button type="button" @click="signUpWithGithub" :disabled="loading"
                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span class="ml-2">GitHub</span>
                    </button>
                </div>
            </div>

            <!-- Links -->
            <div class="text-center">
                <p class="text-sm text-gray-600">
                    Already have an account?
                    <router-link to="/auth/login" class="font-medium text-primary hover:text-primary-dark">
                        Sign in
                    </router-link>
                </p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useDatabase } from '@/composables/useDatabase'

const { signUp, signInWithProvider, loading, error: authError } = useAuth()
const { createProfile } = useDatabase()

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const errors = ref<{ fullName?: string; email?: string; password?: string; confirmPassword?: string }>({})

const validateForm = () => {
    errors.value = {}

    if (!fullName.value.trim()) {
        errors.value.fullName = 'Full name is required'
    }

    if (!email.value) {
        errors.value.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errors.value.email = 'Please enter a valid email address'
    }

    if (!password.value) {
        errors.value.password = 'Password is required'
    } else if (password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters'
    }

    if (!confirmPassword.value) {
        errors.value.confirmPassword = 'Please confirm your password'
    } else if (password.value !== confirmPassword.value) {
        errors.value.confirmPassword = 'Passwords do not match'
    }

    if (!acceptTerms.value) {
        errors.value.confirmPassword = 'You must accept the terms and conditions'
    }

    return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
    if (!validateForm()) return

    const { data, error } = await signUp(email.value, password.value, fullName.value)

    if (!error && data?.user) {
        // Create user profile
        await createProfile({
            id: data.user.id,
            email: data.user.email!,
            full_name: fullName.value,
            avatar_url: null
        })

        // Redirect to dashboard or home page
        window.location.href = '/'
    }
}

const signUpWithGoogle = async () => {
    await signInWithProvider('google')
}

const signUpWithGithub = async () => {
    await signInWithProvider('github')
}
</script>