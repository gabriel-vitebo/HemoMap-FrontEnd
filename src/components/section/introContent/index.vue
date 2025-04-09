<script lang="ts" setup>
import heartFallBack from '~/assets/fallback/heart.jpg' 
import { schema } from './introContent.schema';

const props = defineProps<{
  options: 
    {
      title: string,
    }[]
}>();

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

    <div 
      v-for="(option, key) in props.options"
      :key
      class="flex flex-col gap-1 p-4"
    >
      <button :class="ui.button()">{{ option.title }}</button>
    </div>
  </div>
</template>