<template>
  <header :class="ui.base()">
    <h2 :class="ui.title()">HemoMap</h2>
    <div>
      <Icon name="si:align-justify-fill" />
    </div>
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