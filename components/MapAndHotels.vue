<template>
  <div id="mapContainer" class="w-100 text-center pt-3 mx-auto">
    <a id="mapsAnchor"></a>
    <b-row class="m-4">
      <b-col fluid>
        <h1 class="text-center text-justify">{{$t('map_hotels')}}</h1>
      </b-col>
    </b-row>
    <b-row class="m-4">
      <b-col lg="4">
        <b-card class="thiagoriCard mb-3 text-justify">
          <div>
            <h5>
              <b-link href="#mapAnchor" @click="switchPlace(weddingPlace)">
                <b-icon icon="geo"></b-icon>
                {{weddingPlace.name}}
              </b-link>
            </h5>
            <p>{{weddingPlace.address}}</p>
          </div>
        </b-card>
        <hotelsCard
          :hotelsList="hotelsList.vitoria"
          @placeChange="switchPlace"
          :title="$t('hotel_list_vitoria')"
          height="340px"
        />
        <hotelsCard
          :hotelsList="hotelsList.vilhavelha"
          @placeChange="switchPlace"
          :title="$t('hotel_list_vilha_velha')"
          height="220px"
        />
        <hotelsCard
          :hotelsList="hotelsList.novaAlmeida"
          @placeChange="switchPlace"
          :title="$t('hotel_list_nova_almeida')"
          :height="novaAlmeidaHeight"
        />
        <a id="brunchAnchor"></a>
        <hotelsCard
          :hotelsList="hotelsList.beachHouse"
          @placeChange="switchPlace"
          :title="$t('hotel_list_beach_house')"
          height="230px"
          v-if="$i18n.locale==='fr'"
        />
      </b-col>
      <b-col id="map" lg="8">
        <b-card body-class="text-center" class="thiagoriCard mb-5">
          <b-card-title title-tag="h2" :title="placeName" class="mt-1 mb-3" />
          <a id="mapAnchor"></a>
          <iframe
            :src="mapURL"
            width="100%"
            height="1185px"
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
import HotelsCard from "~/components/HotelsCard.vue";

export default {
  components: {
    HotelsCard
  },
  data: function() {
    return {
      placeName: this.$t("wedding_place"),
      mapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.733603092703!2d-40.19286894907956!3d-20.18681445149419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81da9518a53c3%3A0xff0535f8c34a60e0!2sAv.%20Atapo%C3%A3%2C%201%20-%20Manguinhos%2C%20Serra%20-%20ES%2C%2029173-000%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1579458564783!5m2!1sfr!2sca4",
      address: "Av. Atapoã, 1 - Manguinhos, Serra - ES, 29173-000",
      weddingPlace: {
        name: this.$t("wedding_place"),
        mapURL:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.733603092703!2d-40.19286894907956!3d-20.18681445149419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81da9518a53c3%3A0xff0535f8c34a60e0!2sAv.%20Atapo%C3%A3%2C%201%20-%20Manguinhos%2C%20Serra%20-%20ES%2C%2029173-000%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1579458564783!5m2!1sfr!2sca",
        address: "Av. Atapoã, 1 - Manguinhos, Serra - ES, 29173-000"
      },
      hotelsList: {
        beachHouse: [
          {
            name: "Pousada Terra Mar",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4373456735866!2d-40.162200449082064!3d-20.03211604660085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7f06ec774ffc7%3A0xe6580e136c47e90b!2sPousada%20Terra%20Mar!5e0!3m2!1sfr!2sca!4v1583102316280!5m2!1sfr!2sca",
            address:
              "Av. Uirapurú, 01, Enseada das Garças - Praia Grande, Fundão - ES, 29187-000",
            distance: "<500m"
          }
        ],
        novaAlmeida: [
          {
            name: "Eco Manguinhos",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.62501206656!2d-40.198089449079404!3d-20.191332951637637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81d2dc60527f1%3A0xe1fa699b8cb15e44!2sECO%20MANGUINHOS!5e0!3m2!1sfr!2sca!4v1579459016469!5m2!1sfr!2sca",
            address:
              "064, R. Prof. Geraldo Costa Alves, 01 - Manguinhos, Serra - ES",
            distance: "1,2km"
          },
          {
            name: "Orchard Inn Manguinhos",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.573074325389!2d-40.19725064907934!3d-20.193493751706246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81dad2ef24311%3A0xdb8ec9bbc772f50!2sOrchard%20Inn%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579464763784!5m2!1sfr!2sca",
            address:
              "R. Elpídio Pímentel, 22 - Manguinhos, Serra - ES, 29173-065",
            distance: "1,1km"
          },
          {
            name: "Pousada Manguas",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.561891919485!2d-40.194402049079365!3d-20.19395895172096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81c534f201ceb%3A0x45b07166de344a1b!2sPousada%20Mangas!5e0!3m2!1sfr!2sca!4v1579464879306!5m2!1sfr!2sca",
            address: "Av. Mte. Álvaro, 186 - Manguinhos, Serra - ES, 29173-039",
            distance: "1km"
          },
          {
            name: "Hostel Kurahay",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.5960320983245!2d-40.19310554907939!3d-20.192538651675886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81dab6733292b%3A0x4b6be2aba7c40f3b!2sHostel%20Kuarahy!5e0!3m2!1sfr!2sca!4v1579465007278!5m2!1sfr!2sca",
            address: "Av. Atapoã, 607 - Manguinhos, Serra - ES, 29173-000",
            distance: "1km"
          },
          {
            name: "Aldeia Manguinhos",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14977.785651760476!2d-40.1972828!3d-20.1987624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c991f0d8d7468d7!2sAldeia%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579470319184!5m2!1sfr!2sca",
            address: "Av. Bicanga, 278 - Manguinhos, Serra - ES, 29164-817",
            distance: "1,8km"
          },

          {
            name: "Solar de Manguinhos",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.5868693050315!2d-40.19383404907931!3d-20.19291985168805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81daca67837b1%3A0x1c532dd7adcd1878!2sSolar%20de%20Manguinhos!5e0!3m2!1sfr!2sca!4v1579465106495!5m2!1sfr!2sca",
            address: "Av, R. Ocidente, 172 - Manguinhos, Serra - ES, 29173-047",
            distance: "1km"
          },
          {
            name: "Spaço 'D Hospedagem",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14978.430571328767!2d-40.1970712!3d-20.1920556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x695789c04b73924a!2sSpa%C3%A7o%20D%20Hospedagem!5e0!3m2!1sfr!2sca!4v1579470570708!5m2!1sfr!2sca",
            address:
              "R. Manoel José Lírio de Sales, 17 - Manguinhos, Serra - ES, 29173-050",
            distance: "1,6km"
          },
          {
            name: "Hotel Jardins",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.1881562400963!2d-40.26334154907891!3d-20.209500852214912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81ed3db286d57%3A0xda6fd12cde857456!2sES-010%2C%201307%20-%20Jardim%20Limoeiro%2C%20Serra%20-%20ES%2C%2029194-043%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sca!4v1583102730913!5m2!1sfr!2sca",
            address: "ES-010, 1307 - Jardim Limoeiro, Serra - ES, 29194-043",
            distance: "8,8km"
          }
        ],
        vilhavelha: [
          {
            name: "Quality Suites Vila Velha",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14964.638068009228!2d-40.280975!3d-20.3350278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbe05380e1849479!2sQuality%20Suites%20Vila%20Velha!5e0!3m2!1sfr!2sca!4v1584830193745!5m2!1sfr!2sca",
            address:
              "Av. Antônio Gil Veloso, 856 - Praia da Costa, Vila Velha - ES, 29101-010",
            distance: "27km"
          }
        ],
        vitoria: [
          {
            name: "Bristol Easy Hotel",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2876555361167!2d-40.305876985079536!3d-20.28835718640403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817fc8302dc0b%3A0x6937d7b2ee3537b1!2sBristol%20Easy%20Hotel%20-%20Reta%20da%20Penha!5e0!3m2!1sfr!2sca!4v1583102866437!5m2!1sfr!2sca",
            address:
              "Reta da Penha, Av. Nossa Sra. da Penha, 2656 - Santa Luíza, Vitória - ES, 29045-402",
            distance: "21,2km"
          },

          {
            name: "Quality Hotel Aeroporto Vitória",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.683801418747!2d-40.28968868507997!3d-20.27194438641316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8183d935bac9b%3A0x2153f66cebd089ff!2sQuality%20Hotel%20Aeroporto%20Vit%C3%B3ria!5e0!3m2!1sfr!2sca!4v1583104464162!5m2!1sfr!2sca",
            address:
              "Av. Adalberto Simão Nader, 605 - Mata da Praia, Vitória - ES, 29066-310",
            distance: "18,7km"
          },
          {
            name: "Hotel ibis budget Vitoria",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1443504920626!2d-40.3041047490775!3d-20.294291354915487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817e670b67b53%3A0x582c73bc27d23400!2sHotel%20ibis%20budget%20Vitoria!5e0!3m2!1sfr!2sca!4v1583104511167!5m2!1sfr!2sca",
            address:
              "Av. Nossa Sra. da Penha, 1993 - Santa Lucia, Vitória - ES, 29056-075",
            distance: "20,9km"
          },
          {
            name: "Hotel Senac Ilha do Boi",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.757993899818!2d-40.28501904907729!3d-20.310281855426027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817bb8cbb8f7f%3A0xe42395a325a9f7f2!2sHotel%20Senac%20Ilha%20do%20Boi!5e0!3m2!1sfr!2sca!4v1583104556742!5m2!1sfr!2sca",
            address:
              "R. Bráulio Macedo, 417 - Ilha do Boi, Vitória - ES, 29052-640",
            distance: "25km"
          },

          {
            name: "Sheraton Vitoria Hotel",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.868957033727!2d-40.29548454907742!3d-20.305690555279455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c1e855d219%3A0x9f1f0d3d72748793!2sSheraton%20Vitoria%20Hotel!5e0!3m2!1sfr!2sca!4v1583104626314!5m2!1sfr!2sca",
            address:
              "Saturnino De Brito Avenue 217 - Praia do Canto, Vitória - ES, 29055-095",
            distance: "21,8km"
          },
          {
            name: "Golden Tulip Porto Vitória",
            mapURL:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.6277888926393!2d-40.29821954907709!3d-20.315668055598223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817ce8b8b2851%3A0x308310efb5301d2e!2sGolden%20Tulip%20Porto%20Vit%C3%B3ria!5e0!3m2!1sfr!2sca!4v1583104702125!5m2!1sfr!2sca",
            address:
              "Av. Nossa Sra. dos Navegantes, 635 - Enseada do Suá, Vitória - ES, 29050-335",
            distance: "23,1km"
          }
        ]
      }
    };
  },
  computed: {
    novaAlmeidaHeight() {
      return this.$i18n.locale === "fr" ? "345px" : "595px";
    }
  },
  methods: {
    switchPlace(place) {
      console.log({ switchPlace: place, this: this });
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
#mapAnchor,
#brunchAnchor {
  position: relative;
  top: -12em;
  display: block;
}
#mapContainer {
  background-color: $backgroundColor;
  height: "600px";
}
</style>
