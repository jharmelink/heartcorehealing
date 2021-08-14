<template>
  <section v-if="show" class="modal">
    <section class="modal-content">
      <Close :action="hide" />
      <article>
        <h4>Curriculum vitae</h4>
        <h1>Nienke Harmelink</h1>
        <span class="hr" />

        <h2>Osteopathie - International Academy of Osteopathy Zeist</h2>
        <p>Bewegingsbeperkingen en pijn verlichten en oplossen.</p>

        <h2>Geïntegreerde technieken volgens methode ‘de Bakker’</h2>
        <p>
          Een osteopathische methode die gericht is op zachte technieken,
          waardoor het gemakkelijk toe te passen is op kinderen en volwassenen.
        </p>

        <h2>Toegepaste Kinesiologie door Joe Shafer</h2>
        <p>
          Kinesiologie betekent letterlijk ‘bewegingsleer’. Het is een
          complementair instrument dat de mens in zijn totaliteit benadert. Via
          spiertesten wordt onevenwicht in de energiehuishouding opgespoord.
          Deze methode ondersteunt het lichaam op weg naar herstel.
        </p>

        <h2>
          Klinische Psycho-Neuro-Immunologie - Orthomoleculair therapeut - kPNI
          Belgium
        </h2>
        <p>
          Het orthomoleculaire onderdeel van de kPNI streeft naar gezondheid
          door de energieverdeling in je lichaam te corrigeren met de juiste
          voeding en leefstijl.
        </p>

        <h2>Intermittent living coach – PNI Europe</h2>
        <p>
          Als intermittent living coach maak ik gebruik van evolutionair bekende
          prikkels om de mens te beschermen tegen de negatieve effecten van het
          moderne leven.
        </p>

        <h2>Mind5 Optimal Performance Coach</h2>
        <p>
          Via Mind5-training help ik mensen op duurzame en gezonde wijze hun
          optimaal prestatieniveau te vinden. Mind5 combineert mentale en
          fysieke zelfbewustzijnstraining en ervaringsgericht leren voor een
          blijvende gedragsverandering. Zo blijf je ook onder stress presteren.
        </p>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class CurriculumVitae extends Vue {
  @Prop()
  show!: boolean;

  @Prop()
  hide!: () => void;
}
</script>

<style lang="scss" scoped>
.modal {
  h1 {
    font-weight: 500;
    margin: 0.1em -0.06em -0.26em -0.06em;
    padding: 0;
    transform: skew(12deg);
  }

  .hr {
    height: 0.15em;
    background-color: $secondary-color;
    margin: 0;
    width: 100%;
  }
}
</style>
