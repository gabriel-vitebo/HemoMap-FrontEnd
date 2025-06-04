<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans">
    <slot />
    <BotLoader />
  </div>
</template>

<script setup>
import BotLoader from '~/components/BotLoader.vue'

// Default layout, might include global elements shared across all pages if not in AppHeader/AppFooter
</script>
