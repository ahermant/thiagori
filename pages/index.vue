<template>
  <div class="pageBody w-100">
    <div>
      <weddingCountdown class="mx-auto" />
      <generalInformation class="mx-auto" />
      <ourStory class="mx-auto" />
      <mapAndHotels class="mx-auto" />
      <rSVP class="mx-auto" />
      <visitAround class="mx-auto" />
      <gifts class="mx-auto" />
    </div>
  </div>
</template>

<script>
import WeddingCountdown from "~/components/WeddingCountdown.vue";
import GeneralInformation from "~/components/GeneralInformation.vue";
import Gifts from "~/components/Gifts.vue";
import Logo from "~/components/Logo.vue";
import OurStory from "~/components/OurStory.vue";
import MapAndHotels from "~/components/MapAndHotels.vue";
import RSVP from "~/components/RSVP.vue";
import VisitAround from "~/components/VisitAround.vue";

export default {
  components: {
    WeddingCountdown,
    GeneralInformation,
    Gifts,
    Logo,
    OurStory,
    MapAndHotels,
    RSVP,
    VisitAround
  }
};
</script>

<style lang="scss">
.pageBody {
  font-family: "Bad Script", cursive;
  line-height: 1.5;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "CreamCandy", "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
