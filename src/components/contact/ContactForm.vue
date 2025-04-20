<!-- src/components/contact/ContactForm.vue -->
<template>
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-6">Envíame un mensaje</h2>
      
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2" for="name">
              Tu nombre
            </label>
            <input 
              id="name"
              v-model="form.name"
              type="text" 
              class="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2" for="email">
              Tu correo electrónico
            </label>
            <input 
              id="email"
              v-model="form.email"
              type="email" 
              class="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2" for="subject">
            Asunto
          </label>
          <input 
            id="subject"
            v-model="form.subject"
            type="text" 
            class="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Consulta de proyecto"
            required
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2" for="message">
            Tu mensaje
          </label>
          <textarea 
            id="message"
            v-model="form.message"
            rows="6" 
            class="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Cuéntame sobre tu proyecto, preguntas, o simplemente di hola..."
            required
          ></textarea>
        </div>
        
        <div class="flex items-center">
          <input 
            id="terms"
            v-model="form.terms"
            type="checkbox" 
            class="w-4 h-4 text-primary bg-white rounded border-dark-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-dark-800 focus:ring-2 dark:bg-dark-700 dark:border-dark-600"
            required
          />
          <label for="terms" class="ml-2 text-sm text-dark-600 dark:text-dark-400">
            Acepto la política de privacidad y los términos de servicio
          </label>
        </div>
        
        <div class="flex items-center justify-between">
          <button 
            type="submit" 
            class="btn btn-primary"
            :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else>Enviar mensaje</span>
          </button>
          
          <div v-if="formStatus.show" :class="`text-${formStatus.type}-600 text-sm`">
            {{ formStatus.message }}
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const isSubmitting = ref(false);
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
    terms: false
  });
  
  const formStatus = reactive({
    show: false,
    type: 'success',
    message: ''
  });
  
  const submitForm = async () => {
    isSubmitting.value = true;
    formStatus.show = false;
    
    try {
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
      form.terms = false;
      
      // Show success message
      formStatus.show = true;
      formStatus.type = 'success';
      formStatus.message = 'Tu mensaje ha sido enviado exitosamente!';
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formStatus.show = false;
      }, 5000);
    } catch (error) {
      // Show error message
      formStatus.show = true;
      formStatus.type = 'error';
      formStatus.message = 'Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.';
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>