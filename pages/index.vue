<template>
  <div>
    <AppHeader />
    <main class="max-w-[900px] mx-auto py-12 px-4 space-y-12">
    <section class="text-center">
      <h1 class="text-4xl font-bold text-red-700 mb-4">Bem-vindo ao HemoMap</h1>
      <p class="text-lg text-gray-700">
        Conectando você à doação de sangue — descubra se você pode doar, tire dúvidas e encontre informações importantes.
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-8">
      <div class="p-6 border border-gray-200 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-semibold text-red-600 mb-2">Verificação de Elegibilidade</h2>
        <p class="text-gray-700 mb-4">
          Preencha um formulário simples para saber se você está apto a doar sangue. Lembre-se: este teste é apenas informativo.
        </p>
        <NuxtLink to="/eligibility" class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Verificar Elegibilidade
        </NuxtLink>
      </div>

      <div class="p-6 border border-gray-200 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-semibold text-red-600 mb-2">Perguntas Frequentes</h2>
        <p class="text-gray-700 mb-4">
          Encontre respostas para as principais dúvidas sobre a doação de sangue, baseadas nas informações do Ministério da Saúde.
        </p>
        <NuxtLink to="/faq" class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Acessar FAQ
        </NuxtLink>
      </div>

      <div class="p-6 border border-gray-200 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-semibold text-red-600 mb-2">Por que Doar Sangue?</h2>
        <p class="text-gray-700 mb-4">
          Entenda a importância da doação de sangue, quem você pode ajudar e como esse gesto salva vidas todos os dias.
        </p>
        <NuxtLink to="/information" class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Saiba Mais
        </NuxtLink>
      </div>

      <div class="p-6 border border-gray-200 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-semibold text-red-600 mb-2">Encontre um Local de Doação</h2>
        <p class="text-gray-700 mb-4">
          Utilize nosso mapa interativo para localizar hemocentros próximos e planejar sua doação com facilidade.
        </p>
        <NuxtLink to="/map" class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Abrir Mapa
        </NuxtLink>
      </div>

      <div class="p-6 border border-gray-200 rounded-2xl shadow-sm">
        <h2 class="text-2xl font-semibold text-red-600 mb-2">Fale com a gente</h2>
        <p class="text-gray-700 mb-4">
          Utilize nosso WhatsApp para tirar dúvidas, receber orientações e obter informações sobre doação de sangue.
        </p>
        <a href="https://wa.link/jrwfua" target="_blank"  class="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full transition">
        Fale conosco via WhatsApp
        </a>
      </div>
    </section>
    </main>
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import { useHead } from '@unhead/vue'
useHead({
  title: `HemoMap - Início`
})
</script>
