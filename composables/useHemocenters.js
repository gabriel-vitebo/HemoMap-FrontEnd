import hemocentrosComCoordenadas from '~/data/hemocentrosComCoordenadas.json';
import { formatCityName } from '~/utils/formatCityName';

export function useHemocenters() {
  const hemocenters = ref([]);

  function fetchHemocenters() {
    hemocenters.value = hemocentrosComCoordenadas.filter(center => center.latLng);
  }

  function searchByCity(city) {
    const normalizedQuery = formatCityName(city);

    return hemocentrosComCoordenadas.filter(center => {
      return (
        center.latLng &&
        center.city_formatted?.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  return {
    hemocenters,
    fetchHemocenters,
    searchByCity
  };
}
