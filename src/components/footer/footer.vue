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
    <span>
      Feito por alunos da Etep
    </span>
  </footer>
</template>