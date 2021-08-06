<template>
  <NuxtLink :to="link" class="button">{{ text }}</NuxtLink>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@include appear($secondary-color);

.button {
  animation-name: disappear;
  background-color: $primary-color;
  color: #fff;
  padding: 0.38em 0.5em;
  text-decoration-color: unquote($secondary-color + '00');
  text-decoration-thickness: 0.1em;

  &:hover {
    animation-name: appear;
    text-decoration-color: $secondary-color + ff;
  }
}
</style>
