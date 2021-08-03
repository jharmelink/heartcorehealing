<template>
  <section class="container-row">
    <div class="floating-button">
      <NuxtLink to="/appointment">Afspraak maken</NuxtLink>
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
  margin: -1.2em 0 -2.5em 0;
  z-index: 0;

  .floating-button {
    a {
      animation-name: disappear;
      background-color: $primary-color;
      color: #fff;
      padding: 0.5em 0.6em;
      float: right;
      font-size: 2.4em;
      font-weight: 500;
      text-decoration-color: unquote($secondary-color + '00');

      &:hover {
        animation-name: appear;
        text-decoration-color: $secondary-color + ff;
      }
    }
  }
}
</style>
