<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex justify-center">
                <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg">
                    <div class="bg-white p-1 rounded-md">
                        <span
                            class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl">
                            Deepsite+Vercel
                        </span>
                    </div>
                </div>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Welcome back! Please sign in to continue.
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <LoginForm />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
</script>