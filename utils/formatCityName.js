export function formatCityName(city) {
  return city
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '') // regex para remover os acentos
    .toLowerCase()
    .replace(/\s+/g, '-'); // substitui espaços por hífens
}