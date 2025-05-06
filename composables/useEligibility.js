import { ref } from 'vue';

export function useEligibility() {
  const eligibilityResult = ref(null);

  const criteria = {
    age: {
      eligibleValue: true,
      ineligibilityMessage: 'You must be between 18 and 65 years old to donate.',
    },
    weight: {
      eligibleValue: true,
      ineligibilityMessage: 'You must weigh at least 110 pounds (50 kg) to donate.',
    },
    health: {
      eligibleValue: true,
      ineligibilityMessage: 'You must be in good general health and feeling well on the day of donation.',
    },
    recent_illness: {
      eligibleValue: false, // A 'yes' to illness makes ineligible
      ineligibilityMessage: 'You should not donate if you have had a recent illness like a cold, flu, or fever.',
    },
    recent_tattoo_piercing: {
      eligibleValue: false, // A 'yes' to recent tattoo/piercing from unregulated place makes ineligible
      ineligibilityMessage: 'A recent tattoo, piercing, or acupuncture from an unregulated facility may require a deferral period.',
    },
    recent_travel: {
      eligibleValue: false, // A 'yes' to recent travel to risk areas makes ineligible
      ineligibilityMessage: 'Travel to certain malaria-risk areas may require a deferral period. Please check with the donation center.',
    },
    medications: {
      eligibleValue: false, // A 'yes' to certain medications makes ineligible
      ineligibilityMessage: 'Certain medications, such as some antibiotics or blood thinners, can make you ineligible to donate. Please consult the donation center.',
    },
    hiv_risk: {
      eligibleValue: false, // A 'yes' to HIV risk makes ineligible
      ineligibilityMessage: 'If you have ever tested positive for HIV or engaged in high-risk activities, you are not eligible to donate blood.',
    },
  };

  const checkEligibilityLogic = (answers) => {
    let isEligible = true;
    const reasonsForDeferral = [];

    for (const key in answers) {
      if (answers[key] === null) {
        eligibilityResult.value = {
          eligible: false,
          title: 'Incomplete Information',
          message: 'Please answer all questions to check your preliminary eligibility.',
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
        title: 'Potentially Eligible!',
        message: 'Based on your answers, you may be eligible to donate blood. A final determination will be made by the staff at the donation center. Thank you for considering this life-saving act!',
        reasons: [],
      };
    } else {
      eligibilityResult.value = {
        eligible: false,
        title: 'Potentially Deferred',
        message: 'Based on your answers, you may be deferred from donating blood at this time. This is a preliminary assessment. We recommend discussing these points with staff at a donation center for clarification and to understand any specific deferral periods.',
        reasons: reasonsForDeferral,
      };
    }
  };

  return {
    eligibilityResult,
    checkEligibilityLogic,
  };
}

