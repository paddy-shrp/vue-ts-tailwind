<template>
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <div class="flex items-center">
                        <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg">
                            <div class="bg-gray-900 p-1 rounded-md">
                                <span
                                    class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-xl">Deepsite+Vercel</span>
                            </div>
                        </div>
                    </div>
                    <p class="mt-4 text-gray-400 max-w-md">
                        Accelerating web development with AI-generated templates and instant deployment.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-8">
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li>
                                <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank"
                                    class="text-gray-400 hover:text-white transition">Deepsite</a>
                            </li>
                            <li>
                                <a href="https://vuejs.org" target="_blank"
                                    class="text-gray-400 hover:text-white transition">Vue.js</a>
                            </li>
                            <li>
                                <a href="https://vitejs.dev" target="_blank"
                                    class="text-gray-400 hover:text-white transition">Vite</a>
                            </li>
                            <li>
                                <a href="https://vercel.com" target="_blank"
                                    class="text-gray-400 hover:text-white transition">Vercel</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-lg font-semibold mb-4">Connect</h4>
                        <ul class="space-y-2">
                            <li>
                                <a href="https://github.com/paddy-shrp" target="_blank"
                                    class="text-gray-400 hover:text-white transition">GitHub</a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/patrick-schroeppel" target="_blank"
                                    class="text-gray-400 hover:text-white transition">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                <p>© {{ new Date().getFullYear() }} Deepsite + Vercel. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Footer component logic
</script>