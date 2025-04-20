// src/composables/useTheme.js
import { ref, watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'

// Define state for dark mode in ref
const isDark = ref(false)

export function useTheme() {
  const prefersDark = usePreferredDark()

  const initTheme = () => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // If no saved preference, use system preference
      isDark.value = prefersDark.value
    }
    
    applyTheme()
  }

  // Function to toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  // Apply the theme to document
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Watch for changes in system preference
  watch(prefersDark, (newValue) => {
    // Only change if there's no saved preference
    if (!localStorage.getItem('theme')) {
      isDark.value = newValue
      applyTheme()
    }
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}