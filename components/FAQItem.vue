<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <button @click="isOpen = !isOpen" class="w-full text-left flex justify-between items-center">
      <h3 class="text-xl font-semibold text-red-700">{{ question }}</h3>
      <span class="text-red-700 text-2xl">
        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
      </span>
    </button>
    <div v-if="isOpen" class="mt-4 text-gray-700 leading-relaxed">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  question: String,
  answer: String
});

const isOpen = ref(false);
</script>

<style scoped>
/* Scoped styles for FAQItem component if needed */
</style>
