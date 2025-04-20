<!-- src/views/HomeView.vue -->
<template>
    <div>
      <HeroSection />
      <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Proyectos destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
        <div class="flex justify-center mt-12">
          <router-link to="/portfolio" class="btn btn-primary">
            Ver todos los proyectos
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </router-link>
        </div>
      </section>
      <CallToAction />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import HeroSection from '@/components/home/HeroSection.vue';
  import CallToAction from '@/components/home/CallToAction.vue';
  import ProjectCard from '@/components/portfolio/ProjectCard.vue';
  import { projectsData } from '@/data/projects';
  
  const featuredProjects = computed(() => {
    return projectsData
      .filter(project => project.featured)
      .slice(0, 3);
  });
  </script>