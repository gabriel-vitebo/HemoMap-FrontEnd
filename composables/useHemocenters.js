import hemocentrosComCoordenadas from '~/data/hemocentrosComCoordenadas.json';

export function useHemocenters() {
  const hemocenters = ref([]);

  function fetchHemocenters() {
    hemocenters.value = hemocentrosComCoordenadas.filter(center => center.latLng);
  }

  return {
    hemocenters,
    fetchHemocenters,
  };
}
