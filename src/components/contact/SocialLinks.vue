<!-- src/components/contact/SocialLinks.vue -->
<template>
    <div class="flex gap-4">
      <a 
        v-for="link in socialLinks" 
        :key="link.name"
        :href="link.url" 
        :aria-label="link.name"
        target="_blank" 
        rel="noopener" 
        class="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary hover:text-white transition-colors"
      >
        <component :is="link.icon" class="w-5 h-5" />
      </a>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    socialLinks: {
      type: Array,
      default: () => [
        {
          name: 'GitHub',
          url: 'https://github.com/username',
          icon: 'GitHubIcon'
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/username',
          icon: 'LinkedInIcon'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/username',
          icon: 'TwitterIcon'
        }
      ]
    }
  });
  </script>