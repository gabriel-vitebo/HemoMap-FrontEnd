<template>
  <div class="shadow-lg rounded-lg overflow-hidden h-[600px] w-full">
    <client-only>
      <l-map
        ref="map"
        :zoom="zoom"
        :center="centerMap"
        :use-global-leaflet="false"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <l-marker
          v-for="center in hemocenters"
          :key="center.id"
          :lat-lng="center.latLng"
          @click="openPopup(center)"
        >
          <l-icon
            :icon-url="customMarkerIconUrl"
            :icon-size="[45, 45]"
            :icon-anchor="[16, 32]"
            :popup-anchor="[0, -32]"
          />
          <l-popup>
            <DonationCenterCard :center-data="selectedCenter" />
          </l-popup>
        </l-marker>
        <l-control-attribution position="bottomright" />
        <l-control-zoom position="bottomright" />
      </l-map>
    </client-only>
    <div v-if="!mapReady" class="flex items-center justify-center h-full bg-gray-100">
        <p class="text-gray-600 text-lg">Carregando mapa...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent, watch } from 'vue';
import "leaflet/dist/leaflet.css";


import DonationCenterCard from '~/components/DonationCenterCard.vue';
import { useHemocenters } from '~/composables/useHemocenters';

const LMap = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LMap));
const LTileLayer = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LTileLayer));
const LMarker = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LMarker));
const LPopup = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LPopup));
const LIcon = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LIcon));
const LControlAttribution = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LControlAttribution));
const LControlZoom = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LControlZoom));

const map = ref(null);
const zoom = ref(6);
const centerMap = ref([-23.1991748,-45.9066664]);
const mapReady = ref(false);

const { hemocenters, fetchHemocenters } = useHemocenters();
const selectedCenter = ref(null);

const customMarkerIconUrl = ref("/map_marker_icon.svg");

const props = defineProps({
  focusedCenter: {
    type: Object,
    default: null
  }
});

watch(() => props.focusedCenter, (newCenter) => {
  console.log('FOCUSED CENTER CHANGED:', newCenter);

  if (
    newCenter &&
    typeof newCenter.lat === 'number' &&
    typeof newCenter.lng === 'number' &&
    map.value &&
    map.value.leafletObject
  ) {
    const latLng = [newCenter.lat, newCenter.lng];
    map.value.leafletObject.setView(latLng, 13, {
      animate: true
    });
  }
});


onMounted(async () => {
  await fetchHemocenters();
  mapReady.value = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = [position.coords.latitude, position.coords.longitude];
        centerMap.value = userLocation;
        zoom.value = 13;
        if (map.value && map.value.leafletObject) {
          map.value.leafletObject.setView(userLocation, 13);
        }
      },
      (error) => {
        console.warn('Error getting user location:', error.message);
      }
    );
  }
});

const openPopup = (centerData) => {
  selectedCenter.value = centerData;
};

</script>