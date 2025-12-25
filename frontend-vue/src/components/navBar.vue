<template>
  <nav
    class="bg-surface/70 backdrop-blur-md shadow-md text-text font-sans-serif z-50 transition-colors duration-300"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-3 items-center py-3">
        <!-- Left: Branding -->
        <div class="flex items-center gap-10 cursor-pointer">
          <RouterLink to="/">
            <img src="/src/assets/logo.svg" class="h-8" alt="MediaHub logo" />
          </RouterLink>
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
            @click="toggleTheme"
            class="p-2 rounded-lg transition-colors duration-300 text-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <!-- Example: Sun/Moon combined icon -->
              <mask id="moon-mask">
                <rect width="24" height="24" fill="white" />
                <circle cx="12" cy="12" r="6" fill="black" />
              </mask>
              <circle cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          <!-- Auth links -->
          <RouterLink
            to="/login"
            class="text-sm text-text-muted hover:text-text transition-colors duration-300"
          >
            Login
          </RouterLink>

          <RouterLink
            to="/register"
            class="text-sm px-4 py-2 rounded-lg bg-accent text-black transition-colors duration-300 hover:opacity-90"
          >
            Register
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

function toggleTheme() {
  const theme = document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', theme ? 'dark' : 'light')
}
</script>
