<template>
  <div class="p-2 bg-white rounded-lg shadow-md w-full max-w-xs">
    <h3 class="text-lg font-semibold text-red-700 mb-2">{{ centerData.name }}</h3>
    <p class="text-sm text-gray-600 mb-1"><span class="font-medium">Endereço:</span> {{ centerData.address }}</p>
    <p class="text-sm text-gray-600 mb-1"><span class="font-medium">Horários:</span> {{ centerData.hours }}</p>
    <p class="text-sm text-gray-600 mb-3"><span class="font-medium">Contato:</span> {{ centerData.contact }}</p>
    <a 
      :href="`https://www.google.com/maps/search/?api=1&query=${centerData.latLng[0]},${centerData.latLng[1]}`" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-3 rounded-md transition-colors duration-200"
    >
      Ver no Mapa
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  centerData: {
    type: Object,
    required: true,
    default: () => ({ // Provide a default structure for safety
      id: '',
      name: 'N/A',
      address: 'N/A',
      hours: 'N/A',
      contact: 'N/A',
      latLng: [0,0]
    })
  }
});
</script>

<style scoped>
/* Scoped styles for DonationCenterCard */
</style>
