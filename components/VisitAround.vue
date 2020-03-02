<template>
  <div class="w-100 text-center py-3 mx-auto" :class="backgroundColorStyle">
    <b-row class="m-4">
      <b-col fluid>
        <h1 class="text-center text-justify">{{activities.what_to_do}}</h1>
      </b-col>
    </b-row>
    <b-row class="m-4">
      <b-card-group deck class="w-100">
        <b-col :sm="sm" :lg="lg" :xl="xl" v-for="(place, i) in activities.places" v-bind:key="i">
          <b-card
            :title="place.title"
            :img-src="place.image"
            img-alt="Image"
            img-top
            :style="styledHeight"
            class="mb-5 mx-auto thiagoriCard visitCard"
            body-class="text-center"
          >
            <b-card-text class="text-justify" v-html="place.description" />
            <b-card-footer footer-bg-variant="white">
              <b-button
                target="blank"
                :href="place.link"
                variant="primary"
              >{{$t('tripadvisorButtonText')}}</b-button>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    backgroundColorStyle: function() {
      return this.backgroundColor ? "backgroundColored" : "white";
    },
    styledHeight() {
      return "height:" + this.height;
    }
  },
  props: {
    activities: {
      type: Object,
      default: { what_to_do: "" }
    },
    backgroundColor: Boolean,
    height: {
      type: String,
      default: "600px"
    },
    sm: String,
    lg: String,
    xl: String
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
.visitCard {
  max-width: 30rem;
  height: 550px;
  .card-footer {
    bottom: 10px;
    position: absolute;
    width: 90%;
  }
}
.visitContainer {
  height: 600px;
}
</style>
