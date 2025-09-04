<template>
  <section id="process" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Build Your Frontend in Minutes
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Skip the setup hassle. Get a production-ready Vue 3 frontend running in under 5 minutes
          with our Instant Frontend workflow.
        </p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/2 p-8 md:p-12">
            <h3 class="text-2xl font-bold mb-4">Complete Workflow</h3>
            <ol class="list-decimal pl-5 space-y-4 text-gray-700">
              <li>
                <strong>Generate with Deepsite:</strong> Build context → Define Website Content →
                Generate Raw Structure with
                <a href="https://huggingface.co/spaces/enzostvs/deepsite" class="text-primary hover:underline"
                  target="_blank">Deepsite</a>
              </li>
              <li>
                <strong>Setup Project:</strong> Clone the template with the commands on the right
              </li>
              <li>
                <strong>Prepare Content:</strong> Copy the generated HTML into the
                <code class="bg-gray-100 px-2 py-1 rounded">/examples</code> folder
              </li>
              <li>
                <strong>Convert with Cursor:</strong> Use
                <a href="https://cursor.com/agents/" class="text-primary hover:underline" target="_blank">Cursor</a>
                with this Agent prompt:
                <div class="mt-3 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                  <div class="flex justify-between items-center mb-2">
                    <p class="text-sm font-medium text-gray-700">Cursor Agent Prompt:</p>
                    <button @click="copyAgentPrompt"
                      class="text-xs px-3 py-1 bg-primary text-white rounded hover:bg-primary-dark hover:cursor-pointer transition-colors flex items-center gap-1"
                      :class="{ 'bg-green-600': copySuccess }">
                      <span v-if="copySuccess">✓ Copied!</span>
                      <span v-else>Copy</span>
                    </button>
                  </div>
                  <details class="text-sm text-gray-600">
                    <summary class="cursor-pointer font-medium text-primary hover:text-primary-dark">
                      Click to expand agent prompt
                    </summary>
                    <div class="mt-2 space-y-2 whitespace-pre-line">{{ agentPrompt }}</div>
                  </details>
                </div>
              </li>
              <li>
                <strong>Test & Build:</strong> Run
                <code class="bg-gray-100 px-2 py-1 rounded">npm run dev</code> and try
                <code class="bg-gray-100 px-2 py-1 rounded">npm run build</code>
              </li>
              <li>
                <strong>Deploy:</strong> Deploy to
                <a href="https://vercel.com" class="text-primary hover:underline" target="_blank">Vercel</a>
              </li>
            </ol>
          </div>
          <div class="md:w-1/2 bg-gray-900 text-white">
            <div class="bg-dark rounded-lg font-mono h-full">
              <div class="bg-dark-light rounded-t-lg p-4 flex items-center">
                <div class="flex mr-3">
                  <div class="w-3 h-3 rounded-full bg-red-400 inline-block mr-1"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400 inline-block mr-1"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400 inline-block mr-1"></div>
                </div>
                <span class="text-sm">bash</span>
              </div>
              <div class="p-4 min-h-[200px]">
                <div class="terminal-animation mb-3 text-green-400 opacity-0">
                  $ npx degit paddy-shrp/vue-ts-tailwind my-project
                </div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ cd my-project</div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ npm install</div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ npm run dev</div>
                <div class="terminal-animation mb-3 text-gray-400 opacity-0">
                  # Local server running at http://localhost:5173
                </div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ git init</div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ git add .</div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ git commit -m "Initial commit"</div>
                <div class="terminal-animation mb-3 text-green-400 opacity-0">$ git push origin main</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* global navigator, setTimeout */
import { ref, onMounted } from 'vue'

const agentPrompt = ref('')
const copySuccess = ref(false)

const copyAgentPrompt = async () => {
  try {
    await navigator.clipboard.writeText(agentPrompt.value)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch {
    // Silently handle copy errors
  }
}

onMounted(async () => {
  try {
    const textModule = await import('../assets/agent-prompt.txt?raw')
    agentPrompt.value = textModule.default
  } catch {
    // Silently handle load errors
    agentPrompt.value = 'Failed to load agent prompt'
  }
})
</script>

<style scoped>
.terminal-animation {
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
</style>
