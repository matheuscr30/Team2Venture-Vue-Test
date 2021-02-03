export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ACME',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ACME description' },
      { hid: 'author', name: 'author', content: 'Matheus Cunha Reis' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Keywords: acme, resist, big data, game-changer, empower',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFDB04' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],

  fontawesome: {
    icons: {
      solid: [
        'faLongArrowAltRight',
        'faChevronRight',
        'faChevronLeft',
        'faExclamationTriangle',
      ],
      brands: ['faYoutube', 'faTwitter', 'faLinkedin', 'faFacebookSquare'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
