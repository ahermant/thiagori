<template>
  <div id="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.733603092703!2d-40.19286894907956!3d-20.18681445149419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81da9518a53c3%3A0xff0535f8c34a60e0!2sAv.%20Atapo%C3%A3%2C%201%20-%20Manguinhos%2C%20Serra%20-%20ES%2C%2029173-000%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1579368065953!5m2!1sfr!2sca"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen
    ></iframe>
    <b-card body-class="text-center" class="w-75 border-0 mt-2 mb-5">
      <b-card-title title-tag="h2" :title="$t('our_story')" class="my-5" />
      <hr class="my-4" />
      <b-card-text class="text-justify">{{$t('our_story_content')}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>

<style lang="scss">
#map {
  background-color: lightgray;
}
</style>
