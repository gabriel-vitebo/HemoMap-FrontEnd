<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-red-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">HemoMap</h1>
        <nav class="space-x-4">
          <a href="#" class="hover:underline">Início</a>
          <a href="#" class="hover:underline">Sobre</a>
          <a href="#" class="hover:underline">Contato</a>
        </nav>
      </div>
    </header>

    <!-- Section de Introdução -->
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-4 text-center max-w-2xl">
        <h2 class="text-3xl font-semibold mb-4">Encontre locais para doar sangue perto de você</h2>
        <p class="text-gray-700 text-lg">
          Através do nosso mapa interativo, você pode localizar rapidamente os pontos de doação mais próximos e contribuir com essa causa tão importante.
        </p>
      </div>
    </section>

    <!-- Mapa -->
    <section class="flex-1">
      <div class="container mx-auto px-4 py-8">
        <h3 class="text-xl font-semibold mb-4">Mapa de Locais de Doação</h3>
        <div class="w-full h-[500px] bg-gray-200 rounded-lg shadow-inner">
          <!-- Aqui você pode integrar um componente de mapa, como o Leaflet ou Google Maps -->
          <ClientOnly>
            <MapComponent />
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-red-600 text-white py-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} DoaSangue. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
