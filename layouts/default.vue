<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'Work Sans';
  src: local('Work Sans'),
    url(~assets/fonts/WorkSans-VariableFont_wght.ttf)
      format('truetype-variations');
}

html {
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--main {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #485f2f;
  color: #4a6c1a;
  text-decoration: none;
  padding: 10px 30px;
}

.button--main:hover {
  color: #fff;
  background-color: #485f2f;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
