<template>
  <div ref="map" class="w-full h-full rounded-lg"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const map = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!map.value) return

  const leafletMap = L.map(map.value).setView([-23.55052, -46.633308], 13) // São Paulo como exemplo

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(leafletMap)

  // Exemplo de pontos de doação
  const donationPoints: { name: string; coords: [number, number] }[] = [
    {
      name: 'Hospital Central',
      coords: [-23.55052, -46.633308],
    },
    {
      name: 'Unidade de Saúde Zona Sul',
      coords: [-23.56052, -46.643308],
    },
  ]

  donationPoints.forEach((point) => {
    L.marker(point.coords)
      .addTo(leafletMap)
      .bindPopup(`<strong>${point.name}</strong>`)
  })
})
</script>

<style scoped>
/* opcional: cursor de mapa */
.leaflet-container {
  cursor: grab;
}
</style>
