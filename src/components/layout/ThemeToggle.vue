<!-- src/components/layout/ThemeToggle.vue -->
<template>
    <button 
      @click="toggleTheme" 
      class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-600 dark:text-dark-200 transition-colors"
      aria-label="Toggle theme"
    >
      <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    </button>
  </template>
  
  <script setup>
  import { useTheme } from '@/composables/useTheme';
  
  const { isDark, toggleTheme } = useTheme();
  </script>