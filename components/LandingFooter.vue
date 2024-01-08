<template>
  <div class="wrapper text-center max-w-4xl m-auto py-10">
    <h2 class="text-2xl sm:text-5xl leading-normal inline-block">
      Per <b>salvare</b> la vita a chi vuoi bene. Imparare a farlo è alla portata di
      <b>tutti</b>
    </h2>
    <div class="prose text-left max-w-xl m-auto">
      <BaseCta :inputIdNumber="2" />
    </div>
  </div>
  <div class="max-w-3xl m-auto mb-10" id="faq">
    <h3 class="text-xl md:text-3xl mb-8">
      <strong>FAQ</strong> <br />
      <small class="text-sm">Le domande che ci fate più spesso</small>
    </h3>
    <BaseAccordion :elements="appConfig.faq"></BaseAccordion>
    <p class="text-sm mt-3 text-right">
      Vuoi farci una domanda? <a :href="'mailto:' + +appConfig.info.mail" class="underline" target="_blank">Scrivici</a>.
    </p>
  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
footer {
  border-top: solid 1px #ccc;
}
</style>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
