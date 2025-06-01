// scripts/generateHemocentersWithCoords.js
import fs from 'fs';
import fetch from 'node-fetch';

const hemocentros = JSON.parse(fs.readFileSync('./data/hemocentros_formatados.json', 'utf-8'));

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function geocodeAddress(address, city) {
  const query = encodeURIComponent(`${address}, ${city}, São Paulo, Brasil`);
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.length > 0) {
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  }

  return null;
}

async function generate() {
  const result = [];

  for (const center of hemocentros) {
    const latLng = await geocodeAddress(center.address || center.name, center.city);
    await delay(1000); // evita rate-limit

    result.push({
      ...center,
      latLng,
    });

    console.log(`Processado: ${center.name} - ${latLng ? 'OK' : 'Falhou'}`);
  }

  fs.writeFileSync('./data/hemocentrosComCoordenadas.json', JSON.stringify(result, null, 2));
  console.log('✅ Arquivo hemocentrosComCoordenadas.json gerado com sucesso!');
}

generate().catch(console.error);
