<template>
  <section class="bg-primary-lighter py-10 mt-10">
    <div class="wrapper">
      <div class="md:flex md:space-x-4">
        <header class="md:w-1/3 prose mb-5">
          <p class="!mb-2 uppercase">perché serve</p>
          <h2 class="mt-0">
            Per chi vuole imparare a gestire le piccole e grandi emergenze, fino a salvare
            una vita
          </h2>
        </header>
        <div class="md:w-2/3">
          <ul class="grid grid-3">
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi vuole saper riconoscere, senza dubbi, i segni e i sintomi di
                  un’emergenza e allertare correttamente il 112/118
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per imparare a fare il massaggio cardiaco e utilizzare il Defibrillatore
                  Automatico Esterno
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi vuole poter aiutare tempestivamente una persona che sta
                  soffocando eseguendo la manovra di Heimlich
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi ha un familiare a rischio infarto o che soffre di patologie
                  cardiovascolari
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi vuol sapere il corretto procedimento per medicare ferite e
                  ustioni ed evitare infezioni gravi
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi vuole riconoscere in tempo un’ischemia cerebrale (ICTUS/TIA) e
                  prevenire il danno permanente
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi assiste genitori anziani con patologie croniche e vuole
                  riconoscere i sintomi di allarme anche quando la persona non è
                  collaborante
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per impare a gestire lo stato di incoscienza con la posizione laterale
                  di sicurezza
                </small>
              </BaseCard>
            </li>
            <li>
              <BaseCard :image="''">
                <small>
                  Per chi vuole mettere in sicurezza la propria casa creando un kit
                  completo di primo soccorso
                </small>
              </BaseCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ul {
  li {
    small {
      display: inline-block;
      line-height: 130%;
      font-size: 12px;
    }
  }
}
</style>
