<template>
  <header class="header">
    <b-navbar toggleable="lg" sticky type="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav fill align="center" class="w-100">
          <b-nav-item class="nav--link" href="/about">{{ $t('our_story') }}</b-nav-item>
          <b-nav-item class="nav--link" href="/blog">{{ $t('hotel') }}</b-nav-item>
          <b-nav-item class="nav--link" href="/contact">{{ $t('rsvp') }}</b-nav-item>
          <b-nav-item class="nav--link" href="/contact">{{ $t('guest_messages') }}</b-nav-item>
          <b-nav-item class="nav--link" href="/contact">{{ $t('gifts') }}</b-nav-item>
          <b-nav-item-dropdown class="text-uppercase" text="Lang">
            <b-dropdown-item
              v-for="lg in availableLocales"
              :key="lg"
              :href="switchLocalePath(lg)"
            >{{ lg }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      console.log(this.$i18n.locales.filter(i => i.code !== this.$i18n.locale));
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.nav--link {
  margin-left: 20px;
  text-transform: uppercase;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
