require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'short-link',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js', '~/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    fix: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: process.env.API_DEV,
  // },
  axios: {
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? process.env.API_DEV
        : process.env.API_CLIENT,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL:
        process.env.NODE_ENV !== 'production'
          ? process.env.API_DEV
          : process.env.API_CLIENT,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV !== 'production'
          ? process.env.API_DEV
          : process.env.API_SERVER,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
