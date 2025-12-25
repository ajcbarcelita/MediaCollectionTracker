<script setup lang="ts">
// import Navbar
import navBar from '@/components/navBar.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-bg text-text transition-colors">
    <header>
      <navBar />
    </header>

    <main class="p-8">
      <h1 class="text-4xl font-bold">Media Collection Tracker</h1>
      <p class="mt-4 text-lg">Track anime, games, movies, and your sanity.</p>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
