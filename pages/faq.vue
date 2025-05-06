<template>
  <div>
    <AppHeader />
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Frequently Asked Questions (FAQ)</h1>

      <div class="space-y-6">
        <FAQItem
          question="Who can donate blood?"
          answer="Most healthy adults between the ages of 18 and 65 can donate blood. Specific eligibility criteria can vary by location and blood center, but generally, you must weigh at least 110 pounds (50 kg), be in good general health, and not have certain medical conditions or be taking certain medications. It is always best to check with your local blood donation center for their specific requirements before you plan to donate. They will conduct a mini-health check to ensure you are fit to donate on the day."
        />
        <FAQItem
          question="How often can I donate blood?"
          answer="For whole blood donation, you can typically donate every 56 days (8 weeks). For other types of donations, like platelets or plasma, the frequency can be different. For example, platelet donors can often donate every 7 days, up to 24 times a year. Double red cell donors may need to wait 112 days. The specific interval depends on the type of donation and the policies of the donation center. Regular donation is encouraged to maintain a stable blood supply."
        />
        <FAQItem
          question="Is donating blood safe?"
          answer="Yes, donating blood is very safe. All needles and blood collection bags are sterile, used only once, and then discarded. The staff are professionally trained to ensure the safety and comfort of the donor. You cannot get any infectious diseases, including HIV/AIDS, by donating blood. The donation process itself is also monitored to ensure your well-being."
        />
        <FAQItem
          question="How long does the blood donation process take?"
          answer="The entire process, from registration to post-donation refreshments, usually takes about an hour. The actual blood donation part, where the needle is in your arm, only lasts about 8-10 minutes for a whole blood donation. Apheresis donations (platelets, plasma, red cells) can take longer, typically 1.5 to 2 hours. Plan to spend a little extra time for your first donation as registration might take a bit longer."
        />
        <FAQItem
          question="What should I do before donating blood?"
          answer="Before donating blood, it's important to get a good night's sleep, eat a healthy meal (avoiding fatty foods), and drink plenty of fluids (water or juice) in the 24 hours leading up to your donation. Bring a photo ID with you. If you are a platelet donor, you should not take aspirin or products containing aspirin for at least 48 hours before your donation. Inform the staff of any medications you are currently taking."
        />
        <FAQItem
          question="What should I do after donating blood?"
          answer="After donating, you should rest for about 10-15 minutes and have some refreshments provided by the center. Drink extra fluids for the next 24-48 hours. Avoid strenuous physical activity or heavy lifting for the rest of the day. If you feel dizzy or lightheaded, lie down or sit with your head between your knees until the feeling passes. Keep the bandage on your arm for a few hours, and clean the area gently later. If you experience any bruising, apply a cold pack initially, then warm compresses later."
        />
        <FAQItem
          question="Can I donate blood if I have a cold or flu?"
          answer="No, you should not donate blood if you have a cold, flu, sore throat, fever, or any other symptoms of illness. Wait until you have fully recovered and have been symptom-free for at least 48 hours before attempting to donate. This is to protect both your health and the health of the recipient."
        />
         <FAQItem
          question="What are the common blood types?"
          answer="The main blood groups are A, B, AB, and O, each of which can be Rh-positive or Rh-negative. This results in eight common blood types: O+, O-, A+, A-, B+, B-, AB+, and AB-. O-negative is often called the 'universal donor' because it can be given to patients of any blood type in emergencies. AB-positive is known as the 'universal recipient' for plasma donations. Knowing your blood type is helpful, but not required to donate; the blood center will type your blood after your first donation."
        />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import FAQItem from '~/components/FAQItem.vue';
</script>

<style scoped>
/* Scoped styles for the FAQ page */
.container {
  max-width: 900px;
}
</style>
