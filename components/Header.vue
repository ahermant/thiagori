<template>
  <header class="header">
    <b-navbar toggleable="lg" sticky type="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav fill>
          <b-nav-item class="nav--link" href="#infoAnchor">{{ $t('general_information') }}</b-nav-item>
          <b-nav-item class="nav--link" href="#storyAnchor">{{ $t('our_story') }}</b-nav-item>
          <b-nav-item class="nav--link" href="#mapAnchor">{{ $t('map_hotels') }}</b-nav-item>
          <b-nav-item class="nav--link" href="#RSVPAnchor">{{ $t('rsvp') }}</b-nav-item>
          <b-nav-item
            class="nav--link"
            v-if="$i18n.locale!=='br'"
            href="#visitAnchor"
          >{{ $t('what_to_do') }}</b-nav-item>
          <b-nav-item class="nav--link" href="#giftsAnchor">{{ $t('gifts') }}</b-nav-item>
          <b-nav-item class="nav--link" v-b-modal.contactModal href="#">{{ $t('guest_messages') }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="langs" fill>
        <b-nav-item
          class="nav--link"
          :href="switchLocalePath(lg.code)"
          v-for="lg in availableLocales"
          :key="lg.code"
        >
          <country-flag :country="lg.code==='en'?'gb':lg.code" size="normal" />
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-modal id="contactModal" hide-footer hide-header class="mx-auto">
      <div class="modal-header">
        <h1 class="col-12 modal-title text-center">
          {{$t('guest_messages')}}
          <button
            type="button"
            class="close"
            @click="$bvModal.hide('contactModal')"
            aria-label="Close"
          >
            <span aria-hidden="true">X</span>
          </button>
        </h1>
      </div>
      <contact-form />
    </b-modal>
  </header>
</template>

<script>
import CountryFlag from "vue-country-flag";
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    ContactForm,
    CountryFlag
  },
  computed: {
    availableLocales() {
      console.log(this.$i18n.locales.filter(i => i.code !== this.$i18n.locale));
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss">
button {
  outline: none;
}

.modal-title {
  font-family: "CreamCandy", sans-serif;
  font-size: 4rem;
  color: darkgoldenrod;
  margin: auto;
}

.modal-body {
  font-weight: bold;
  font-family: "Bad Script", cursive;
}

nav {
  width: 100%;
  padding-top: 1rem;
}

.dropdown-menu {
  left: inherit;
  right: 0;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  z-index: 1000;
}
.langs {
  flex-direction: row;
  margin-left: auto;
}

.nav--link {
  margin-left: 20px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-family: "Bad Script", cursive;
  line-height: 1.5em;
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
