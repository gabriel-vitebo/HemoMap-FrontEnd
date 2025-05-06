<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Blood Donation Eligibility Checker</h1>
      <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Answer the following questions to get a preliminary idea of your eligibility to donate blood. Please note that this is not a definitive assessment. Final eligibility will be determined by the staff at the donation center on the day of donation. Honesty in your answers is crucial for your safety and the safety of potential recipients.</p>

      <form @submit.prevent="checkEligibility" class="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-6">
        <EligibilityQuestion
          questionId="age"
          questionText="Are you between 18 and 65 years old?"
          v-model="answers.age"
        />
        <EligibilityQuestion
          questionId="weight"
          questionText="Do you weigh at least 110 pounds (50 kg)?"
          v-model="answers.weight"
        />
        <EligibilityQuestion
          questionId="health"
          questionText="Are you in good general health and feeling well today?"
          v-model="answers.health"
        />
        <EligibilityQuestion
          questionId="recent_illness"
          questionText="Have you had a fever, cold, flu, or sore throat in the last 48 hours?"
          v-model="answers.recent_illness"
          isNegativeQuestion="true" 
        />
        <EligibilityQuestion
          questionId="recent_tattoo_piercing"
          questionText="Have you had a tattoo, piercing, or acupuncture in the last 6 months from an unregulated facility?"
          v-model="answers.recent_tattoo_piercing"
          isNegativeQuestion="true"
        />
        <EligibilityQuestion
          questionId="recent_travel"
          questionText="Have you traveled to certain malaria-risk countries in the last 12 months? (If unsure, please check with the donation center)"
          v-model="answers.recent_travel"
          isNegativeQuestion="true"
        />
        <EligibilityQuestion
          questionId="medications"
          questionText="Are you currently taking any medications that might prevent donation (e.g., certain antibiotics, blood thinners)? (If unsure, please consult the donation center or your doctor)"
          v-model="answers.medications"
          isNegativeQuestion="true"
        />
        <EligibilityQuestion
          questionId="hiv_risk"
          questionText="Have you ever tested positive for HIV or engaged in activities that put you at high risk for HIV infection?"
          v-model="answers.hiv_risk"
          isNegativeQuestion="true"
        />

        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
          Check My Eligibility
        </button>
      </form>

      <div v-if="eligibilityResult !== null" class="mt-10 max-w-xl mx-auto p-6 rounded-lg shadow-xl" :class="eligibilityResult.eligible ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'" >
        <h2 class="text-2xl font-semibold mb-4" :class="eligibilityResult.eligible ? 'text-green-700' : 'text-red-700'">
          {{ eligibilityResult.title }}
        </h2>
        <p class="text-gray-800 leading-relaxed">{{ eligibilityResult.message }}</p>
        <p v-if="!eligibilityResult.eligible && eligibilityResult.reasons.length > 0" class="mt-4 text-gray-700">
          <strong>Potential reasons for deferral based on your answers:</strong>
          <ul class="list-disc list-inside ml-4 mt-2">
            <li v-for="reason in eligibilityResult.reasons" :key="reason">{{ reason }}</li>
          </ul>
        </p>
        <p class="mt-4 text-sm text-gray-600">Remember, this is a preliminary check. Please consult with the blood donation center staff for a final determination.</p>
      </div>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import EligibilityQuestion from '~/components/EligibilityQuestion.vue';
import { useEligibility } from '~/composables/useEligibility';

const answers = reactive({
  age: null,
  weight: null,
  health: null,
  recent_illness: null, // Expect 'no' for eligibility
  recent_tattoo_piercing: null, // Expect 'no' for eligibility
  recent_travel: null, // Expect 'no' for eligibility
  medications: null, // Expect 'no' for eligibility
  hiv_risk: null, // Expect 'no' for eligibility
});

const { eligibilityResult, checkEligibilityLogic } = useEligibility();

const checkEligibility = () => {
  checkEligibilityLogic(answers);
};

</script>

<style scoped>
/* Scoped styles for the eligibility page */
</style>
