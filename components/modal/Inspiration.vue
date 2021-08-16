<template>
  <section v-if="show" class="modal">
    <section class="modal-content">
      <div class="modal-banner">
        <Close :action="hide" />
      </div>
      <article>
        <h2>Inspirerende bronnen</h2>
        <p>
          Deze boeken hebben mij bezield en geprikkeld:
          <ul>
            <li>De ontembare vrouw als archetype in mythen en verhalen, Clarissa Pinkola Estes.</li>
            <li>De tijger ontwaakt, Peter A. Levine.</li>
            <li>De fontein, vind je plek, Els van Steijn.</li>
            <li>Naar het hart van communicatie, Eric Schneider.</li>
            <li>De kracht van kwetsbaarheid, Brené Brown.</li>
          </ul>
        </p>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class Inspiration extends Vue {
  @Prop()
  show!: boolean;

  @Prop()
  hide!: () => void;
}
</script>

<style lang="scss" scoped>
.modal .modal-content .modal-banner {
  @include background-image-modal('modal-inspiration', top middle);

  height: 29em;

  .close-icon {
    fill: #fff;
  }
}
</style>
