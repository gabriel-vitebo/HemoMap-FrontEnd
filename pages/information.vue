<template>
  <div>
    <AppHeader />
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-6 text-center text-red-600">Understanding Blood Donation</h1>

      <section class="mb-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 text-red-700">Why Donate Blood?</h2>
        <p class="text-gray-700 leading-relaxed">Blood donation is a noble act that saves lives. Every few seconds, someone, somewhere, needs blood. This could be due to accidents, surgeries, childbirth complications, cancer treatments, or chronic illnesses like sickle cell anemia and thalassemia. A single pint of donated blood can help save up to three lives. By donating blood, you become a vital link in a chain of survival, offering hope and a second chance at life to those in desperate need. The demand for blood is constant, but the supply is not always sufficient, especially for rare blood types. Your voluntary donation ensures that hospitals and emergency services have a readily available supply of safe blood for patients. It's a simple, safe, and profoundly impactful way to contribute to your community and make a tangible difference in the world. Beyond the immediate life-saving benefits for recipients, donors often experience a sense of fulfillment and connection to their community. Regular blood donation can also have health benefits for the donor, such as reducing the risk of certain health conditions and providing a mini-health check-up, as your vital signs are checked before each donation.</p>
      </section>

      <section class="mb-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 text-red-700">The Blood Donation Process</h2>
        <p class="text-gray-700 leading-relaxed">The blood donation process is straightforward and typically takes about an hour from start to finish, with the actual donation lasting only about 8-10 minutes. It begins with registration, where you'll provide some basic information. Next, you'll have a confidential mini-health check, including checking your temperature, pulse, blood pressure, and hemoglobin levels to ensure you're fit to donate. If you meet the criteria, you'll proceed to the donation area. A trained phlebotomist will clean an area on your arm and insert a sterile needle to collect the blood. After the donation, you'll be asked to rest for a short period and enjoy some refreshments to help your body rehydrate and replenish fluids. It's important to drink plenty of fluids and avoid strenuous activity for the rest of the day. Your donated blood will then be tested for various infectious diseases to ensure its safety before being processed and distributed to hospitals.</p>
      </section>

      <section class="p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 text-red-700">Types of Blood Donations</h2>
        <p class="text-gray-700 leading-relaxed">There are several types of blood donations. The most common is whole blood donation, where you donate about a pint of blood containing red cells, white cells, platelets, and plasma. Another type is apheresis, a special kind of donation that allows a donor to give specific blood components, such as platelets, plasma, or red cells, while the rest of the blood is returned to the donor. Platelet donations (plateletpheresis) are crucial for cancer patients and those undergoing organ transplants. Plasma donations (plasmapheresis) are often used for patients with liver disease, burns, and clotting factor deficiencies. Double red cell donation allows you to donate two units of red blood cells at one time, which is particularly helpful for trauma patients and those with severe anemia. The type of donation you can make may depend on your blood type, physical condition, and the needs of the local blood center.</p>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// No specific script needed for this static informational page yet.
// We might add reactive elements or data fetching later.
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>

<style scoped>
/* Scoped styles for the information page */
.container {
  max-width: 900px;
}
</style>
