<template>
  <div id="giftsContainer" class="w-100 text-center py-3 mx-auto">
    <b-card id="Gifts" class="w-75 mx-auto border-0 mt-0 mb-5 giftsCard">
      <a id="giftsAnchor"></a>
      <b-card-title title-tag="h1" :title="$t('gifts')" class="text-center mt-3 mb-5" />
      <hr class="my-4" />
      <b-row class="mx-auto">
        <b-col lg="8" class="mb-3 text-justify" v-html="$t('gifts_text')" />
        <b-col lg="4" class="mb-3 my-auto text-center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <template v-if="this.$i18n.locale==='en'">
              <input type="hidden" name="hosted_button_id" value="QCHN4YVVUSHTC" />
              <input
                type="image"
                src="https://thiagori.netlify.com/btn_donateCC_EN.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt
                border="0"
                src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </template>
            <template v-else-if="this.$i18n.locale==='br'">
              <input type="hidden" name="hosted_button_id" value="NYYKJQ96EVU7J" />
              <input
                type="image"
                src="https://thiagori.netlify.com/btn_donateCC_BR.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Faça doações com o botão do PayPal"
              />
              <img
                alt
                border="0"
                src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </template>
            <template v-else-if="this.$i18n.locale==='fr'">
              <input type="hidden" name="hosted_button_id" value="QXTKGGVL6QYLQ" />
              <input
                type="image"
                src="https://thiagori.netlify.com/btn_donateCC_FR.png"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Faites un cadeau à Auri et Thiago avec PayPal"
              />
              <img
                alt
                border="0"
                src="https://www.paypal.com/fr_FR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </template>
          </form>
        </b-col>
      </b-row>
      <div class="h-300" />
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.giftsCard {
  background-color: inherit;
}
.h-300 {
  height: 300px;
}
#giftsAnchor {
  position: relative;
  top: -10em;
  display: block;
}
</style>
