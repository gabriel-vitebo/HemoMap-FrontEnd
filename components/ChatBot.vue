<!-- components/ChatBot.vue -->
<template>
  <div>
    <button
      class="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition"
      @click="toggleBot"
    >
      <img :src="icon" alt="ChatBot" class="w-6 h-6" />
    </button>

    <div v-if="botVisible" id="chatbot-container" class="fixed bottom-20 right-4 z-50"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const botVisible = ref(false)
const scriptLoaded = ref(false)

const icon = 'https://xltw-api6-8lww.b2.xano.io/vault/4kRWyNwe/me1t6XZR9c6n0dnQSCm3hC6SuSo/AVlnHg../3+-+chat_redondo.json'

function loadBotScript() {
  if (document.getElementById('chatbot-script')) return

  const script = document.createElement('script')
  script.id = 'chatbot-script'
  script.src = 'https://xltw-api6-8lww.b2.xano.io/vault/4kRWyNwe/rh0JCk86x67O-LMWG86mxG-r-ns/RF2OPQ../chatbotWeb3.js'
  script.setAttribute('dominio', 'https://digichatx.com.br/chat/')
  script.setAttribute('color', 'ea0c06')
  script.setAttribute('agent', 'af764ef8-165f-484c-8bfa-3779ad91ca3c')
  script.setAttribute('icon', icon)

  document.body.appendChild(script)

  script.onload = () => {
    console.log('ChatBot script carregado')
    botVisible.value = true
    scriptLoaded.value = true
  }
}

function toggleBot() {
  if (!scriptLoaded.value) {
    loadBotScript()
  } else {
    botVisible.value = !botVisible.value
  }
}
</script>

