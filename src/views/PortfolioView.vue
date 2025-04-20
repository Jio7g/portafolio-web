<!-- src/views/PortfolioView.vue -->
<template>
    <div>
      <!-- Header with Background -->
      <section class="relative py-24 overflow-hidden">
        <!-- Background image with overlay -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-r from-dark-950/90 to-primary-900/70 dark:from-dark-950/95 dark:to-primary-950/80 z-10"></div>
          <div class="absolute inset-0 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-20">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Mi Portafolio</h1>
          <p class="text-lg text-white/80 max-w-2xl mx-auto text-center mb-8">
            Una colección de mis proyectos, diseños y creatividad. Cada pieza representa mi viaje y pasión por construir experiencias digitales significativas.
          </p>
        </div>
      </section>
      
      <!-- Filters and Projects Grid -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <!-- Filter Controls -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <ProjectFilter 
              :categories="categories"
              :activeFilter="activeFilter"
              @filter-change="setFilter"
            />
            
            <div class="flex flex-wrap gap-4 items-center">
              <div class="flex items-center gap-2">
                <span class="text-sm text-dark-600 dark:text-dark-400">Ordenar por</span>
                <select 
                  v-model="sortBy"
                  class="bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-md py-1 px-3 text-sm"
                >
                  <option value="all">Mostrar todos</option>
                </select>
              </div>
              
              <!-- View mode toggle -->
              <div class="flex items-center border border-dark-200 dark:border-dark-700 rounded-md overflow-hidden">
                <button 
                  class="p-2 bg-white dark:bg-dark-800"
                  :class="{ 'bg-primary/10 dark:bg-primary-900/20': viewMode === 'grid' }"
                  @click="viewMode = 'grid'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </button>
                <button 
                  class="p-2 bg-white dark:bg-dark-800"
                  :class="{ 'bg-primary/10 dark:bg-primary-900/20': viewMode === 'list' }"
                  @click="viewMode = 'list'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <button 
                  class="p-2 bg-white dark:bg-dark-800"
                  :class="{ 'bg-primary/10 dark:bg-primary-900/20': viewMode === 'card' }"
                  @click="viewMode = 'card'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Rarity filter -->
              <div class="flex items-center gap-2">
                <span class="text-sm text-dark-600 dark:text-dark-400">Cambiar todas las rarezas</span>
                <select 
                  v-model="rarityFilter"
                  class="bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-md py-1 px-3 text-sm"
                >
                  <option value="normal">normal</option>
                  <option value="rare">rare</option>
                  <option value="epic">epic</option>
                  <option value="legendary">legendary</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Projects Grid -->
          <ProjectGrid 
            :projects="filteredProjects" 
            :viewMode="viewMode"
          />
          
          <!-- Load More Button -->
          <div class="flex justify-center mt-12">
            <button 
              v-if="hasMoreProjects"
              @click="loadMoreProjects"
              class="btn btn-primary"
            >
              Cargar más
            </button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import ProjectFilter from '@/components/portfolio/ProjectFilter.vue';
  import ProjectGrid from '@/components/portfolio/ProjectGrid.vue';
  import { useProjects } from '@/composables/useProjects';
  
  const { 
    filteredProjects: allProjects, 
    categories, 
    activeFilter,
    setFilter,
    sortBy 
  } = useProjects();
  
  const viewMode = ref('grid');
  const rarityFilter = ref('normal');
  const displayCount = ref(6);
  
  // Projects to display based on pagination
  const filteredProjects = computed(() => {
    return allProjects.value.slice(0, displayCount.value);
  });
  
  // Check if there are more projects to load
  const hasMoreProjects = computed(() => {
    return displayCount.value < allProjects.value.length;
  });
  
  // Load more projects function
  const loadMoreProjects = () => {
    displayCount.value += 6;
  };
  
  // Initialize animation
  onMounted(() => {
    // Animation will be added here
  });
  </script>