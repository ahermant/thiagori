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
  plugins: [],
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
              busDescription: "Vitória conta com ônibus panorâmico de turismo, que possui a parte superior aberta para os passageiros terem uma visão privilegiada e ampla da cidade. O serviço de city tour ocorre às quartas-feiras, sábados, domingos e feriados e percorre vários atrativos. O veículo tem 49 lugares disponíveis, inclusive para idosos, gestantes e pessoas com mobilidade reduzida.",
              busTitle: "Bustour Vitória e Vila Velha",
              busLink: "https://www.capixabaturismo.com.br/bustour/",
              busButtonText: "Official website",
              greeting: 'Opa pessoal !',
              our_story: 'Nossa historia',
              our_story_content: "<p>Auri e Thiago fizeram contato pela primeira vez em um aplicativo de namoro.</p><p><br></p><p>Vejo você... você está pensando \"De jeito nenhum, um casal tão perfeito e é assim que eles se conheceram?\"! Até supermodelos estão em aplicativos de namoro.</p><p><br></p><p>Começamos rapidamente a conversar e isso levou a intermináveis conversas hilárias no whatsapp (porque, como você sabe, também somos hilários).</p><p><br></p><p>Compartilhando o mesmo amor por bons sarcasmos e as mesmas expectativas de vida, decidimos nos encontrar.</p><p><br></p><p>Quando Auri viu Thiago ela pensou, com uma leve decepção, que ele parecia muito mais velho do que o que ele fingia. Além disso, ele tinha cabelos brancos muito longos que pareciam bastante sedosos, mas não estava combinando com suas fotos. Ela rapidamente ficou aliviada quando percebeu que ele era na verdade o outro cara atrás.</p><p><br></p><p>Mesmo que Thiago gostasse de em dançar um carnaval e cocos e a Auri curtisse queijo e tacar fogo em carros durante as greves francesas, começamos a conversar e encontramos uma forte conexão imediatamente.</p><p><br></p><p>Sabíamos que era o começo de algo para durar.</p><p><br></p><p>Em poucas semanas, eles já tinham conhecido suas incríveis famílias em chamadas de vídeo e um mês depois, Thiago já estava pedindo para Auri morar em conjunto, especialmente porque ele ama lasanha da Auri.</p><p><br></p><p>Quase 6 meses depois, estávamos nos mudando juntos. Estávamos ainda mais convencidos sobre nossas pequenisses e fizemos cada vez mais projetos. Claro, não me engana, às vezes discutimos. Como quando Thiago diz a Auri que Felipe é mais engraçado que ela e que ela é apenas o número 2, ou como quando Auri coloca o dedo no umbigo de Thiago.</p><p><br></p><p>Desde o primeiro dia sabíamos que não era só um romance, mas a melhor amizade de todos os tempos. Só não é assim quando um de nós assiste uma série da Netflix sem o outro ou se Thiago come todo o queijo na geladeira. Mas ninguém é perfeito, certo?</p><p><br></p><p>Quase dois anos depois, Thiago propos a Auri em casamento no Brasil cercado por nossas duas famílias (estávamos sentindo falta do pai de Auri).</p><p><br></p><p>Estamos tão ansiosos para começar este novo capítulo juntos, e mal podemos esperar para comemorar com todas as nossas pessoas favoritas</p><p><br></p>"
            },
            fr: {
              busDescription: "Le bus panoramique de Vitória a un toit ouvert pour que les passagers aient une vue privilégiée et large de la ville. Le service de visite de la ville a lieu les mercredis, samedis, dimanches et jours fériés et passe par plusieurs attractions. Le véhicule dispose de 49 places disponibles, y compris pour les personnes âgées, les femmes enceintes et les personnes à mobilité réduite.<br/>Prix: 70 reais par personne + 5 pour aller au couvent Da Penha en van.<br/>Langues: Brésilien, Anglais",
              busTitle: "Tour de Vitória et Vila Velha en bus",
              busLink: "https://www.tripadvisor.fr/Attraction_Review-g303320-d9748071-Reviews-Capixaba_Turismo_Receptivo-Vitoria_State_of_Espirito_Santo.html?m=19905",
              busButtonText: "Lien tripadvisor",
              email_address: 'Adresse email',
              enter_email: 'Veuillez saisir votre email',
              enter_name: 'Veuillez saisir votre prénom et votre nom',
              gifts: 'Liste de mariage',
              gifts_text: 'Expliquer ici pourquoi vous préférez du cash',
              global_view: 'Vue globale',
              guest_messages: 'Laissez un message',
              greeting: 'Salut tout le monde',
              hotel: 'Lieu de l\'événement',
              hotel_list: 'Liste des hotels à proximité',
              lang: 'Langue',
              message: 'Votre message (optionnel)',
              message_allowed: 'Si vous souhaitez préciser certains éléments ou nous envoyer un message, vous pouvez l\'écrire ici.',
              no: 'Non',
              number_of_attendees: 'Veuillez sélectionner le nombre d\'invités',
              our_story: 'Notre histoire',
              our_story_content: "<p>Auri et Thiago ont d'abord pris contact via une application de rencontres.</p><p>Je vous vois… vous pensez «non mais genre, un couple aussi parfait et c'est comme ça qu'ils se sont rencontrés?!» Et je vais vous répondre:oui. Même les top modèles vont sur les</p><p>applications de rencontres.</p><p><br></p><p>Nous avons rapidement commencé à parler et cela nous a amené à des conversations hilarantes sans fin sur WhatsApp (car comme vous le savez, nous sommes également hilarants).</p><p><br></p><p>Partageant le même amour du bon sarcasme et les mêmes intérêts, nous avons décidé de nous rencontrer.</p><p><br></p><p>Quand Auri a vu Thiago, elle a pensé, avec une légère déception, qu'il avait l'air beaucoup plus âgé que ce qu'il prétendait. De plus, il avait de très longs cheveux blancs qui semblaient plutôt soyeux mais ne correspondaient pas à ses photos. Elle fut rapidement soulagée lorsqu'elle réalisa qu'il était en fait l'autre gars derrière.</p><p><br></p><p>Même si Thiago était passionné de danse et des noix de coco et Auri plutôt passionnée de fromage et d’incendies de voitures pendant les habituelles grèves françaises, nous avons commencé à parler et à sentir directement une super connexion. Nous savions que c'était le début de quelque chose qui allait durer.</p><p><br></p><p>En quelques semaines, nous avions déjà rencontré les familles extraordinaires de chacun lors d'appels vidéo et un mois plus tard, Thiago demandait déjà à Auri d'emménager ensemble, surtout parce qu'il adorait ses lasagnes.</p><p><br></p><p>Près de 6 mois plus tard, nous emménagions. Nous étions encore plus convaincus de notre humour commun et commencions à faire des projets. Bien sûr, ne vous méprenez pas, nous disputons parfois. Comme quand Thiago dit à Auri que Felipe est plus drôle qu’elle et qu’elle n’est que la numéro 2, ou comme quand Auri met son doigt dans le nombril de Thiago. Depuis le premier jour, nous savions que ce n'était pas seulement une romance, mais la meilleure amitié de tous les temps. Sauf peut-être quand l'un de nous deux regarde une série Netflix sans l'autre ou si Thiago mange tout le fromage dans le réfrigérateur. Mais hey, personne n'est parfait, hein?</p><p><br></p><p>Presque 2 ans plus tard, Thiago a demandé Auri en mariage au Brésil entouré de nos 2 familles (il nous manquait juste le papa d'Auri qui n’aime pas voyager (-_-’)).</p><p><br></p><p>Nous sommes impatients de commencer ce nouveau chapitre ensemble, et nous avons hâte de célébrer cela avec toutes nos personnes préférées!</p>",
              please_fill_attendees: 'Nombre d\'invités',
              reset: 'Réinitialiser',
              rsvp: 'RSVP',
              send: 'Envoyer',
              thank_you_for_submission: 'Merci pour votre réponse !',
              wedding_place: 'Lieu de la cérémonie',
              want_to_attend: 'Est-ce que vous serez présent(s) ?',
              what_to_do: 'Activités à Vitoria',
              yes: 'Oui',
              your_name: 'Prénom et nom'
            },
            en: {
              busDescription: "Vitória has a panoramic tour bus, which has an open top for passengers to have a privileged and wide view of the city. The city tour service takes place on Wednesdays, Saturdays, Sundays and holidays and runs through several attractions. The vehicle has 49 seats available, including for the elderly, pregnant women and people with reduced mobility.<br/>Price: 70 reais per person + 5 to go up to the covent by van.<br/>Languages: English, Brasilian",
              busLink: "https://www.tripadvisor.co.uk/Attraction_Review-g303320-d9748071-Reviews-Capixaba_Turismo_Receptivo-Vitoria_State_of_Espirito_Santo.html?m=19905",
              busButtonText: "Tripadvisor link",
              busTitle: "Vitória and Vila Velha bus tour",
              email_address: 'Email address',
              enter_email: 'Please fill your email address',
              enter_name: 'Please fill your firstname and your name',
              gifts: 'Wedding list',
              gifts_text: 'Explain here why you prefer cash',
              global_view: 'Global view',
              greeting: 'Hello world!',
              guest_messages: 'Leave a message',
              hotel: 'Place of the event',
              hotel_list: 'Hotels nearby',
              lang: 'Lang',
              message: 'Your message (optional)',
              message_allowed: 'If you want to give us more details or send us a message, you can write it here.',
              no: 'No',
              number_of_attendees: 'Please select the number of attendees',
              our_story: 'Our story',
              our_story_content: "<p>Auri and Thiago first made contact on a dating app.</p><p>I see you… you are thinking “No bloody way, such a perfect couple and this is how they met?!” and I will answer you :Yes. Even supermodels are on dating apps.</p><p>We started quickly to talk and it led to endless hilarious conversations on whatsapp (because as you know it, we are also hilarious).</p><p>Sharing the same love for good sarcasms and the same life expectations, we decided to meet.</p><p>When Auri saw Thiago she thought, with a slight disappointment, that he looked much older than what he pretended. Also, he had very long white hair which looked rather silky but was not matching his pictures. She quickly was relieved when she realised that he was actually the other guy behind.</p><p>Even though Thiago was into dance and coconuts and Auri into cheese and burning cars during French strikes, we started to talk and found a strong connexion right away.</p><p>We knew it was the beginning of something meant to last.</p><p>Within a couple of weeks, we had already met each other’s amazing families on video calls and a month after, Thiago was already asking Auri to move in together, especially because he loves Auri’s lasagnas.</p><p>Almost 6 months later, we were moving together. We were even more convinced about our common weirdness and we made more and more projects. Of course, don’t get me wrong, we sometimes argue. Like when Thiago tells Auri that Felipe is funnier than her and that she is only number 2, or like when Auri puts her finger in Thiago’s belly button.</p><p>Since day one we knew this was not only a romance, but the best friendship ever. Except maybe when one of us watches a Netflix serie without the other or if Thiago eats all the cheese in the fridge. But hey, no one is perfect, right?</p><p>Almost 2 years later, Thiago proposed in Brazil surrounded by our 2 families (we were missing Auri’s dad).</p><p>We are so looking forward to starting this new chapter together, and can’t wait to celebrate with all of our favourite people</p><p><br></p>",
              please_fill_attendees: 'Number of guests attending',
              reset: 'Reset',
              rsvp: 'RSVP',
              send: 'Send',
              thank_you_for_submission: 'Thank you for your answer !',
              want_to_attend: 'Will you particpate ?',
              wedding_place: 'Wedding place',
              what_to_do: 'What to do in Vitoria ?',
              yes: 'Yes',
              your_name: 'Firstname and name'
            }
          }
        }
      }
    ],
    ['@nuxtjs/style-resources']
  ],
  bootstrapVue: {
    // Add the desired icon components to the `components` array
    icons: true
  },
  styleResources: {
    scss: [
      'assets/scss/main.scss'
    ]
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
