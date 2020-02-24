<template>
  <div class="pageBody w-100">
    <div>
      <weddingCountdown class="mx-auto" />
      <generalInformation class="mx-auto" />
      <ourStory class="mx-auto" />
      <mapAndHotels class="mx-auto" />
      <rSVP class="mx-auto" />
      <template v-if="$i18n.locale!=='br'">
        <visitAround
          :activities="activities_victoria"
          v-if="activities_victoria"
          sm="12"
          xl="4"
          backgroundColor
          class="mx-auto"
        />
        <visitAround
          v-if="activities_vilha_velha"
          :activities="activities_vilha_velha"
          sm="12"
          xl="3"
          class="mx-auto"
        />
        <visitAround
          v-if="activities_nova_almeida"
          :activities="activities_nova_almeida"
          sm="12"
          xl="6"
          backgroundColor
          class="mx-auto"
        />
      </template>
      <gifts class="mx-auto" :class="$i18n.locale==='br'?'backgroundColored':''" />
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
  },
  data: function() {
    return {
      activities_nova_almeida: {},
      activities_victoria: {},
      activities_vilha_velha: {}
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setActivities() {
      if (this.$i18n.locale !== "br") {
        const activities = this.$i18n.messages[this.$i18n.locale].activities;
        console.log({ activities: activities, locale: this.$i18n.locale });
        this.activities_nova_almeida = activities.nova_almeida;
        this.activities_victoria = activities.victoria;
        this.activities_vilha_velha = activities.vilha_velha;
      }
    }
  },
  mounted() {
    console.log({ locale: this.$i18n.locale });
    this.setActivities();
  },
  watch: {
    lang: function(val) {
      console.log({ locale: this.$i18n.locale });
      this.setActivities();
    }
  }
};
</script>

<style lang="scss">
.backgroundColored {
  background-color: $backgroundColor;
}

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
