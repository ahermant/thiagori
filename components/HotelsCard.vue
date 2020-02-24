<template>
  <b-card class="thiagoriCard mb-3 text-justify">
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
  props: {
    title: String,
    hotelsList: Array
  }
};
</script>

<style lang="scss">
.hidden {
  display: none;
}
</style>
