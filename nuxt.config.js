
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@bazzite/nuxt-netlify',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'fr', 'pt'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              gifts: 'Gifts',
              greeting: 'Hello world!',
              guest_messages: 'Guest messages',
              hotel: 'Hotel',
              lang: 'Lanf',
              our_story: 'Our story',
              rsvp: 'RSVP',
            },
            fr: {
              gifts: 'Cadeaux',
              guest_messages: 'Messages aux invités',
              greeting: 'Salut tout le monde',
              hotel: 'Hôtel',
              lang: 'Langue',
              our_story: 'Notre histoire',
              rsvp: 'RSVP',
            },
            pt: {
              greeting: 'Opa pessoal !',
              our_story: 'Nossa historia'
            }
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  netlify: { mergeSecurityHeaders: true }
}
