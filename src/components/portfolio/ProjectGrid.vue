<!-- src/components/portfolio/ProjectGrid.vue -->
<template>
    <div>
      <!-- Grid View -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          :view-mode="viewMode"
        />
      </div>
      
      <!-- List View -->
      <div v-else-if="viewMode === 'list'" class="space-y-4">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          :view-mode="viewMode"
        />
      </div>
      
      <!-- Card View -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          :view-mode="viewMode"
        />
      </div>
      
      <!-- Empty State -->
      <div v-if="!projects.length" class="py-16 text-center">
        <svg class="w-16 h-16 mx-auto text-dark-300 dark:text-dark-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-semibold mb-2">No Projects Found</h3>
        <p class="text-dark-500 dark:text-dark-400">
          Try changing your filter or search criteria.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProjectCard from './ProjectCard.vue';
  
  defineProps({
    projects: {
      type: Array,
      required: true
    },
    viewMode: {
      type: String,
      default: 'grid'
    }
  });
  </script>