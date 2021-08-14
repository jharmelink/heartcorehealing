<template>
  <div class="container">
    <Tabs />
    <FloatingButton />
    <Banner />
    <section class="container-row">
      <article>
        <p>
          Je lichaam maakt duidelijk dat het niet goed met je gaat. Het slaat
          alarm door symptomen zoals lichamelijke pijn, bewegingsbeperkingen,
          hormonale klachten of emotionele knopen aan de oppervlakte te brengen.
          Het is je intuïtie die je op de schouder tikt als waarschuwing dat er
          iets misloopt. Negeer je die boodschap, dan krijg je steeds meer last.
        </p>
        <p>
          Als osteopaat en energetisch behandelaar ontcijfer ik die boodschap en
          breng de onzichtbare oorzaak achter je klachten helder in kaart. Zo
          kan ik je ongemakken blijvend verlichten of wegnemen. Losmaken wat in
          je lijf vastzit. Zodat jij weer vrij in je lichaam en je leven mag
          bewegen.
        </p>
      </article>
    </section>
    <section class="container-row background-primary">
      <article>
        <p>
          Ik gids je door de signalen van je lichaam om je lijf, je geest, je
          hart en je spirituele kern weer met elkaar te verbinden. Dat samenspel
          maakt je krachtig en vitaal tot in het diepste van je kern. Je bent
          één onlosmakelijk geheel. Je leven stroomt vlot en vanzelf. Het is
          mijn hartewens om jou daarin te begeleiden.<br />
          Mijn integrale <a>behandelmethode</a> houdt rekening met dat
          <a>subtiele samenspel</a>. Tijdens de behandeling luister ik naar het
          verhaal van jouw lichaam. Het verklapt me de code om door te dringen
          tot de kern van je vraag of klacht en het evenwicht op alle vlakken te
          herstellen.
        </p>
      </article>
    </section>
    <section class="container-row background-testimonial">
      <div>&nbsp;</div>
    </section>
    <section class="container-row">
      <article>
        <h1>
          "Testimonial: illupta ecerumq uiamus cone nihil et enectotatur abore
          nobit quos que ipsa aut audicius."
        </h1>
        <p>
          Werd jij aangenaam verrast of geprikkeld na een Heart.Core.Healing
          door Nienke? Was je pijn weg? Kon je weer vrij bewegen? Had je een
          verhelderend inzicht? Voelde je je emotioneel weer in balans? Ging je
          aan de slag met een gezondere lifestyle? Sloeg je een nieuwe richting
          in op je levenspad?<br />
          Deel het met ons en andere geïnteresseerden in een
          <a>Google review!</a>
        </p>
        <p>
          <br />
          <NuxtLink :to="'/appointment'" class="button">
            Afspraak maken
          </NuxtLink>
        </p>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  .background-testimonial {
    @include background-image-page('home-testimonial', top center);

    div {
      height: 34em;
    }
  }
}
</style>
