<template>
  <b-card id="Gifts" class="w-75 border-0 mt-0 mb-5">
    <a id="GiftsAnchor"></a>
    <b-card-title title-tag="h1" :title="$t('gifts')" class="text-center mt-3 mb-5" />
    <hr class="my-4" />
    <b-row>
      <b-col lg="8">{{$t("gifts_text")}}</b-col>
      <b-col lg="4">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <template v-if="this.$i18n.locale==='en'">
            <input type="hidden" name="hosted_button_id" value="QCHN4YVVUSHTC" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
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
              src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
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
              src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Bouton Faites un don avec PayPal"
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
.h-300 {
  height: 300px;
}
</style>
