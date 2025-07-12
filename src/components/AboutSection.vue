<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">About This Project</h1>
            <div class="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
                <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                    <div class="text-center p-6">
                        <div class="text-6xl mb-4">🚀</div>
                        <p class="text-gray-600">Illustration: Building Fast with AI</p>
                    </div>
                </div>
            </div>

            <div class="md:w-1/2">
                <h2 class="text-2xl font-bold mb-4">The Vision Behind Deepsite + Vercel</h2>
                <p class="text-gray-700 mb-6 leading-relaxed">
                    We believe that building beautiful, functional websites shouldn't take weeks or
                    require extensive design skills. By combining the power of AI with modern web
                    frameworks like Vue.js and deployment platforms like Vercel, we're creating a
                    new paradigm for web development.
                </p>
                <p class="text-gray-700 mb-6 leading-relaxed">
                    Deepsite generates the foundational HTML structure based on your content
                    requirements, which you can then enhance and customize using Vue's reactive
                    capabilities. This hybrid approach gives you the best of both worlds: AI-powered
                    efficiency and developer flexibility.
                </p>

                <div class="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-primary">
                    <p class="text-lg italic text-gray-700">
                        "The best way to predict the future is to create it. With AI as our
                        collaborator, we're building tomorrow's web today."
                    </p>
                    <p class="mt-4 text-gray-600">- The Deepsite Team</p>
                </div>
            </div>
        </div>

        <div class="mt-20 bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-center">Why This Stack?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-bolt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
                    <p class="text-gray-600">
                        Vite's instant server start and Vue's optimized rendering make development
                        incredibly fast.
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-cloud-upload-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Effortless Deployment</h3>
                    <p class="text-gray-600">
                        Vercel's platform handles everything from build to global CDN distribution
                        with zero configuration.
                    </p>
                </div>

                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-robot text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">AI-Powered</h3>
                    <p class="text-gray-600">
                        Deepsite eliminates the blank canvas problem by generating quality starting
                        points for your projects.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// AboutSection component logic
</script>