<!-- src/components/home/CallToAction.vue -->
<template>
    <section class="py-16 bg-primary/5 dark:bg-primary-950/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Desarrollando confianza a través del <span class="text-secondary">código</span></h2>
          <p class="text-lg text-dark-600 dark:text-dark-300 mb-10 max-w-2xl mx-auto">
            Ingeniero en Sistemas con experiencia en desarrollo web y administración de infraestructuras. Especializado en Python (Django), 
            JavaScript (Vue.js, Nuxt.js, React) y bases de datos relacionales (PostgreSQL, MySQL), he desarrollado proyectos como RecetarioFusionado y Vehiculostrack.online,
             entregando soluciones seguras, escalables y orientadas al usuario. Además, desempeño funciones de administrador de sistemas, 
             integrando buenas prácticas de ciberseguridad y metodologías ágiles para maximizar 
            la eficiencia. Apasionado por la innovación tecnológica, me comprometo a transformar problemas en soluciones.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact" class="btn btn-primary">
              Contactame
            </router-link>
            <a href="https://github.com/username" target="_blank" rel="noopener" class="btn btn-outline">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              Perfil de GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>