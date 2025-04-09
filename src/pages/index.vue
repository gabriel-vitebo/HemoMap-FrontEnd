<script setup lang="ts">
import Header from '~/components/header/header.vue';
import Body from '~/components/body/body.vue';
import Footer from '~/components/footer/footer.vue';

const options = [
  {
    title: 'Quero Doar Agora',
  },
  {
    title: 'Como doar?',
  },
  {
    title: 'Sobre nós',
  },
];

</script>

<template>
  <Header />
  <Body>
    <SectionIntroContent
      :options
    />
    <SectionAboutUs />
  </Body>
  <Footer />
</template>