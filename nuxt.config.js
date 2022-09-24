const _ = {
  capitalize: (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
}

export default {
  head: {
    titleTemplate: 'Mylium - %s',
    title: 'App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Your place for nerdy shit and shitposting.' },
      { name: 'og:site_name', content: 'mylium.app' },
      { name: 'og:title', content: 'Mylium - Building new experiences.' },
      { name: 'theme-color', content: '#a994be' },
      { property: 'og:description', content: 'Your place for nerdy shit and shitposting.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'preconnect', crossorigin: '', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }

    ]
  },
  globalName: 'lunar',
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
    loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
  },
  css: [
    '~/assets/global.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: '/'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {}
}
