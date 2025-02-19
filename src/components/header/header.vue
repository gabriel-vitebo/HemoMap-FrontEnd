<template>
  <header :class="ui.base()">
    <h1>Aqui vai todo o conteudo do Header</h1>
  </header>
</template>

<script>
import { schema } from './header.schema';

export default {
  name: 'Header',
  computed: {
    ui() {
      return schema()
    }
  },
};
</script>