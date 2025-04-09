<script lang="ts" setup>
import { schema } from './aboutUs.schema';

const ui = computed(() => {
  return schema();
})
</script>

<template>
  <div :class="ui.base()">
    <h2>Sobre nós</h2>
    <div :class="ui.content()">
      <p :class="ui.text()">
        Somos estudantes de Tecnologia da Informação na ETEP e, como parte do nosso 
        projeto de semestre, decidimos usar nossos conhecimentos para impactar
        positivamente a sociedade. Sabemos que muitas pessoas têm vontade 
        de doar sangue, mas não sabem por onde começar — 
        foi pensando nisso que surgiu a nossa ideia.
      </p>
      <p :class="ui.text()">
        Nosso objetivo é facilitar o acesso à informação sobre doação de sangue 
        e incentivar mais pessoas a participarem desse gesto tão importante. 
        Acreditamos no poder da tecnologia como ferramenta de transformação 
        social e estamos muito motivados em fazer a diferença com este projeto.
      </p>
    </div>
  </div>
</template>