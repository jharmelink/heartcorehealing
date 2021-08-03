<template>
  <div class="tabs">
    <NuxtLink to="/" class="tab--logo">
      <logo />
    </NuxtLink>
    <NuxtLink to="/heart" class="tab--main">
      Heart<span>Wie ben ik</span>
    </NuxtLink>
    <NuxtLink to="/core" class="tab--main">
      Core<span>Wat doe ik</span>
    </NuxtLink>
    <NuxtLink to="/healing" class="tab--main">
      Healing<span>Mijn methode</span>
    </NuxtLink>
    <NuxtLink to="/prices" class="tab--main">
      &nbsp;<span>Tarieven</span>
    </NuxtLink>
    <NuxtLink to="/contact" class="tab--main">
      &nbsp;<span>Contact</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
};
</script>

<style lang="scss" scoped>
@keyframes lift {
  from {
    padding-bottom: 0.3em;
  }
  to {
    padding-bottom: 0;
  }
}

@keyframes lower {
  from {
    padding-bottom: 0;
  }
  to {
    padding-bottom: 0.3em;
  }
}

.tabs {
  margin-top: 3em;
  display: flex;
  flex-direction: row;

  .tab--logo {
    margin-right: 7em;
  }

  .tab--main {
    animation-name: lower;
    animation-duration: 200ms;
    color: $primary-color;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    font-size: 2.3em;
    font-weight: 600;
    text-align: left;
    text-decoration: none;
    padding: 0.3em;

    span {
      color: #000;
      font-size: 0.8em;
      font-weight: 340;
    }

    &:hover {
      padding-bottom: 0;
      animation-name: lift;
      animation-duration: 200ms;
    }
  }
}
</style>
