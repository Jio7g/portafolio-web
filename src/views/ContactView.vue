<!-- src/views/ContactView.vue -->
<template>
    <div>
      <!-- Header -->
      <section class="py-16 bg-dark-50 dark:bg-dark-900/30">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">Contactame</h1>
          <p class="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto text-center">
            ¿Estás interesado en trabajar juntos? Siéntete libre de contactarme a través de cualquiera de los canales de contacto o rellena el formulario de contacto.
          </p>
        </div>
      </section>
      
      <!-- Contact Content -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Contact Info -->
            <div class="lg:col-span-1">
              <div class="card p-6 h-full">
                <h2 class="text-2xl font-bold mb-6">Información de contacto</h2>
                
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-900/20 flex items-center justify-center text-primary">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@example.com" class="text-dark-600 dark:text-dark-400 hover:text-primary dark:hover:text-primary transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-900/20 flex items-center justify-center text-primary">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold mb-1">Ubicación</h3>
                      <p class="text-dark-600 dark:text-dark-400">
                        Chiquimula, Guatemala
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-900/20 flex items-center justify-center text-primary">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold mb-1">Horario de trabajo</h3>
                      <p class="text-dark-600 dark:text-dark-400">
                        Lunes - Viernes: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h3 class="font-semibold mb-4">Conecta conmigo</h3>
                  <div class="flex gap-4">
                    <a href="https://github.com/username" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/username" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary hover:text-white transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import ContactForm from '@/components/contact/ContactForm.vue';
  </script>