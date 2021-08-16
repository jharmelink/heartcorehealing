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

  @media screen and (max-width: 3840px) {
    font-size: 1.5em;
  }

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
  padding: 0.5em 0;
}

h2 {
  font-size: 2.4em;
  padding: 0.17em 0;
}

h3 {
  color: $primary-color;
  font-family: 'Roustel', serif;
  font-size: 3.2em;
  line-height: 1.1em;
}

h4 {
  font-size: 2.9em;
  font-variant: all-small-caps;
  font-weight: 300;
}

a {
  cursor: pointer;
  text-decoration: underline;
}

:visited {
  color: #000;
}

button {
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 0.6em;
  letter-spacing: 0.02em;
  text-decoration: underline;
}

.button {
  @include appear($secondary-color);

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
      color: #000;
    }

    .button {
      display: inline-block;
      margin-top: 0.9em;
    }
  }

  ul {
    list-style: none;

    &:not(.horizontal) {
      margin-left: 1em;
      padding-left: 0;

      li {
        padding-left: 1em;
        text-indent: -1.17em;

        &::before {
          content: '·';
          padding-right: 0.4em;
          font-size: 1.9em;
          vertical-align: middle;
        }
      }
    }

    &.horizontal {
      display: flex;
      padding: 0 10em;
      flex-direction: row;
      align-items: stretch;

      li,
      a {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
      }
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

  svg {
    fill: #fff;
  }
}

.hr {
  height: 1px;
  background-color: #000;
  display: inline-block;
}

.modal {
  background-color: $secondary-color + cc;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .modal-content {
    background-color: #fff;
    margin: 2em auto;
    width: 73em;

    .modal-banner {
      .close-icon {
        width: 1.6em;
        margin: 2em;
        fill: $secondary-color;
        float: right;
        cursor: pointer;
      }
    }

    article {
      display: inline-block;
      padding: 1em 7.3em 7.3em 7.3em;
      text-align: left;

      h2 {
        font-size: 1.9em;
        padding-top: 0.86em;
      }

      p {
        font-size: 1.85em;
      }
    }
  }
}
</style>
