
<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import { useTheme } from '@/composables/useTheme';

const router = useRouter();
const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

const beforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0,
    y: 20,
  });
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    onComplete: done
  });
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    onComplete: done
  });
};
</script>