<template>
  <footer class="bg-gray-800 text-white py-8 mt-12">
    <div class="container mx-auto text-center">
      <p>&copy; {{ new Date().getFullYear() }} BloodLink. All rights reserved.</p>
      <p class="mt-2 text-sm text-gray-400">Your contribution can save lives. Find a donation center near you.</p>
      <div class="mt-4 flex justify-center space-x-4">
        <a href="#" class="hover:text-red-400 transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-red-400 transition-colors">Terms of Service</a>
        <a href="#" class="hover:text-red-400 transition-colors">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No specific script needed for AppFooter yet.
</script>

<style scoped>
/* Scoped styles for AppFooter */
</style>
