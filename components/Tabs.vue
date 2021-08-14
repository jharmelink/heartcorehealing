<template>
  <section class="container-row">
    <div class="tabs">
      <NuxtLink to="/" class="tab-logo">
        <logo />
      </NuxtLink>
      <NuxtLink to="/heart" class="tab-main">
        Heart<span>Wie ben ik</span>
      </NuxtLink>
      <NuxtLink to="/core" class="tab-main">
        Core<span>Wat doe ik</span>
      </NuxtLink>
      <NuxtLink to="/healing" class="tab-main">
        Healing<span>Mijn methode</span>
      </NuxtLink>
      <NuxtLink to="/coaching" class="tab-main">
        &nbsp;<span>Coaching</span>
      </NuxtLink>
      <NuxtLink to="/offer" class="tab-main">
        &nbsp;<span>Aanbod</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="tab-main">
        &nbsp;<span>Contact</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@include appear($primary-color);

.container-row {
  margin-top: 2.7em;

  .tabs {
    display: flex;
    flex-direction: row;

    .tab-logo {
      flex-grow: 2;
    }

    .tab-main {
      color: $primary-color;
      margin: auto 0;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      font-size: 2.2em;
      font-weight: 600;
      padding: 0.5em;
      text-align: left;
      text-decoration: none;

      span {
        color: #000;
        font-size: 0.8em;
        font-weight: 340;
        text-decoration: underline;
        text-decoration-thickness: 0.14em;
      }
    }

    .tab-main.nuxt-link-exact-active span {
      text-decoration-color: $primary-color + ff;
    }

    .tab-main:not(.nuxt-link-exact-active) {
      span {
        animation-name: disappear;
        text-decoration-color: unquote($primary-color + '00');
      }

      &:hover span {
        animation-name: appear;
        text-decoration-color: $primary-color + ff;
      }
    }
  }
}
</style>
