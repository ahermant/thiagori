<template>
  <div id="infoContainer" class="backgroundColor w-100 text-center pt-0 mt-0 mx-auto">
    <b-card
      body-class="text-center"
      id="info"
      class="backgroundColor w-75 border-0 mt-0 mb-5 mx-auto"
    >
      <a id="infoAnchor"></a>
      <b-card-title title-tag="h1" :title="$t('general_information')" class="mt-3 mb-5" />
      <hr class="my-4" />
      <b-card-title title-tag="h3" class="mt-5 mb-4">
        <b-icon icon="camera" />
        {{$t('general_information_photos_videos')}}
      </b-card-title>
      <b-card-text v-html="$t('general_information_photos_videos_content')" />
      <b-card-title title-tag="h3" class="mt-5 mb-4">
        <b-icon icon="question-fill" />
        {{$t('general_information_questions')}}
      </b-card-title>
      <b-card-text v-html="$t('general_information_questions_content')" />
      <p>
        <a href="tel:+5527998979334" class="phoneNumber">+55 27998979334</a>
      </p>
      <b-card-title title-tag="h3" class="mt-5 mb-4">
        <font-awesome-icon size="sm" :icon="['fas', 'baby-carriage']" />
        {{$t('general_information_babysitter')}}
      </b-card-title>
      <b-card-text v-html="$t('general_information_babysitter_content')" />
      <b-row>
        <b-col>
          <b-link href="http://www.taquebrinca.com.br/" target="_blank">
            <font-awesome-icon class="fontawesome-icon" :icon="['fas', 'globe']" />
          </b-link>
        </b-col>
        <b-col>
          <b-link href="tel:+5527999294387" target="_blank">
            <font-awesome-icon class="fontawesome-icon" :icon="['fas', 'phone-square-alt']" />
          </b-link>
        </b-col>
        <b-col>
          <b-link href="https://instagram.com/taquebrinca?igshid=158l3if3xji14" target="_blank">
            <font-awesome-icon class="fontawesome-icon" :icon="['fab', 'instagram']" />
          </b-link>
        </b-col>
      </b-row>
      <template v-if="$i18n.locale==='br'">
        <b-card-title title-tag="h3" class="mt-5 mb-4">
          <font-awesome-icon size="sm" :icon="['fas', 'umbrella-beach']" />
          {{$t('general_information_dress')}}
        </b-card-title>
        <b-card-text v-html="$t('general_information_dress_content')" />
      </template>
      <hr class="my-5" />
      <template v-if="$i18n.locale==='fr'">
        <b-card-title
          title-tag="h2"
          :title="$t('general_information_not_brazilians')"
          class="my-5"
        />
        <b-card-title title-tag="h3" class="mt-3 mb-4">
          <b-icon icon="sun" />
          {{$t('general_information_weather')}}
        </b-card-title>
        <b-card-text v-html="$t('general_information_weather_content')" />
        <b-img src="~/static/calendar.png" fluid alt="weather" class="mt-2 mb-4" />
        <b-card-title title-tag="h3" class="mt-3 mb-4">
          <b-icon icon="envelope-fill" />
          {{$t('general_information_RSVP')}}
        </b-card-title>
        <b-card-text v-html="$t('general_information_RSVP_content')" />
        <b-card-title title-tag="h3" class="mt-5 mb-4">
          <font-awesome-icon size="sm" :icon="['fas', 'utensils']" />
          {{$t('general_information_brunch')}}
        </b-card-title>
        <b-card-text v-html="$t('general_information_brunch_content')" />
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
.backgroundColor {
  background-color: $backgroundColor;
}

.phoneNumber {
  font-family: -webkit-body;
}

.fontawesome-icon {
  font-size: 2em;
  cursor: pointer;
}

#infoAnchor {
  position: relative;
  top: -20em;
  display: block;
}
</style>
