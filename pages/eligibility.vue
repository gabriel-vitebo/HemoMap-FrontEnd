<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow container mx-auto py-10 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Verificador de Elegibilidade para Doação de Sangue</h1>
      <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Responda às seguintes perguntas para ter uma ideia preliminar sobre sua elegibilidade para doar sangue. Observe que esta não é uma avaliação definitiva. A elegibilidade final será determinada pela equipe do centro de doação no dia da doação. A honestidade em suas respostas é crucial para sua segurança e a segurança dos potenciais receptores.</p>

      <form class="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-6" @submit.prevent="checkEligibility">
        <EligibilityQuestion
          v-model="answers.age"
          question-id="age"
          question-text="Você tem entre 18 e 65 anos?"
        />
        <EligibilityQuestion
          v-model="answers.weight"
          question-id="weight"
          question-text="Você pesa pelo menos 50 kg?"
        />
        <EligibilityQuestion
          v-model="answers.health"
          question-id="health"
          question-text="Você está em boa saúde geral e se sentindo bem hoje?"
        />
        <EligibilityQuestion
          v-model="answers.recent_illness"
          question-id="recent_illness"
          question-text="Você teve febre, resfriado, gripe ou dor de garganta nas últimas 48 horas?"
          is-negative-question="true" 
        />
        <EligibilityQuestion
          v-model="answers.recent_tattoo_piercing"
          question-id="recent_tattoo_piercing"
          question-text="Você fez uma tatuagem, piercing ou acupuntura nos últimos 6 meses em um local não regulamentado?"
          is-negative-question="true"
        />
        <EligibilityQuestion
          v-model="answers.recent_travel"
          question-id="recent_travel"
          question-text="Você viajou para países com risco de malária nos últimos 12 meses? (Se não tiver certeza, consulte o centro de doação)"
          is-negative-question="true"
        />
        <EligibilityQuestion
          v-model="answers.medications"
          question-id="medications"
          question-text="Você está tomando algum medicamento que possa impedir a doação (por exemplo, certos antibióticos, anticoagulantes)? (Se não tiver certeza, consulte o centro de doação ou seu médico)"
          is-negative-question="true"
        />
        <EligibilityQuestion
          v-model="answers.hiv_risk"
          question-id="hiv_risk"
          question-text="Você já testou positivo para HIV ou participou de atividades que o colocam em alto risco de infecção por HIV?"
          is-negative-question="true"
        />

        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
          Verificar Minha Elegibilidade
        </button>
      </form>

      <div v-if="eligibilityResult !== null" class="mt-10 max-w-xl mx-auto p-6 rounded-lg shadow-xl" :class="eligibilityResult.eligible ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'" >
        <h2 class="text-2xl font-semibold mb-4" :class="eligibilityResult.eligible ? 'text-green-700' : 'text-red-700'">
          {{ eligibilityResult.title }}
        </h2>
        <p class="text-gray-800 leading-relaxed">{{ eligibilityResult.message }}</p>
        <p v-if="!eligibilityResult.eligible && eligibilityResult.reasons.length > 0" class="mt-4 text-gray-700">
          <strong>Possíveis razões para adiamento com base em suas respostas:</strong>
          <ul class="list-disc list-inside ml-4 mt-2">
            <li v-for="reason in eligibilityResult.reasons" :key="reason">{{ reason }}</li>
          </ul>
        </p>
        <p class="mt-4 text-sm text-gray-600">Lembre-se, esta é uma verificação preliminar. Consulte a equipe do centro de doação de sangue para uma determinação final.</p>
      </div>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
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
