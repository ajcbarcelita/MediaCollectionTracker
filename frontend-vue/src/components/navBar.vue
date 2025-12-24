<template>
  <nav
    class="bg-surface/70 backdrop-blur-md shadow-md text-text font-sans-serif z-50 transition-colors duration-300"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-3 items-center py-3">
        <!-- Left: Branding -->
        <div class="flex items-center gap-10">
          <span class="font-semibold text-lg cursor-pointer text-text">MediaHub</span>
        </div>

        <!-- Center: Nav links -->
        <div class="flex justify-center gap-6">
          <a href="#" class="text-sm text-text-muted hover:text-text transition-colors duration-300"
            >Games</a
          >
          <a href="#" class="text-sm text-text-muted hover:text-text transition-colors duration-300"
            >Anime</a
          >
          <a href="#" class="text-sm text-text-muted hover:text-text transition-colors duration-300"
            >Movies</a
          >
        </div>

        <!-- Right: Actions -->
        <div class="flex justify-end items-center gap-4">
          <!-- Theme toggle -->
          <button
            class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle theme"
            @click="toggleTheme"
          >
            <ThemeIcon class="w-5 h-5 text-text" />
          </button>

          <!-- Auth links -->
          <a href="#" class="text-sm text-text hover:text-text transition-colors duration-300"
            >Login</a
          >

          <a
            href="#"
            class="text-sm px-4 py-2 rounded-lg bg-accent text-black transition-colors duration-300 hover:opacity-90"
            >Register</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeIcon from '@/assets/theme-icon.svg'

function toggleTheme() {
  const theme = document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', theme ? 'dark' : 'light')
}
</script>
