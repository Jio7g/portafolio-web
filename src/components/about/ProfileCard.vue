<!-- src/components/about/ProfileCard.vue -->
<template>
    <div class="card overflow-hidden">
      <!-- Profile Image -->
      <div class="relative">
        <img src="/img/profile.jpg" alt="Gylan Salih" class="w-full h-56 object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h3 class="text-xl font-semibold">{{ personalInfo.name }}</h3>
          <p class="text-sm text-white/80">{{ personalInfo.title }}</p>
        </div>
      </div>
      
      <!-- Info -->
      <div class="p-4">
        <div class="mb-4">
          <h4 class="text-sm text-primary font-medium mb-2">Nombre</h4>
          <p class="text-dark-700 dark:text-dark-300">{{ personalInfo.name }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-sm text-primary font-medium mb-2">Profesión</h4>
          <p class="text-dark-700 dark:text-dark-300">{{ personalInfo.profession }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-sm text-primary font-medium mb-2">Hobbies</h4>
          <p class="text-dark-700 dark:text-dark-300">
            {{ personalInfo.hobbies.join(', ') }}
          </p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-sm text-primary font-medium mb-2">Lenguaje Favorito</h4>
          <p class="text-dark-700 dark:text-dark-300">{{ personalInfo.favoriteLanguage }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-sm text-primary font-medium mb-2">Intereses</h4>
          <p class="text-dark-700 dark:text-dark-300">{{ personalInfo.interests }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    personalInfo: {
      type: Object,
      required: true
    }
  });
  </script>