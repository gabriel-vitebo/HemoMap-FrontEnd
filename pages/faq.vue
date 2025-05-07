<template>
  <div>
    <AppHeader />
    <main class="container mx-auto py-8 px-4">
      <h1 class="text-4xl font-bold mb-8 text-center text-red-600">Perguntas Frequentes (FAQ)</h1>

      <div class="space-y-6">
        <FAQItem
          question="Quem pode doar sangue?"
          answer="A maioria dos adultos saudáveis entre 18 e 65 anos pode doar sangue. Os critérios específicos de elegibilidade podem variar de acordo com a localização e o centro de doação de sangue, mas, geralmente, você deve pesar pelo menos 50 kg, estar em boa saúde geral e não ter certas condições médicas ou estar tomando certos medicamentos. É sempre melhor verificar com o centro de doação de sangue local os requisitos específicos antes de planejar sua doação. Eles realizarão um mini-check-up de saúde para garantir que você está apto a doar no dia."
        />
        <FAQItem
          question="Com que frequência posso doar sangue?"
          answer="Para doação de sangue total, você pode doar normalmente a cada 56 dias (8 semanas). Para outros tipos de doações, como plaquetas ou plasma, a frequência pode ser diferente. Por exemplo, doadores de plaquetas podem doar frequentemente a cada 7 dias, até 24 vezes por ano. Doadores de glóbulos vermelhos duplos podem precisar esperar 112 dias. O intervalo específico depende do tipo de doação e das políticas do centro de doação. Doações regulares são incentivadas para manter um fornecimento estável de sangue."
        />
        <FAQItem
          question="Doar sangue é seguro?"
          answer="Sim, doar sangue é muito seguro. Todas as agulhas e bolsas de coleta de sangue são estéreis, usadas apenas uma vez e depois descartadas. A equipe é profissionalmente treinada para garantir a segurança e o conforto do doador. Você não pode contrair nenhuma doença infecciosa, incluindo HIV/AIDS, ao doar sangue. O próprio processo de doação também é monitorado para garantir seu bem-estar."
        />
        <FAQItem
          question="Quanto tempo leva o processo de doação de sangue?"
          answer="Todo o processo, desde o registro até os lanches pós-doação, geralmente leva cerca de uma hora. A parte real da doação de sangue, onde a agulha está no seu braço, dura apenas cerca de 8-10 minutos para uma doação de sangue total. Doações por aférese (plaquetas, plasma, glóbulos vermelhos) podem levar mais tempo, normalmente de 1,5 a 2 horas. Planeje gastar um pouco mais de tempo na sua primeira doação, pois o registro pode levar um pouco mais."
        />
        <FAQItem
          question="O que devo fazer antes de doar sangue?"
          answer="Antes de doar sangue, é importante ter uma boa noite de sono, comer uma refeição saudável (evitando alimentos gordurosos) e beber bastante líquido (água ou suco) nas 24 horas que antecedem a doação. Leve um documento de identidade com foto. Se você for um doador de plaquetas, não deve tomar aspirina ou produtos que contenham aspirina por pelo menos 48 horas antes da doação. Informe a equipe sobre quaisquer medicamentos que você esteja tomando."
        />
        <FAQItem
          question="O que devo fazer após doar sangue?"
          answer="Após doar, você deve descansar por cerca de 10-15 minutos e aproveitar os lanches fornecidos pelo centro. Beba líquidos extras nas próximas 24-48 horas. Evite atividades físicas extenuantes ou levantar peso no restante do dia. Se sentir tontura ou fraqueza, deite-se ou sente-se com a cabeça entre os joelhos até que a sensação passe. Mantenha o curativo no braço por algumas horas e limpe a área suavemente mais tarde. Se houver hematomas, aplique uma compressa fria inicialmente e, depois, compressas mornas."
        />
        <FAQItem
          question="Posso doar sangue se estiver com resfriado ou gripe?"
          answer="Não, você não deve doar sangue se estiver com resfriado, gripe, dor de garganta, febre ou quaisquer outros sintomas de doença. Aguarde até estar completamente recuperado e sem sintomas por pelo menos 48 horas antes de tentar doar. Isso é para proteger tanto sua saúde quanto a saúde do receptor."
        />
        <FAQItem
          question="Quais são os tipos sanguíneos mais comuns?"
          answer="Os principais grupos sanguíneos são A, B, AB e O, cada um dos quais pode ser Rh-positivo ou Rh-negativo. Isso resulta em oito tipos sanguíneos comuns: O+, O-, A+, A-, B+, B-, AB+ e AB-. O tipo O-negativo é frequentemente chamado de 'doador universal' porque pode ser dado a pacientes de qualquer tipo sanguíneo em emergências. O tipo AB-positivo é conhecido como 'receptor universal' para doações de plasma. Saber seu tipo sanguíneo é útil, mas não é necessário para doar; o centro de sangue determinará seu tipo sanguíneo após sua primeira doação."
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
