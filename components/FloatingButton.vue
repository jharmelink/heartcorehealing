<template>
  <section class="container-row">
    <div class="floating-button">
      <Button :text="'Maak een afspraak'" :link="'/appointment'" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'FloatingButton',
};
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
