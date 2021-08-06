<template>
  <section class="container-row">
    <article class="banner">
      <h1>Ik ontcijfer de alarmsignalen<br />van je lichaam</h1>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.container-row {
  @include responsive-background(
    'home-quote',
    (3840, 2560, 1680, 1440, 1280, 1024),
    top left
  );

  .banner {
    display: flex;
    align-items: center;
    height: 34em;
    justify-content: center;

    h1 {
      color: #fff;
    }
  }
}
</style>
