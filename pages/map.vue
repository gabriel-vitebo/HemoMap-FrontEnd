<template>
  <div>
    <AppHeader />
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Find a Donation Center</h1>
      <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Use the interactive map below to find blood donation centers (hemocenters) near your location. Click on a marker to get more information about a center. Please enable location services in your browser for the best experience.</p>
      <InteractiveMap />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue'
import InteractiveMap from '~/components/InteractiveMap.vue';

// Logic for this page will primarily be handled within the InteractiveMap component
// or a dedicated composable for map data and functionality.
</script>

<style scoped>
/* Scoped styles for the map page */
.container {
  max-width: 1200px; /* Allow wider container for map */
}
</style>
