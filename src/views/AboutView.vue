<!-- src/views/AboutView.vue -->
<template>
    <div>
      <!-- Header -->
      <section class="py-16 bg-dark-50 dark:bg-dark-900/30">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span class="text-secondary text-sm uppercase block mb-2">SOBRE MI</span>
            Buscando el avance, consciente de que cada paso me
            <span class="text-secondary">acerca al</span>
            <span class="text-primary"> objetivo.</span>
          </h1>
          
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://github.com/username" target="_blank" rel="noopener" class="btn btn-outline inline-flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener" class="btn btn-outline inline-flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:email@example.com" class="btn btn-outline inline-flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>
      
      <!-- Main Content -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Column -->
            <div class="lg:col-span-1">
              <ProfileCard :personalInfo="personalInfo" />
            </div>
            
            <!-- Right Column -->
            <div class="lg:col-span-2">
              <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Mas que código</h2>
                <p class="text-dark-700 dark:text-dark-300 leading-relaxed">
                  {{ personalInfo.about }}
                </p>
              </div>
              
              <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Mi Personalidad</h2>
                <PersonalityTraits :traits="personalInfo.personality" />
              </div>
              
              <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Logros</h2>
                <Timeline 
                  :items="personalInfo.education" 
                  title="Educación" 
                  icon="academic-cap"
                />
                <div class="mt-8">
                  <Timeline 
                    :items="personalInfo.experience" 
                    title="Experience" 
                    icon="briefcase"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Open Source Section -->
      <section class="py-16 bg-dark-50 dark:bg-dark-900/30">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold mb-6 text-center">Contribuciones al Comunidad de Código Abierto</h2>
          <div class="max-w-3xl mx-auto">
            <div class="card p-6">
              <p class="mb-4 text-dark-700 dark:text-dark-300">
                
              </p>
              <div class="flex justify-center mt-6">
                <a href="https://github.com/username" target="_blank" rel="noopener" class="btn btn-primary inline-flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                  Visita mi GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import ProfileCard from '@/components/about/ProfileCard.vue';
  import PersonalityTraits from '@/components/about/PersonalityTraits.vue';
  import Timeline from '@/components/about/Timeline.vue';
  import { personalInfo } from '@/data/personalInfo';
  </script>