<template>
  <section v-if="show" class="modal">
    <section class="modal-content">
      <div class="modal-banner">
        <Close :action="hide" />
      </div>
      <article>
        <h2>Beweging als rode draad</h2>
        <p>
          Beweging is een rode draad in mijn leven. Bewegen en groeien op
          lichamelijk, geestelijk en emotioneel vlak. Dat is altijd zo geweest
          en zal altijd zo zijn.
        </p>

        <p>
          Hoewel ik stilstaan en stilzitten ondertussen heb leren waarderen,
          blijft mijn behoefte aan fysieke activiteit groot. Ik houd mijn
          lichaam in vorm met uitdagende sporten als hockey en crossfit. En ik
          ren op sommige dagen ook de hele tijd achter mijn pittige dochters Noa
          en June aan.
        </p>

        <p>
          Als kind paste ik niet in een schoolsysteem waarbij “Zit stil!” de
          meest gehoorde uitspraak was. Ik zat te dromen of werd afgeleid door
          mijn gevoelige zintuigen. Mijn alerte antennes vingen alle emoties uit
          mijn omgeving op. Mijn ouders kregen tijdens het oudercontact de raad
          om mij een draaistoel te kopen, omdat ik de hele tijd met alles en
          iedereen om me heen bezig was. Wat zich vooraan in de klas afspeelde
          boeide mij matig. Het was te statisch, niet mijn manier van leren. Te
          weinig beweging.
        </p>

        <p>
          Ik ben een beelddenker. Voor mij geldt beslist dat 1 beeld meer zegt
          dan 1000 woorden! Strakke letters en cijfers op een blad papier hebben
          weinig betekenis voor mij. Tekeningen, foto’s, beelden houden mijn
          aandacht vast. Omdat ze tot mijn verbeelding spreken.
        </p>

        <p>
          Na de Havo koos ik voor opleidingen die met lichamelijke beweging en
          beweeglijkheid te maken hadden. HBO Fysiotherapie,
          Gezondheidswetenschappen en Osteopathie. Ik zette al mijn wilskracht
          en doorzettingsvermogen in om me aan de klassieke onderwijsvormen en
          hun normen aan te passen. Zo slaagde ik erin om mijn diploma’s te
          halen. Telkens weer een overwinning. Maar elke keer opnieuw een
          aanslag op mijn energiereserves.
        </p>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Movement extends Vue {
  @Prop()
  show!: boolean;

  @Prop()
  hide!: () => void;
}
</script>

<style lang="scss" scoped>
.modal .modal-content .modal-banner {
  @include background-image-modal('modal-movement', top middle);

  height: 24.5em;

  .close-icon {
    fill: #fff;
  }
}
</style>
