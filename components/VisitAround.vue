<template>
  <div id="visitContainer" class="w-100 text-center py-3 mx-auto">
    <a id="visitAnchor"></a>
    <b-row class="m-4">
      <b-col fluid>
        <h1 class="text-center text-justify">{{$t('what_to_do')}}</h1>
      </b-col>
    </b-row>
    <b-row class="m-4">
      <b-col fluid>
        <b-card
          :title="$t('busTitle')"
          img-src="https://www.vitoria.es.gov.br/imagens/banco/2018_07/img_00067521.jpg"
          img-alt="Image"
          img-top
          style="max-width: 30rem;"
          class="mb-2 mx-auto thiagoriCard"
        >
          <b-card-text class="text-justify" v-html="$t('busDescription')" />

          <b-button target="blank" :href="$t('busLink')" variant="primary">{{$t('busButtonText')}}</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      busLink: "https://www.capixabaturismo.com.br/bustour/",
      busButtonText: "Official website (Portuguese)"
    };
  },
  computed: {},
  methods: {},
  mount() {}
};
</script>

<style lang="scss">
#visitContainer {
  background-color: $backgroundColor;
  height: "600px";
}
#visitAnchor {
  position: relative;
  top: -10em;
  display: block;
}
</style>
