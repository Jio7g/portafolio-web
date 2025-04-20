<!-- src/components/portfolio/ProjectCard.vue -->
<template>
    <!-- Grid View -->
    <div 
      v-if="viewMode === 'grid'"
      class="group relative overflow-hidden rounded-lg bg-white dark:bg-dark-900 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div class="relative aspect-square overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Project Links -->
        <div class="absolute bottom-4 left-4 flex space-x-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            v-if="project.githubLink"
            :href="project.githubLink" 
            target="_blank" 
            rel="noopener"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a 
            v-if="project.demoLink"
            :href="project.demoLink" 
            target="_blank" 
            rel="noopener"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
        
        <!-- Rarity Badge -->
        <div 
          v-if="project.rarity"
          class="absolute top-4 right-4 py-1 px-2 rounded-full text-xs font-medium"
          :class="[
            project.rarity === 'legendary' ? 'bg-yellow-500/80 text-white' : '',
            project.rarity === 'epic' ? 'bg-purple-500/80 text-white' : '',
            project.rarity === 'rare' ? 'bg-blue-500/80 text-white' : '',
            project.rarity === 'normal' ? 'bg-gray-500/80 text-white' : '',
          ]"
        >
          {{ project.rarity }}
        </div>
      </div>
    </div>
    
    <!-- Card View -->
    <div 
      v-else-if="viewMode === 'card'"
      class="card overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <div class="relative h-48 overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
        
        <div class="absolute bottom-0 left-0 w-full p-4">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <div class="flex flex-wrap mt-2 gap-2">
            <span 
              v-for="tag in project.tags.slice(0, 2)" 
              :key="tag"
              class="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
            >
              {{ tag }}
            </span>
            <span 
              v-if="project.tags.length > 2"
              class="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
            >
              +{{ project.tags.length - 2 }}
            </span>
          </div>
        </div>
        
        <!-- Rarity Badge -->
        <div 
          v-if="project.rarity"
          class="absolute top-4 right-4 py-1 px-2 rounded-full text-xs font-medium"
          :class="[
            project.rarity === 'legendary' ? 'bg-yellow-500/90 text-white' : '',
            project.rarity === 'epic' ? 'bg-purple-500/90 text-white' : '',
            project.rarity === 'rare' ? 'bg-blue-500/90 text-white' : '',
            project.rarity === 'normal' ? 'bg-gray-500/90 text-white' : '',
          ]"
        >
          {{ project.rarity }}
        </div>
      </div>
      
      <div class="p-4">
        <p class="text-sm text-dark-600 dark:text-dark-400 mb-4 line-clamp-3">
          {{ project.description }}
        </p>
        
        <div class="flex justify-between items-center">
          <div class="text-xs text-dark-500 dark:text-dark-500">
            {{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }}
          </div>
          
          <div class="flex space-x-2">
            <a 
              v-if="project.githubLink"
              :href="project.githubLink" 
              target="_blank" 
              rel="noopener"
              class="w-8 h-8 rounded-full flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a 
              v-if="project.demoLink"
              :href="project.demoLink" 
              target="_blank" 
              rel="noopener"
              class="w-8 h-8 rounded-full flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- List View -->
    <div 
      v-else
      class="card p-4 flex flex-wrap md:flex-nowrap gap-4 hover:shadow-lg transition-all duration-300"
    >
      <div class="w-full md:w-48 h-36 flex-shrink-0">
        <div class="relative h-full w-full overflow-hidden rounded-md">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-center" />
          
          <!-- Rarity Badge -->
          <div 
            v-if="project.rarity"
            class="absolute top-2 right-2 py-1 px-2 rounded-full text-xs font-medium"
            :class="[
              project.rarity === 'legendary' ? 'bg-yellow-500/90 text-white' : '',
              project.rarity === 'epic' ? 'bg-purple-500/90 text-white' : '',
              project.rarity === 'rare' ? 'bg-blue-500/90 text-white' : '',
              project.rarity === 'normal' ? 'bg-gray-500/90 text-white' : '',
            ]"
          >
            {{ project.rarity }}
          </div>
        </div>
      </div>
      
      <div class="flex-grow">
        <div class="flex flex-wrap justify-between items-start mb-2">
          <h3 class="text-lg font-semibold">{{ project.title }}</h3>
          <div class="text-xs text-dark-500 dark:text-dark-500">
            {{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }}
          </div>
        </div>
        
        <p class="text-sm text-dark-600 dark:text-dark-400 mb-3">
          {{ project.description }}
        </p>
        
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex flex-wrap gap-2 mb-2 md:mb-0">
            <span 
              v-for="tag in project.tags.slice(0, 3)" 
              :key="tag"
              class="text-xs px-2 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
            >
              {{ tag }}
            </span>
            <span 
              v-if="project.tags.length > 3"
              class="text-xs px-2 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
            >
              +{{ project.tags.length - 3 }}
            </span>
          </div>
          
          <div class="flex space-x-2">
            <a 
              v-if="project.githubLink"
              :href="project.githubLink" 
              target="_blank" 
              rel="noopener"
              class="btn btn-outline py-1 px-3 text-sm inline-flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </a>
            <a 
              v-if="project.demoLink"
              :href="project.demoLink" 
              target="_blank" 
              rel="noopener"
              class="btn btn-primary py-1 px-3 text-sm inline-flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    },
    viewMode: {
      type: String,
      default: 'grid'
    }
  });
  </script>