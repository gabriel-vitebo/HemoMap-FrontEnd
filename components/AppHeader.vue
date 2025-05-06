<template>
  <header class="bg-red-600 text-white p-4 shadow-md">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold hover:text-red-200 transition-colors">BloodLink</NuxtLink>
      <ul class="flex space-x-6">
        <li><NuxtLink to="/" class="hover:text-red-200 transition-colors">Home</NuxtLink></li>
        <li><NuxtLink to="/information" class="hover:text-red-200 transition-colors">Why Donate?</NuxtLink></li>
        <li><NuxtLink to="/faq" class="hover:text-red-200 transition-colors">FAQ</NuxtLink></li>
        <li><NuxtLink to="/eligibility" class="hover:text-red-200 transition-colors">Check Eligibility</NuxtLink></li>
        <li><NuxtLink to="/map" class="hover:text-red-200 transition-colors">Find Centers</NuxtLink></li>
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
