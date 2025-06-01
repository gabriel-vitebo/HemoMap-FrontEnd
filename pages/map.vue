<template>
  <div>
    <AppHeader />
    <main class="max-w-3xl mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Encontre Hemocentros perto de você</h1>
      <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Use o mapa interativo abaixo para encontrar hemocentros próximos 
        à sua localização. Clique em um marcador para obter mais informações 
        sobre um centro. Por favor, ative os serviços de localização 
        no seu navegador para uma melhor experiência.
      </p>

      <div class="mb-6 flex justify-center">
        <input
          v-model="searchQuery"
          placeholder="Digite a cidade"
          class="border border-gray-300 px-4 py-2 rounded w-full max-w-md"
          @keyup.enter="handleSearch"
        >
        <button 
          class="ml-2 bg-red-600 text-white px-4 py-2 rounded" 
          @click="handleSearch"
        >
          Buscar
        </button>
      </div>
      <InteractiveMap :focused-center="selectedHemocenter"/>

      <section v-if="filteredResults.length" class="mt-12 w-full">
        <h2 
          class="text-2xl font-bold text-red-600 mb-6 text-center"
        >
            Hemocentros perto de você
        </h2>
        
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="center in filteredResults"
            :key="center.name"
            class="border border-gray-200 rounded-lg shadow-md p-4 bg-white w-full flex flex-col items-center"
          >
            <h3 class="text-base font-semibold text-gray-800">{{ center.name }}</h3>
            <ul>
              <li>{{ center.address }}</li>
              <li>{{ center.city }}</li>
            </ul>
            <button
              class="mt-2 bg-red-600 text-white px-4 py-2 rounded" 
              @click="selectedHemocenter = center"
            >
              Ver no Mapa
            </button>
          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue'
import InteractiveMap from '~/components/InteractiveMap.vue';

const searchQuery = ref('');
const filteredResults = ref([]);
const { searchByCity } = useHemocenters();
const selectedHemocenter = ref(null);


function handleSearch() {
  if (searchQuery.value.trim()) {
    const results = searchByCity(searchQuery.value);
    filteredResults.value = results;

    if (results.length > 0) {
      selectedHemocenter.value = {
        lat: results[0].latLng[0],
        lng: results[0].latLng[1]
      };
    }
  } else {
    filteredResults.value = [];
    selectedHemocenter.value = null;
  }
}


</script>
