<template>
  <div class="container">
    <Tabs />
    <FloatingButton />
    <section class="container-row background-testimonial">
      <div>&nbsp;</div>
    </section>
    <section class="container-row">
      <article>
        <h2>Voelen versus denken</h2>
        <p>
          Ik ben Nienke van Heart.Core.Healing. Ik ben veel meer een voeler dan
          een denker.
        </p>
        <p>
          In onze maatschappij geven we echter voorrang aan “hoofd”zaken.
          Nadenken, piekeren, broeden op problemen, oplossingen verzinnen.
          Minder voeling met het lichaam. Minder in staat om signalen te
          herkennen. Minder aanwezig vandaag, steeds weer afgeleid door gisteren
          of morgen.
        </p>
        <p>
          Mijn intuïtie is mijn gps in het leven. Mijn hart volgt de aangegeven
          weg. Mijn lichaam brengt me daar waar ik moet zijn. Hier en nu.
        </p>
      </article>
    </section>
    <section class="container-row background-secondary">
      <article>
        <h1>
          De stem van het logische verstand klinkt veel luider dan het zachte
          gefluister van de intuïtie.
        </h1>
      </article>
    </section>
    <section class="container-row">
      <article>
        <p>
          Van nature ben ik sterk in het ontcijferen van de signalen van het
          lichaam. Het is mijn missie om jou daarin te gidsen. Om stap voor
          stap, laag per laag door te dringen tot in je kern. Samen ruimen we
          geleidelijk alle obstakels op om hoofd, hart en lichaam opnieuw met
          elkaar te verbinden.
        </p>
        <p>
          <br />
          <Button :text="'Bekijk mijn CV'" :link="'/cv'" />
        </p>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Heart',
};
</script>

<style lang="scss" scoped>
.container {
  .background-testimonial {
    @include responsive-background(
      'heart-nienke',
      (3840, 2560, 1680, 1440, 1280, 1024),
      top center
    );

    div {
      height: 31.8em;
    }
  }
}
</style>
