<template>
  <div>
    <AppHeader />
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Encontre Hemocentros perto de você</h1>
      <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Use o mapa interativo abaixo para encontrar hemocentros próximos 
        à sua localização. Clique em um marcador para obter mais informações 
        sobre um centro. Por favor, ative os serviços de localização 
        no seu navegador para uma melhor experiência.
      </p>
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
