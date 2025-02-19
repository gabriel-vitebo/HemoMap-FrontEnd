<script>
import { schema } from './footer.schema';

export default {
  name: 'Footer',
  computed: {
    ui() {
      return schema()
    }
  }
};
</script>

<template>
  <footer :class="ui.base()">
    <h1>Aqui vai todo o conteudo do footer</h1>
  </footer>
</template>