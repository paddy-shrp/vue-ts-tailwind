<template>
    <section id="process" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Simple & Efficient Process</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    From AI-generated HTML to live deployment in minutes
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div class="step-card bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div class="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                        <span class="text-xl font-bold">1</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Generate with Deepsite</h3>
                    <p class="text-gray-600">
                        Define your website content and generate the raw HTML structure using Deepsite
                        AI.
                    </p>
                </div>

                <div class="step-card bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div class="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                        <span class="text-xl font-bold">2</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Setup Vue Project</h3>
                    <p class="text-gray-600">
                        Create a new Vue.js + Vite project and copy the generated HTML into your
                        project.
                    </p>
                </div>

                <div class="step-card bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div class="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                        <span class="text-xl font-bold">3</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Convert to Components</h3>
                    <p class="text-gray-600">
                        Transform static HTML into Vue components with scoped styles and reactive
                        features.
                    </p>
                </div>

                <div class="step-card bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div class="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                        <span class="text-xl font-bold">4</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Deploy to Vercel</h3>
                    <p class="text-gray-600">
                        Deploy your site to Vercel with one click and add analytics for insights.
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/2 p-8 md:p-12">
                        <h3 class="text-2xl font-bold mb-4">Step-by-Step Guide</h3>
                        <ol class="list-decimal pl-5 space-y-4 text-gray-700">
                            <li>
                                Build context → Define Website Content → Generate Raw Structure with
                                <a href="https://huggingface.co/spaces/enzostvs/deepsite"
                                    class="text-primary hover:underline" target="_blank">Deepsite</a>
                            </li>
                            <li>
                                Copy the generated HTML into the
                                <code class="bg-gray-100 px-2 py-1 rounded">/examples</code> folder
                            </li>
                            <li>
                                Convert the static HTML into Vue components (e.g.,
                                <code class="bg-gray-100 px-2 py-1 rounded">&lt;HeroSection.vue&gt;</code>,
                                <code class="bg-gray-100 px-2 py-1 rounded">&lt;StepSection.vue&gt;</code>)
                            </li>
                            <li>
                                Set up Vue.js + Vite project:
                                <code
                                    class="bg-gray-100 px-2 py-1 rounded">npm init vite@latest my-site -- --template vue</code>
                            </li>
                            <li>
                                Integrate HTML into Vue views using
                                <code class="bg-gray-100 px-2 py-1 rounded">&lt;template&gt;</code>,
                                <code class="bg-gray-100 px-2 py-1 rounded">&lt;script setup&gt;</code>
                                and scoped styles
                            </li>
                            <li>
                                Deploy to
                                <a href="https://vercel.com" class="text-primary hover:underline"
                                    target="_blank">Vercel</a>
                                (free tier, scales with traffic)
                            </li>
                            <li>Add analytics using Plausible or Google Analytics</li>
                        </ol>
                    </div>
                    <div class="md:w-1/2 bg-gray-900 text-white">
                        <div class="terminal h-full">
                            <div class="terminal-header p-4 flex items-center">
                                <div class="flex mr-3">
                                    <div class="terminal-dot bg-red-400"></div>
                                    <div class="terminal-dot bg-yellow-400"></div>
                                    <div class="terminal-dot bg-green-400"></div>
                                </div>
                                <span class="text-sm">bash</span>
                            </div>
                            <div class="terminal-content p-4">
                                <div class="code-line text-green-400">
                                    $ git clone https://github.com/your-username/your-repo.git
                                </div>
                                <div class="code-line mb-3 text-green-400">$ cd your-repo</div>
                                <div class="code-line mb-3 text-green-400">$ npm install</div>
                                <div class="code-line mb-3 text-green-400">$ npm run dev</div>
                                <div class="code-line mb-3 text-gray-400">
                                    # Local server running at http://localhost:3000
                                </div>
                                <div class="code-line mb-3 text-green-400">$ git add .</div>
                                <div class="code-line mb-3 text-green-400">
                                    $ git commit -m "Initial commit"
                                </div>
                                <div class="code-line mb-3 text-green-400">$ git push origin main</div>
                                <div class="code-line mt-6 text-blue-400">
                                    # Then connect to GitHub → Import to Vercel → Deploy!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>