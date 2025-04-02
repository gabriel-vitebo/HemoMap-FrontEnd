<script lang="ts" setup>
import heartFallBack from '~/assets/fallback/heart.jpg' 
import { schema } from './introContent.schema';

const ui = computed(() => {
  return schema();
});
</script>

<template>
  <div :class="ui.base()">
    <div :class="ui.banner()">
      <img 
        :src="heartFallBack" 
        alt="Banner de doação" 
        :class="ui.bannerImage()"
      >
      <div 
        :class="ui.bannerContent()">
        <h1 :class="ui.bannerContentTitle()">Faça a Diferença</h1>
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