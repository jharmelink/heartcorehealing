<template>
  <footer class="container-row background-primary">
    <div class="footer">
      <LogoWithText />
      <div>
        <a
          href="maps:address=Halewijnstationstraat%2049,%209031%20Drongen,%20Belgium&ll=51.0494231937789,3.6167194436556898&q=Halewijnstationstraat%2049"
        >
          Halewijnstationstraat 49, 9031 Drongen </a
        ><br />
        <a href="mailto:nienke@heartcorehealing.eu">
          nienke@heartcorehealing.eu
        </a>
        <span class="hr" />
        <span class="misc">
          <NuxtLink to="/terms">Algemene voorwaarden</NuxtLink> &nbsp;
          <NuxtLink to="/privacy">Privacy policy</NuxtLink> &nbsp;
          <NuxtLink to="/cookie">Cookieverklaring</NuxtLink>
          <p>
            Copyright © Heart.Core.Healing. &nbsp; Webdesign by
            <span class="bold">Jan Willem Harmelink</span> &
            <span class="bold">MOOB</span>
          </p>
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@include appear($secondary-color);

footer {
  div {
    display: flex;
    flex-direction: row;

    .logo-with-text {
      margin-top: -4.4em;
    }

    div {
      padding: 3.6em 0 1.2em 0;
      display: flex;
      flex-direction: column;
      font-size: 1.7em;
      font-weight: 340;
      line-height: 1.5em;
      text-align: right;

      a {
        animation-name: disappear;
        text-decoration-color: unquote($secondary-color + '00');

        &:hover {
          animation-name: appear;
          text-decoration-color: $secondary-color + ff;
        }
      }

      .hr {
        background-color: #fff;
        margin: 0.4em 0 0.9em auto;
        width: 21.73em;
      }

      .misc {
        font-size: 0.8em;

        * {
          color: #b18b7f;
          line-height: 0.9em;

          .bold {
            font-weight: 520;
          }
        }
      }
    }
  }
}
</style>
