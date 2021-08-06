export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Heart.Core.Healing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: '&nbsp;' },
      { name: 'msapplication-TileColor', content: '#666666' },
      { name: 'msapplication-TileImage', content: 'mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: 'mstile-70x70.png' },
      {
        name: 'msapplication-square150x150logo',
        content: 'mstile-150x150.png',
      },
      { name: 'msapplication-wide310x150logo', content: 'mstile-310x150.png' },
      {
        name: 'msapplication-square310x310logo',
        content: 'mstile-310x310.png',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Heart.Core.Healing',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: 'apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: 'apple-touch-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: 'apple-touch-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: 'apple-touch-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: 'apple-touch-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: 'apple-touch-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: 'apple-touch-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: 'apple-touch-icon-152x152.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-196x196.png',
        sizes: '196x196',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-96x96.png',
        sizes: '96x96',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-128.png',
        sizes: '128x128',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['@/assets/styles/*.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
