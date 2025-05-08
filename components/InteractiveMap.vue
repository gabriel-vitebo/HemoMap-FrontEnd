<template>
  <div style="height: 600px; width: 100%;" class="shadow-lg rounded-lg overflow-hidden">
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
            :icon-size="[32, 32]"
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
import { ref, onMounted, defineAsyncComponent } from 'vue';
import "leaflet/dist/leaflet.css";

import DonationCenterCard from '~/components/DonationCenterCard.vue';
import { useHemocenters } from '~/composables/useHemocenters';

// Dynamically import LMap, LTileLayer, LMarker, LPopup, LIcon, LControlAttribution, LControlZoom only on client-side
const LMap = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LMap));
const LTileLayer = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LTileLayer));
const LMarker = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LMarker));
const LPopup = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LPopup));
const LIcon = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LIcon));
const LControlAttribution = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LControlAttribution));
const LControlZoom = defineAsyncComponent(() => import('@vue-leaflet/vue-leaflet').then(module => module.LControlZoom));

const map = ref(null);
const zoom = ref(6);
const centerMap = ref([39.9042, 116.4074]); // Default to Beijing, will try to use user's location
const mapReady = ref(false);

const { hemocenters, fetchHemocenters } = useHemocenters();
const selectedCenter = ref(null);

// Using a placeholder for custom marker, will create this later or use a default one.
// For now, let's ensure Leaflet's default icon works if custom one is not set up.
// const customMarkerIconUrl = ref("/marker-icon.png"); // Path relative to public directory
// For simplicity, let's use Leaflet's default icon path if available or rely on its internal default.
// If using a custom icon, ensure it's in the `public` folder.
// For now, we'll let Leaflet handle its default icon or we can explicitly set it if needed.
// It's common to have issues with default icon paths in bundlers, so often explicit import is better.
// import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });
// For Nuxt 3, it's better to place static assets in `public` dir and reference them directly.
const customMarkerIconUrl = ref("/images/map_marker_icon.png"); // Assuming it's in public/images/

onMounted(async () => {
  await fetchHemocenters(); // Fetch mock data
  mapReady.value = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = [position.coords.latitude, position.coords.longitude];
        centerMap.value = userLocation;
        zoom.value = 13; // Zoom in when user location is available
        if (map.value && map.value.leafletObject) {
          map.value.leafletObject.setView(userLocation, 13);
        }
      },
      (error) => {
        console.warn('Error getting user location:', error.message);
        // Keep default center if location is denied or unavailable
      }
    );
  }
});

const openPopup = (centerData) => {
  selectedCenter.value = centerData;
  // Vue-Leaflet handles popup opening on marker click automatically when LPopup is a child of LMarker.
  // If manual control is needed, you'd interact with the marker's leafletObject.
};

</script>

<style>
/* Global styles for Leaflet if needed, though scoped is preferred for components */
.leaflet-popup-content-wrapper {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.leaflet-popup-content {
    margin: 10px !important; /* Override default leaflet popup padding */
    min-width: 250px;
}
</style>
