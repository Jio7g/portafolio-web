<!-- src/components/layout/TheNavbar.vue -->
<template>
    <header class="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-dark-950/80 shadow-sm dark:shadow-dark-900/20 transition-colors duration-300">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 font-display font-bold text-xl">
          <span class="text-primary">(Jio/Dev)</span>
        </router-link>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
          <router-link to="/about" class="nav-link" active-class="active">Sobre mi</router-link>
          <router-link to="/portfolio" class="nav-link" active-class="active">Portafolio</router-link>
          <router-link to="/contact" class="nav-link" active-class="active">Contacto</router-link>
        </nav>
  
        <!-- Right Side Controls -->
        <div class="flex items-center gap-4">
          <ThemeToggle />
          
          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden flex flex-col space-y-1.5 w-6 p-1"
            aria-label="Menu"
          >
            <span 
              class="w-full h-0.5 bg-dark-900 dark:bg-white transition-transform duration-300"
              :class="{'rotate-45 translate-y-2': isMenuOpen}"
            ></span>
            <span 
              class="w-full h-0.5 bg-dark-900 dark:bg-white transition-opacity duration-300"
              :class="{'opacity-0': isMenuOpen}"
            ></span>
            <span 
              class="w-full h-0.5 bg-dark-900 dark:bg-white transition-transform duration-300"
              :class="{'-rotate-45 -translate-y-2': isMenuOpen}"
            ></span>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div 
        class="md:hidden absolute w-full bg-white dark:bg-dark-900 shadow-lg dark:shadow-dark-900/50 transition-all duration-300 overflow-hidden"
        :class="isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'"
      >
        <nav class="flex flex-col px-6 gap-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="py-2 border-b border-dark-100 dark:border-dark-800 text-dark-700 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
          </router-link>
        </nav>
      </div>
    </header>
    
    <!-- Spacer to account for fixed header -->
    <div class="h-16"></div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ThemeToggle from './ThemeToggle.vue';
  
  const isMenuOpen = ref(false);
  
  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Portfolio', to: '/portfolio' },
    { text: 'Contact', to: '/contact' },
  ];
  </script>