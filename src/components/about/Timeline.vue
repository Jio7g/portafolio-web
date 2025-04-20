<!-- src/components/about/Timeline.vue -->
<template>
    <div>
      <h3 class="text-xl font-semibold mb-6 text-dark-800 dark:text-dark-200">{{ title }}</h3>
      <div class="space-y-8">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="relative pl-8 pb-8 border-l border-dark-200 dark:border-dark-700 last:border-0"
        >
          <!-- Timeline dot -->
          <div class="absolute -left-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white dark:bg-dark-900"></div>
          </div>
          
          <!-- Date badge -->
          <div class="absolute -left-24 top-0 w-16 text-right text-xs text-dark-500 dark:text-dark-400">
            {{ item.period.split(' - ')[0] }}
          </div>
          
          <!-- Content -->
          <div class="card p-4 border border-dark-100 dark:border-dark-800">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h4 class="font-semibold">{{ item.degree || item.title }}</h4>
                <p class="text-sm text-dark-500 dark:text-dark-400">{{ item.institution || item.company }}</p>
              </div>
              <span 
                v-if="item.type" 
                class="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary-700 dark:text-secondary-400"
              >
                {{ item.type }}
              </span>
              <span 
                v-else
                class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-700 dark:text-primary-400"
              >
                Higher Education
              </span>
            </div>
            <p class="text-sm text-dark-600 dark:text-dark-300">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'calendar'
    },
    items: {
      type: Array,
      required: true
    }
  });
  </script>