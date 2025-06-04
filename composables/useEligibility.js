import { ref } from 'vue';

export function useEligibility() {
  const eligibilityResult = ref(null);

  const criteria = {
    age: {
      eligibleValue: true,
      ineligibilityMessage: 'Você deve ter entre 18 e 65 anos para doar.',
    },
    weight: {
      eligibleValue: true,
      ineligibilityMessage: 'Você deve pesar pelo menos 50 kg para doar.',
    },
    health: {
      eligibleValue: true,
      ineligibilityMessage: 'Você deve estar em boas condições de saúde e se sentindo bem no dia da doação.',
    },
    recent_illness: {
      eligibleValue: false,
      ineligibilityMessage: 'Você não deve doar se teve doença recente como resfriado, gripe ou febre.',
    },
    recent_tattoo_piercing: {
      eligibleValue: false,
      ineligibilityMessage: 'Tatuagem, piercing ou acupuntura recente em local não regulamentado pode exigir um período de espera.',
    },
    recent_travel: {
      eligibleValue: false,
      ineligibilityMessage: 'Viagens para áreas com risco de malária podem exigir um período de espera. Consulte o centro de doação.',
    },
    medications: {
      eligibleValue: false,
      ineligibilityMessage: 'Certos medicamentos, como alguns antibióticos ou anticoagulantes, podem impedir a doação. Consulte o centro de doação.',
    },
    hiv_risk: {
      eligibleValue: false,
      ineligibilityMessage: 'Se você já testou positivo para HIV ou participou de atividades de alto risco, não está apto a doar sangue.',
    },
  };

  const checkEligibilityLogic = (answers) => {
    let isEligible = true;
    const reasonsForDeferral = [];

    for (const key in answers) {
      if (answers[key] === null) {
        eligibilityResult.value = {
          eligible: false,
          title: 'Informações Incompletas',
          message: 'Por favor, responda a todas as perguntas para verificar sua elegibilidade preliminar.',
          reasons: [],
        };
        return;
      }

      if (criteria[key] && answers[key] !== criteria[key].eligibleValue) {
        isEligible = false;
        reasonsForDeferral.push(criteria[key].ineligibilityMessage);
      }
    }

    if (isEligible) {
      eligibilityResult.value = {
        eligible: true,
        title: 'Potencialmente Elegível!',
        message: 'Com base em suas respostas, você pode estar elegível para doar sangue. Uma determinação final será feita pela equipe do centro de doação. Obrigado por considerar este ato que salva vidas!',
        reasons: [],
      };
    } else {
      eligibilityResult.value = {
        eligible: false,
        title: 'Potencialmente Adiado',
        message: 'Com base em suas respostas, você pode ser adiado para doar sangue neste momento. Esta é uma avaliação preliminar. Recomendamos discutir esses pontos com a equipe de um centro de doação para esclarecimentos e para entender quaisquer períodos de adiamento específicos.',
        reasons: reasonsForDeferral,
      };
    }
  };

  return {
    eligibilityResult,
    checkEligibilityLogic,
  };
}

