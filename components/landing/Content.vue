<template>
  <div class="prose" id="contenuti">
    <p class="!mb-2 uppercase text-sm">Contenuto dei corsi</p>
    <h3 class="!mt-0">
      Corso di primo soccorso
    </h3>
    <p class="!leading-normal !mb-3">
      Un programma completo di lezioni teoriche e dimostrazioni pratiche simulate su manichini ad alta fedeltà per
      insegnarti ad affrontare tutte le più comuni situazioni di emergenza. Potrai rivedere le lezioni quante volte
      vorrai, e acquisire totale fiducia nelle manovre da eseguire.
    </p>
    <p class="!mt-0"> 35 lezioni - durata totale: 4h</p>
  </div>
  <ol>
    <li v-for="(element, index) in appConfig.coursesContent.primoSoccorso"
        class="bg-white border-b border-grey-lighter text-left">
      <span class="flex justify-between items-start w-full text-left space-x-3 p-3">
           <span class="flex-grow text-sm uppercase">
            {{ index+1 }} -
            {{ element.header.title }}
          </span>
          <small class="!font-regular flex-none" v-if="element.header.time">{{ element.header.time }}</small>
      </span>
    </li>
  </ol>
  <div class="prose mt-8">
    <p class="!mb-2 uppercase text-sm">Contenuto dei corsi</p>
    <h3 class="!mt-0">Corso di BLS-D certificato</h3>
    <div class="flex">
      <BaseIcon icon="certificate" class="icon-lg mt-0 mr-1 mb-6 float-left text-primary flex-none"></BaseIcon>
      <p class="!mb-3 !mt-0 !leading-normal">
        Se hai necessità di ottenere il <strong>certificato valido ai fini di legge</strong>, con un <strong>costo aggiuntivo di 30€ IVA inclusa</strong>,
        potrai accedere all'incontro in presenza che si terrà in zona Padova.
        Gli incontri vengono organizzati mensilmente, per iscriverti contattaci a <a :href="'mailto:' + appConfig.info.mail" class="underline" target="_blank">{{appConfig.info.mail}}</a>
       <br>
        <em class="text-sm">Certificato rilasciato da un Centro di Formazione accreditato al 118 regionale</em>
      </p>
    </div>
    <p class="!mt-0 !leading-snug">20 lezioni - durata totale: 1,5h</p>
  </div>
  <ol>
    <li v-for="(element, index) in appConfig.coursesContent.blsd"
        class="bg-white border-b border-grey-lighter text-left">
      <span class="flex justify-between items-start w-full text-left space-x-3 p-3">
           <span class="flex-grow text-sm uppercase">
            {{ index+1 }} -
            {{ element.header.title }}
          </span>
          <small class="!font-regular flex-none" v-if="element.header.time">{{ element.header.time }}</small>
      </span>
    </li>
  </ol>

</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
