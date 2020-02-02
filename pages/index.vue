<template>
  <div class="w-100">
    <div>
      <ourStory class="mx-auto px-5" />
      <mapAndHotels class="mx-auto px-5" />
      <rSVP class="mx-auto px-5" />
      <visitAround class="mx-auto px-5" />
      <div class="mx-auto text-center">
        <logo />
        <h1 class="title">Thiagori</h1>
        <h2 class="subtitle">Simple wedding website</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import OurStory from "~/components/OurStory.vue";
import MapAndHotels from "~/components/MapAndHotels.vue";
import RSVP from "~/components/RSVP.vue";
import VisitAround from "~/components/VisitAround.vue";

export default {
  components: {
    Logo,
    OurStory,
    MapAndHotels,
    RSVP,
    VisitAround
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.thiagoriCard {
  border: 0;
  box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -webkit-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
}
</style>
