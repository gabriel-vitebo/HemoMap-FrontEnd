<script>
import { schema } from '../body/body.schema';

export default {
  name: 'Body',
  computed: {
    ui() {
      return schema();
    },
  },
};
</script>

<template>
  <main :class="ui.base()">
    <slot>
    </slot>
  </main>
</template>
