import hemocentrosComCoordenadas from '~/data/hemocentrosComCoordenadas.json';

export function useHemocenters() {
  const hemocenters = ref([]);

  function fetchHemocenters() {
    hemocenters.value = hemocentrosComCoordenadas.filter(center => center.latLng);
  }

  function searchByCity(city) {
    const normalizedQuery = city.toLowerCase().trim();

    return hemocentrosComCoordenadas.filter(center => {
      return (
        center.latLng &&
        center.city?.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  return {
    hemocenters,
    fetchHemocenters,
    searchByCity
  };
}
