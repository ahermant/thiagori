
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
        locales: ['br', 'fr', 'en'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            br: {
              greeting: 'Opa pessoal !',
              our_story: 'Nossa historia'
            },
            fr: {
              email_address: 'Adresse email',
              enter_email: 'Veuillez saisir votre email',
              enter_name: 'Veuillez saisir votre prénom et votre nom',
              gifts: 'Cadeaux',
              global_view: 'Vue globale',
              guest_messages: 'Messages aux invités',
              greeting: 'Salut tout le monde',
              hotel: 'Lieu de l\'événement',
              hotel_list: 'Liste des hotels à proximité',
              lang: 'Langue',
              message: 'Votre message (optionnel)',
              message_allowed: 'Si vous souhaitez préciser certains éléments ou nous envoyer un message, vous pouvez l\'écrire ici.',
              no: 'Non',
              number_of_attendees: 'Nombre d\'invités',
              our_story: 'Notre histoire',
              please_fill_attendees: 'Combien de personnes serez-vous ?',
              reset: 'Réinitialiser',
              rsvp: 'RSVP',
              send: 'Envoyer',
              wedding_place: 'Lieu de la cérémonie',
              want_to_attend: 'Est-ce que vous serez présent(s) ?',
              what_to_do: 'Que faire à Vitoria ?',
              yes: 'Oui',
              your_name: 'Prénom et nom'
            },
            en: {
              email_address: 'Email address',
              enter_email: 'Please fill your email address',
              enter_name: 'Please fill your firstname and your name',
              gifts: 'Gifts',
              global_view: 'Global view',
              greeting: 'Hello world!',
              guest_messages: 'Guest messages',
              hotel: 'Place of the event',
              hotel_list: 'Hotels nearby',
              lang: 'Lang',
              message: 'Your message (optional)',
              message_allowed: 'If you want to give us more details or send us a message, you can write it here.',
              no: 'No',
              number_of_attendees: 'Number of attendees',
              our_story: 'Our story',
              our_story_content: 'The moment I met Juliette aboard the Love Boat, I knew she was someone special. She became my first love, but we lived 90 miles apart. After the cruise, we maintained our love affair through handwritten letters. Eventually, geography took its toll. We went on to separate lives, yet I thought about her quite often. Nine years later, we reunited in Grand Central Station. I hired a violinist to play our love song as we held each other for the first time in one decade. After wishing to be with her all those years apart, we finally decided to marry.',
              please_fill_attendees: 'How much people will you bring ?',
              reset: 'Reset',
              rsvp: 'RSVP',
              send: 'Send',
              want_to_attend: 'Will you particpate ?',
              wedding_place: 'Wedding place',
              what_to_do: 'What to do in Vitoria ?',
              yes: 'Yes',
              your_name: 'Firstname and name'
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
