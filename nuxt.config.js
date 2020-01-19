
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
              global_view: 'Global view',
              greeting: 'Hello world!',
              guest_messages: 'Guest messages',
              hotel: 'Place of the event',
              hotel_list: 'Hotels nearby',
              lang: 'Lang',
              our_story: 'Our story',
              our_story_content: 'The moment I met Juliette aboard the Love Boat, I knew she was someone special. She became my first love, but we lived 90 miles apart. After the cruise, we maintained our love affair through handwritten letters. Eventually, geography took its toll. We went on to separate lives, yet I thought about her quite often. Nine years later, we reunited in Grand Central Station. I hired a violinist to play our love song as we held each other for the first time in one decade. After wishing to be with her all those years apart, we finally decided to marry.',
              rsvp: 'RSVP',
              wedding_place: 'Wedding place'
            },
            fr: {
              gifts: 'Cadeaux',
              global_view: 'Vue globale',
              guest_messages: 'Messages aux invités',
              greeting: 'Salut tout le monde',
              hotel: 'Lieu de l\'événement',
              hotel_list: 'Liste des hotels à proximité',
              lang: 'Langue',
              our_story: 'Notre histoire',
              rsvp: 'RSVP',
              wedding_place: 'Lieu de la cérémonie'
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
  bootstrapVue: {
    // Add the desired icon components to the `components` array
    icons: true
  },
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
