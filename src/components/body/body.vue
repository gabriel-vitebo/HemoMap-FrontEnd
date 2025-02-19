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
    <slot name="body">
      <h1></h1>
    </slot>
  </main>
</template>
