<template>
    <section class="cta-section">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-6">Ready to Launch Your Website?</h2>
            <p class="text-xl text-white/90 mb-8">
                Join thousands of developers building and deploying sites faster than ever.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank"
                    class="bg-white text-primary font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg">Generate
                    with Deepsite</a>
                <a href="https://vercel.com" target="_blank"
                    class="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition text-lg">Deploy
                    on Vercel</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// CTASection component logic
</script>

<style scoped>
.cta-section {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    padding: 4rem 0;
}
</style>
