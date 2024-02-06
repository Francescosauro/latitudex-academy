<template>
  <div class="prose" id="contenuti">
    <p class="!mb-2 uppercase text-sm">Contenuto dei corsi</p>
    <h3 class="!mt-0">
      Corso di primo soccorso
    </h3>
    <p class="!leading-normal !mb-3">
      Un programma completo di lezioni teoriche e dimostrazioni pratiche simulate su manichini ad alta fedeltà per insegnarti ad affrontare tutte le più comuni situazioni di emergenza. Potrai rivedere le lezioni quante volte vorrai, e acquisire totale fiducia nelle manovre da eseguire. 
    </p>
    <p class="!mt-0">XXX sezioni - XXX lezioni - durata totale: XXXh XXXm</p>
  </div>
  <BaseAccordion :elements="appConfig.coursesContent.primoSoccorso"></BaseAccordion>
  <div class="prose mt-8">
    <p class="!mb-2 uppercase text-sm">Contenuto dei corsi</p>
    <h3 class="!mt-0">Corso di BLS-D certificato</h3>
    <div class="flex">
      <BaseIcon icon="certificate" class="icon-lg mt-0 mr-1 mb-6 float-left text-primary flex-none"></BaseIcon>
      <p class="!mb-3 !mt-0 !leading-normal">
        Concluso il corso potrai accedere alla prova finale in presenza (skill test) e ritirare il certificato all’incontro che si tiene i 7 città.
        <em class="text-sm">Certificato rilasciato da un centro di formazione accreditato al 118 regionale</em>
      </p>
    </div>
    <p class="!mt-0 !leading-snug">XXX sezioni - XXX lezioni - durata totale: XXXh XXXm</p>
  </div>
  <BaseAccordion :elements="appConfig.coursesContent.blsd"></BaseAccordion>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
