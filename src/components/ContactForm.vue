<template>
    <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <input id="name" v-model="form.name" type="text" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.name }" placeholder="Enter your full name" />
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <input id="email" v-model="form.email" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.email }" placeholder="Enter your email address" />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <!-- Message Field -->
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Message
                </label>
                <textarea id="message" v-model="form.message" rows="4" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    :class="{ 'border-red-500': errors.message }"
                    placeholder="Tell us about your project or question..."></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <!-- Error Message -->
            <div v-if="submitError" class="bg-red-50 border border-red-200 rounded-md p-4">
                <p class="text-sm text-red-600">{{ submitError }}</p>
            </div>

            <!-- Success Message -->
            <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-md p-4">
                <p class="text-sm text-green-600">{{ submitSuccess }}</p>
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
                    Sending message...
                </span>
                <span v-else>Send Message</span>
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDatabase } from '@/composables/useDatabase'

const { submitContactForm, loading, error: dbError } = useDatabase()

const form = ref({
    name: '',
    email: '',
    message: ''
})

const errors = ref<{ name?: string; email?: string; message?: string }>({})
const submitError = ref('')
const submitSuccess = ref('')

const validateForm = () => {
    errors.value = {}

    if (!form.value.name.trim()) {
        errors.value.name = 'Name is required'
    }

    if (!form.value.email) {
        errors.value.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
    }

    if (!form.value.message.trim()) {
        errors.value.message = 'Message is required'
    } else if (form.value.message.length < 10) {
        errors.value.message = 'Message must be at least 10 characters'
    }

    return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
    if (!validateForm()) return

    submitError.value = ''
    submitSuccess.value = ''

    const { error } = await submitContactForm({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
    })

    if (error) {
        submitError.value = error
    } else {
        submitSuccess.value = 'Thank you for your message! We\'ll get back to you soon.'
        form.value = { name: '', email: '', message: '' }
    }
}
</script>