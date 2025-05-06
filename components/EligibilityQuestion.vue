<template>
  <div class="mb-6 p-5 border border-gray-300 rounded-lg bg-gray-50">
    <p class="text-lg font-medium text-gray-800 mb-3">{{ questionText }}</p>
    <div class="flex items-center space-x-6">
      <label class="flex items-center cursor-pointer">
        <input 
          type="radio" 
          :name="questionId" 
          :value="true" 
          @change="updateValue(true)" 
          class="form-radio h-5 w-5 text-red-600 focus:ring-red-500 border-gray-400"
        />
        <span class="ml-2 text-gray-700">Yes</span>
      </label>
      <label class="flex items-center cursor-pointer">
        <input 
          type="radio" 
          :name="questionId" 
          :value="false" 
          @change="updateValue(false)" 
          class="form-radio h-5 w-5 text-red-600 focus:ring-red-500 border-gray-400"
        />
        <span class="ml-2 text-gray-700">No</span>
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

<style scoped>
/* Scoped styles for EligibilityQuestion component */
.form-radio:checked {
  background-color: #DC2626; /* red-600 */
  border-color: #DC2626; /* red-600 */
}
.form-radio:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.3); /* focus:ring-red-500 with opacity */
}
</style>
