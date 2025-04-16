<template>
  <div class="container mx-auto px-4 py-8">
    <h3 class="text-xl text-gray-100 font-semibold mb-4">Mapa de Locais de Doação</h3>
    <div class="w-full h-[500px] bg-gray-200 rounded-lg shadow-inner">
      <ClientOnly>
        <MapComponent />
      </ClientOnly>
    </div>
  </div>
</template>