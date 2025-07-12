<template>
    <section class="gradient-bg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Launch Your Site Fast with Deepsite & Vercel
                    </h1>
                    <p class="text-xl mb-8 opacity-90">
                        Generate beautiful websites in seconds using AI, then deploy instantly with
                        Vercel's powerful platform.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#process"
                            class="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">Get
                            Started</a>
                        <a href="https://vercel.com" target="_blank"
                            class="border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition">Deploy
                            on Vercel</a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative">
                        <div
                            class="absolute -top-6 -left-6 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">
                        </div>
                        <div
                            class="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
                        </div>
                        <div class="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                            <div class="flex mb-4">
                                <div class="terminal-dot bg-red-400"></div>
                                <div class="terminal-dot bg-yellow-400"></div>
                                <div class="terminal-dot bg-green-400"></div>
                            </div>
                            <div class="text-gray-800 font-mono text-sm">
                                <p class="mb-2">
                                    <span class="text-green-500">$</span> deepsite generate
                                </p>
                                <p class="mb-2">Building context...</p>
                                <p class="mb-2">Generating HTML structure...</p>
                                <p class="text-primary font-medium">✓ Website generated in 12.3s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>