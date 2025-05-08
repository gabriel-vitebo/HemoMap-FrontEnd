<template>
  <div class="mb-6 p-5 border border-gray-300 rounded-lg bg-gray-50">
    <p class="text-lg font-medium text-gray-800 mb-3">{{ props.questionText }}</p>
    <div class="flex items-center space-x-6">
      <label class="flex items-center cursor-pointer">
        <input 
          type="radio" 
          :name="props.questionId" 
          :value="true" 
          class="h-5 w-5 text-red-600 focus:ring-red-500 focus:shadow-sm border-gray-400 checked:bg-red-600 checked:border-red-600" 
          @change="updateValue(true)"
        >
        <span class="ml-2 text-gray-700">Sim</span>
      </label>
      <label class="flex items-center cursor-pointer">
        <input 
          type="radio" 
          :name="props.questionId" 
          :value="false" 
          class="h-5 w-5 text-red-600 focus:ring-red-500 focus:shadow-sm border-gray-400 checked:bg-red-600 checked:border-red-600" 
          @change="updateValue(false)"
        >
        <span class="ml-2 text-gray-700">Não</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  questionId: String,
  questionText: String,
  modelValue: Boolean,
  isNegativeQuestion: { // If true, a 'yes' answer makes the user ineligible for this question
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value);
};
</script>
