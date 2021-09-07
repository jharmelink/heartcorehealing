<template>
  <div class="container">
    <Tabs />
    <FloatingButton />
    <section class="container-row background-marble">
      <article>
        <h3>
          "Wat ben je aan het doen?,<br />vroeg het meisje aan Michelangelo.<br />
          "De engel aan het bevrijden uit de steen", antwoordde hij. "In onze
          'marmeren' ziel zit een meesterstuk verstopt dat om bevrijding
          vraagt."
        </h3>
      </article>
    </section>
    <section class="container-row">
      <article>
        <h2>Mijn werkterrein</h2>
        <p>
          Mijn werkterrein: jouw innerlijke energie in beweging brengen en in de
          juiste richting helpen sturen.
        </p>
        <p>
          Elke pijn, klacht of ongemak is een brok bevroren of samengeklonterde
          energie die schade toebrengt aan je lichaam en je zenuwstelsel. Die
          “brokstukken” energie verhinderen of blokkeren het vrij stromen van je
          innerlijke kracht. Ze bedekken je kern met een laag slib.
        </p>
        <p>
          Beeld je een snel stromende rivier in. Er liggen her en der stenen in
          verspreid. Sommigen zijn klein en beïnvloeden de stroomsnelheid
          nauwelijks. Het water kan er nog steeds langs. Maar soms vormen ze een
          dam die het water gevangen houdt in een onrustige draaikolk. Energie
          werkt in je lichaam op identieke wijze.
        </p>
      </article>
    </section>
    <section class="container-row background-fall">
      <div>&nbsp;</div>
    </section>
    <section class="container-row">
      <article>
        <h2>Laag per laag de brokstukken verwijderen</h2>
        <p>
          Ik verwijder laag per laag alle structuren en patronen die je
          energiestroom beperken of blokkeren. Tot jouw innerlijke kracht weer
          vlot stroomt.
        </p>
        <p>
          Je energie weer in beweging brengen is een proces van de oppervlakte
          naar de diepte. Van symptoom naar oorzaak. Van oorzaak naar oplossing.
          Dit zijn de stappen.
        </p>
      </article>
    </section>
    <section class="container-row">
      <article>
        <p>Lichamelijk</p>
      </article>
    </section>
    <section class="container-row">
      <article>
        <h2>De buitenste laag: symptomen</h2>
        <p>
          Door mijn achtergrond als osteopaat start ik vanuit de
          bewegingsbeperking, de last of de pijn van de cliënt. De buitenste
          laag. Symptomen zijn de merkbare uiterlijke tekenen van geknelde
          energie. Een gezwollen knie, lage rugpijn, een stijf gewricht,
          hinderlijke pijn bij het bewegen van je arm, hoofdpijn,
          vermoeidheid... <a>Lees meer</a>
        </p>
      </article>
    </section>
    <section class="container-row background-mountains">
      <div>&nbsp;</div>
    </section>
    <section class="container-row">
      <article>
        <h2>De tweede laag: op zoek naar de oorzaak</h2>
        <p>
          Vanuit de osteopathie ben ik me verder gaan verdiepen in
          wetenschappelijke opleidingen met een holistische visie op gezondheid.
        </p>
        <p>
          Zo kwam ik op het spoor van de klinische psycho-neuro-immunologie. De
          “wetenschap van de lifestyle”. Harde wetenschappelijke feiten, zachte
          aanpak. Steeds op zoek naar de oorzaak van de oorzaak. Lees meer
        </p>
        <p>
          In mijn praktijk richt ik me meteen op de oorzaak van je ongemakken:
        </p>
        <p>
          Welke zaken beïnvloeden jouw leven waardoor je je klachten in stand
          houdt?
        </p>
        <p>
          Welke kleine verandering zou een groot verschil kunnen maken om je
          klachten te verlichten of op te lossen?
        </p>
      </article>
    </section>
    <section class="container-row background-primary">
      <article>
        <p>
          Het kan goed zijn dat jouw gezondheid onder druk staat door verkeerde
          voeding, een verstoord bioritme, gebrek aan beweging of overmatige
          stress. In dat geval bied ik je helder inzicht in jouw situatie, een
          aangepast advies en een duidelijk plan om je gezondheid in eigen
          handen te nemen en te herstellen.
        </p>
      </article>
    </section>
    <section class="container-row background-plant">
      <div>&nbsp;</div>
    </section>
    <section class="container-row">
      <article class="extra-padding">
        <h3>
          Mijn besluit staat vast. Ik word weer mijn authentieke ik en ga voor
          totaal vitaal en gezond!
        </h3>
        <p>
          <AppointmentButton />
        </p>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Core extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  .background-marble {
    @include background-image-page('core-marble', top center);

    article {
      height: 32em;
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        color: $primary-color;
      }
    }
  }

  .background-fall {
    @include background-image-page('core-fall', top center);

    div {
      height: 33.6em;
    }
  }

  .background-mountains {
    @include background-image-page('core-mountains', top center);

    div {
      height: 33.3em;
    }
  }

  .background-plant {
    @include background-image-page('core-plant', top center);

    div {
      height: 33.5em;
    }
  }

  .extra-padding {
    padding: 6.5em 6em;
  }
}
</style>
