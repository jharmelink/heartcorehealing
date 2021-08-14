<template>
  <section class="container-row">
    <div class="floating-button">
      <NuxtLink :to="'/appointment'" class="button">Afspraak maken</NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class FloatingButton extends Vue {}
</script>

<style lang="scss" scoped>
@include appear($secondary-color);

.container-row {
  z-index: 0;

  .floating-button {
    .button {
      margin: -0.5em 0 -1.1em 0;
      float: right;
      font-size: 2.4em;
      font-weight: 500;
      padding: 0.5em 0.6em;
    }
  }
}
</style>
