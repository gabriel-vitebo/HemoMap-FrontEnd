import { hemocentros } from '../data/hemocentros.js'; // usar .js mesmo que o arquivo tenha extensão .ts, após transpilar
import { formatCityName } from '../utils/formatCityName.js'; // usar .js mesmo que o arquivo tenha extensão .ts, após transpilar
import fs from 'fs';

// Processa os hemocentros
const formatted = hemocentros.map(({ name, address, city }) => {
  let cleanAddress = address;

  if (address.toLowerCase().includes(city.toLowerCase())) {
    const cidadeRegex = new RegExp(city, 'i');
    cleanAddress = address.replace(cidadeRegex, '').replace(/[-,]$/, '').trim();
  }

  return {
    name,
    address: cleanAddress,
    city,
    'city-formatted': formatCityName(city),
  };
});

// Escreve em um arquivo JSON
fs.writeFileSync('hemocentros_formatados.json', JSON.stringify(formatted, null, 2), 'utf-8');

console.log('Arquivo hemocentros_formatados.json criado com sucesso!');
