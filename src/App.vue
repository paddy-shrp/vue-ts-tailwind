<template>
  <div id="app" class="bg-gray-50 text-slate-800">
    <!-- Navigation -->
    <Header />

    <!-- Page Content -->
    <main class="pt-16 min-h-screen">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>