<template>
  <header class="bg-red-600 text-white p-4 shadow-md">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold hover:text-red-200 transition-colors">HemoMap</NuxtLink>
      <ul class="flex space-x-6">
        <li><NuxtLink to="/" class="hover:text-red-200 transition-colors">Início</NuxtLink></li>
        <li><NuxtLink to="/information" class="hover:text-red-200 transition-colors">Por que Doar?</NuxtLink></li>
        <li><NuxtLink to="/faq" class="hover:text-red-200 transition-colors">Perguntas Frequentes</NuxtLink></li>
        <li><NuxtLink to="/eligibility" class="hover:text-red-200 transition-colors">Verificar Elegibilidade</NuxtLink></li>
        <li><NuxtLink to="/map" class="hover:text-red-200 transition-colors">Encontrar Centros</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// No specific script needed for AppHeader yet.
</script>

<style scoped>
/* Scoped styles for AppHeader */
</style>
