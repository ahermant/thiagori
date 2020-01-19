<template>
  <div id="mapContainer" class="w-100 text-center pt-3 mx-auto">
    <b-row class="m-4">
      <b-col fluid>
        <b-card :title="$t('hotel')" title-tag="h2" class="mapCard text-center text-justify" />
      </b-col>
    </b-row>
    <b-row class="m-4">
      <b-col lg="4">
        <b-card class="mapCard mb-3 text-justify">
          <div>
            <h5>
              <b-link href="#mapAnchor" @click="switchPlace(globalView)">
                <b-icon icon="geo"></b-icon>
                {{globalView.name}}
              </b-link>
            </h5>
          </div>
        </b-card>
        <b-card class="mapCard mb-3 text-justify">
          <div>
            <h5>
              <b-link href="#mapAnchor" @click="switchPlace(weddingPlace)">
                <b-icon icon="geo"></b-icon>
                {{weddingPlace.name}}
              </b-link>
            </h5>
          </div>
        </b-card>
        <b-card class="mapCard mb-3 text-justify">
          <div>
            <h5>{{$t('hotel_list')}}</h5>
          </div>
          <div v-for="place in hotelsList" v-bind:key="place.name">
            <hr />
            <b-link href="#mapAnchor" @click="switchPlace(place)">
              <b-icon icon="geo"></b-icon>
              {{place.name}}
            </b-link>
          </div>
        </b-card>
      </b-col>
      <b-col id="map" lg="8">
        <a id="mapAnchor"></a>
        <b-card body-class="text-center" class="mapCard mb-5">
          <b-card-title title-tag="h2" :title="placeName" class="mt-1 mb-3" />
          <iframe
            :src="mapURL"
            width="100%"
            height="510"
            frameborder="0"
            allowfullscreen
            class="border-0 mb-4"
          ></iframe>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      placeName: this.$t("global_view"),
      mapURL:
        "https://www.google.com/maps/d/embed?mid=1j8G5m3OwD0yMvFygQC2NLDbasECnq2jE&z=14",
      globalView: {
        name: this.$t("global_view"),
        mapURL:
          "https://www.google.com/maps/d/embed?mid=1j8G5m3OwD0yMvFygQC2NLDbasECnq2jE&z=14"
      },
      weddingPlace: {
        name: this.$t("wedding_place"),
        mapURL:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.733603092703!2d-40.19286894907956!3d-20.18681445149419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81da9518a53c3%3A0xff0535f8c34a60e0!2sAv.%20Atapo%C3%A3%2C%201%20-%20Manguinhos%2C%20Serra%20-%20ES%2C%2029173-000%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1579458564783!5m2!1sfr!2sca"
      },
      hotelsList: [
        {
          name: "Eco Manguinhos",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.62501206656!2d-40.198089449079404!3d-20.191332951637637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81d2dc60527f1%3A0xe1fa699b8cb15e44!2sECO%20MANGUINHOS!5e0!3m2!1sfr!2sca!4v1579459016469!5m2!1sfr!2sca"
        },
        {
          name: "Orchard Inn Manguinhos",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.573074325389!2d-40.19725064907934!3d-20.193493751706246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81dad2ef24311%3A0xdb8ec9bbc772f50!2sOrchard%20Inn%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579464763784!5m2!1sfr!2sca"
        },
        {
          name: "Pousada Manguas",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.561891919485!2d-40.194402049079365!3d-20.19395895172096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81c534f201ceb%3A0x45b07166de344a1b!2sPousada%20Mangas!5e0!3m2!1sfr!2sca!4v1579464879306!5m2!1sfr!2sca"
        },
        {
          name: "Hostel Kurahay",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.5960320983245!2d-40.19310554907939!3d-20.192538651675886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81dab6733292b%3A0x4b6be2aba7c40f3b!2sHostel%20Kuarahy!5e0!3m2!1sfr!2sca!4v1579465007278!5m2!1sfr!2sca"
        },
        {
          name: "Aldeia Manguinhos",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14977.785651760476!2d-40.1972828!3d-20.1987624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c991f0d8d7468d7!2sAldeia%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579470319184!5m2!1sfr!2sca"
        },

        {
          name: "Solar de Manguinhos",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.5868693050315!2d-40.19383404907931!3d-20.19291985168805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81daca67837b1%3A0x1c532dd7adcd1878!2sSolar%20de%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579465106495!5m2!1sfr!2sca"
        },
        {
          name: "Spaço 'D Hospedagem",
          mapURL:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14978.430571328767!2d-40.1970712!3d-20.1920556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x695789c04b73924a!2sSpa%C3%A7o%20D%20Hospedagem!5e0!3m2!1sfr!2sca!4v1579470570708!5m2!1sfr!2sca"
        }
      ]
    };
  },
  computed: {},
  methods: {
    switchPlace(place) {
      this.placeName = place.name;
      this.mapURL = place.mapURL;
    }
  },
  mount() {}
};
</script>

<style lang="scss">
a {
  cursor: pointer;
}
#mapAnchor {
  position: relative;
  top: -12em;
  display: block;
}
#mapContainer {
  background-color: lightgray;
  height: "600px";
}
.mapCard {
  border: 0;
  box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
  -webkit-box-shadow: 2px 2px 6px 0px rgba(119, 119, 119, 0.75);
}
</style>
