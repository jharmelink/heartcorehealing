<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @media screen and (max-width: 2560px) {
    font-size: 1.1em;
  }

  @media screen and (max-width: 1680px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.7em;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.6em;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.5em;
  }
}

*,
*::before,
*::after {
  animation-duration: 200ms;
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: 'Roustel', serif;
  font-size: 5em;
  padding: 0.5em;
}

h2 {
  font-size: 2.4em;
  padding: 0.17em;
}

a {
  text-decoration: underline;
}

:visited {
  color: #000;
}

article {
  padding: 5em 0 4em 0;
  text-align: center;
  line-height: 2.7em;

  h1 {
    color: $secondary-color;
    line-height: 1em;
    padding: 0 0 0.5em 0;
  }

  h2 {
    color: $primary-color;
    font-weight: 640;
  }

  p {
    font-size: 1.9em;
    font-weight: 320;

    &:not(:last-child) {
      padding-bottom: 0.6em;
    }

    a {
      font-weight: 530;
    }
  }
}

.container {
  margin-top: 1.6em;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container-row {
  div,
  article {
    width: 80em;
    margin: 0 auto;
  }
}

.background-primary {
  background-color: $primary-color;

  * {
    color: #fff;
  }
}

.background-secondary {
  background-color: $secondary-color;

  * {
    color: #fff;
  }
}
</style>
