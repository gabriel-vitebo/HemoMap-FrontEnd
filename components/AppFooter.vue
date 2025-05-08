<template>
  <footer class="bg-gray-800 text-white py-8 mt-12">
    <div class="container mx-auto text-center">
      <p>&copy; {{ new Date().getFullYear() }} HemoMap. Todos os direitos reservados.</p>
      <p class="mt-2 text-sm text-gray-400">Sua contribuição pode salvar vidas. Encontre um centro de doação perto de você.</p>
      <div class="mt-4 flex justify-center space-x-4">
        <a href="#" class="hover:text-red-400 transition-colors">Política de Privacidade</a>
        <a href="#" class="hover:text-red-400 transition-colors">Termos de Serviço</a>
        <a href="#" class="hover:text-red-400 transition-colors">Fale Conosco</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script needed for AppFooter yet.
</script>
