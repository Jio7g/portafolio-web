<!-- src/components/portfolio/ProjectFilter.vue -->
<template>
    <div class="flex flex-wrap items-center gap-3">
      <span class="text-sm text-dark-600 dark:text-dark-400">Sort By</span>
      <div class="flex flex-wrap gap-2">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="$emit('filter-change', category)"
          class="px-4 py-2 text-sm rounded-full border transition-colors"
          :class="[
            activeFilter === category 
              ? 'bg-primary text-white border-primary'
              : 'bg-white dark:bg-dark-800 border-dark-200 dark:border-dark-700 hover:border-primary/50'
          ]"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    categories: {
      type: Array,
      required: true
    },
    activeFilter: {
      type: String,
      required: true
    }
  });
  
  defineEmits(['filter-change']);
  </script>