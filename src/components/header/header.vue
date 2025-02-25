<template>
  <header :class="ui.base()">
    <h2 :class="ui.title()">HemoMap</h2>
    <div
     v-if="!isDesktop"
     :class="ui.svgContent()"
    >
      <Icon 
        name="si:align-justify-fill" 
        size="30px" 
        :class="ui.svg()" 
      />
    </div>
    <div
     v-else
     :class="ui.menu()"
    >
      <button>Meu Perfil</button>
      <button>Sair</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { schema } from './header.schema';
import { useMediaQuery } from '@vueuse/core';
const ui = schema();
const isDesktop = useMediaQuery('(min-width: 1024px)');
</script>