<template>
  <section v-if="show" class="modal">
    <section class="modal-content">
      <div class="modal-banner">
        <Close :action="hide" />
      </div>
      <article>
        <h2>Energie in beweging</h2>
        <p>
          Energie in beweging brengen. Dat is wat ik in het leven graag doe. Als
          osteopaat herstel ik de beweeglijkheid van mensen. Als orthomoleculair
          therapeut volgens de kPNI zorg ik ervoor dat de energietoevoer in het
          lichaam precies afgesteld wordt. Dat de juiste dosis energie op het
          juiste moment op de juiste plaats terechtkomt.
        </p>
        <p>
          “It’s all about energy”. Alles draait om energie. Ook spirituele
          energie is energie in beweging.
        </p>
        <p>
          Spiritualiteit heeft steeds deel uitgemaakt van mijn leven. Niet dat
          ik er mij altijd bewust van was. Als klein kind vlogen de beelden en
          visioenen me om de oren. Ik vond het spannend en soms doodeng dat ik
          andere dingen zag en voelde dan de kinderen rondom mij. Ik begreep
          helemaal niet wat mij overkwam, wilde het ook niet weten en sloot er
          mij voor af.
        </p>
        <p>
          Maar intuïtie en spiritualiteit gaan hand in hand en laten zich niet
          zomaar wegdrukken! Ik beleefde te veel momenten die “puur toeval”
          waren. Ik ben al heel mijn leven sterk verbonden met mensen die net
          dat klein beetje extra hebben. Een andere kijk op het leven. Dieper.
          Bewuster. Breder. Bijzondere personen die niet in details blijven
          hangen, maar een kijk op het grotere geheel hebben. Die de betekenis
          ervan zien en voelen. Vooral voelen!
        </p>
        <p>
          Als beginnende osteopate duwde ik de energetische manier van werken
          altijd weg. Ik wist niet hoe dat in de praktijk in zijn werk ging. Ik
          wilde alles verstandelijk begrijpen. Spiritualiteit, dat was toch maar
          zweverig gedoe!
        </p>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Energy extends Vue {
  @Prop()
  show!: boolean;

  @Prop()
  hide!: () => void;
}
</script>

<style lang="scss" scoped>
.modal .modal-content .modal-banner {
  @include background-image-modal('modal-energy', top middle);

  height: 29em;

  .close-icon {
    fill: #fff;
  }
}
</style>
