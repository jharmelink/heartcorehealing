<template>
  <section class="container-row">
    <div class="banner">
      <LogoWithText />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.container-row {
  background-image: url('assets/images/lotus-full.jpg');

  @media only screen and (max-width: 2560px) {
    background-image: url('assets/images/lotus-2560.jpg');
  }

  div {
    padding: 8em 0;
  }
}
</style>
