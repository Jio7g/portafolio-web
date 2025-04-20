<!-- src/components/home/HeroSection.vue -->
<template>
    <section class="relative min-h-[85vh] flex items-center overflow-hidden">
      <!-- Background image with overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-dark-950/80 to-primary-900/40 dark:from-dark-950/90 dark:to-primary-950/60 z-10"></div>
        <div class="absolute inset-0 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center"></div>
      </div>
      
      <!-- Content -->
      <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-3xl">
          <h1 class="font-display text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
            Mi<span class="text-primary">Portafolio</span>
          </h1>
          <h2 class="text-xl md:text-2xl text-white/90 mb-8">
            ES ESTE EL DISENO FINAL?
          </h2>
          <p class="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            No. Este sitio es un trabajo en curso, y está siendo desarrollado. Sígueme en GitHub para no perderte nada.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <router-link to="/portfolio" class="btn btn-primary">
              Explorar mi trabajo
            </router-link>
            <router-link to="/about" class="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20">
              Conoce más sobre mí
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-pulse opacity-30"></div>
      <div class="absolute top-20 right-20 w-16 h-16 border border-primary/40 rounded-full animate-float opacity-40"></div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>