<!-- src/views/NotFoundView.vue -->
<template>
    <div class="min-h-[70vh] flex items-center justify-center">
      <div class="container max-w-2xl mx-auto px-4 py-16 text-center">
        <div class="mb-8">
          <h1 class="text-9xl font-bold text-primary mb-2">404</h1>
          <h2 class="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p class="text-dark-600 dark:text-dark-400 max-w-md mx-auto mb-8">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div class="space-y-6">
          <router-link to="/" class="btn btn-primary">
            Return to Home
          </router-link>
          
          <p class="text-dark-500 dark:text-dark-500 text-sm">
            If you believe this is an error, please contact me.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed
  </script>