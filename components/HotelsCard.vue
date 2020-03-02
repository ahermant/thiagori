<template>
  <b-card :style="styleHeight" class="thiagoriCard limitedHeight mb-3 text-justify">
    <div>
      <h5>{{title}}</h5>
    </div>
    <div v-for="place in hotelsList" v-bind:key="place.name">
      <hr />
      <b-link href="#mapAnchor" @click="$emit('placeChange', place)">
        <b-icon icon="geo"></b-icon>
        {{place.name}}
      </b-link>
      <p>
        {{place.address}}
        <br />
        {{place.distance}}
      </p>
    </div>
  </b-card>
</template>

<script>
export default {
  computed: {
    styleHeight() {
      return "height:" + this.height;
    }
  },
  props: {
    title: String,
    hotelsList: Array,
    height: String
  }
};
</script>

<style lang="scss">
.limitedHeight {
  overflow: auto;
}
</style>
