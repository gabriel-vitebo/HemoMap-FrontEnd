<script lang="ts" setup>
import heartFallBack from '~/assets/fallback/heart.jpg' 
</script>

<template>
  <div class="flex flex-col w-full gap-8">
    <div class="relative w-full h-96 overflow-hidden">
      <img :src="heartFallBack" alt="Banner de doação" class="size-full object-cover">
      <div 
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        <h1 class="text-4xl mb-4">Faça a Diferença</h1>
        <p>Sua doação pode transformar vidas</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 p-4">
      <div class="w-full active">
        <button class="w-full p-4 bg-red-600 border-none rounded-[8px] text-xl font-bold">Quero doar agora</button>
      </div>
      <div class="sidebar-option">
        <button class="secondary-button">Como funciona</button>
      </div>
      <div class="sidebar-option">
        <button class="secondary-button">Sobre nós</button>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .secondary-button {
    width: 100%;
    padding: 1rem;
    background-color: #f8f9fa;
    color: #343a40;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  </style>