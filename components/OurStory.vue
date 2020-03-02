<template>
  <b-card body-class="text-center" id="story" class="w-75 border-0 pt-0 mt-0">
    <a id="storyAnchor"></a>
    <b-card-title title-tag="h1" :title="$t('our_story')" class="pt-0 mt-0 mb-5" />
    <hr class="my-4" />
    <b-card-text class="text-justify" v-html="$t('our_story_content')" />
  </b-card>
</template>

<script>
export default {
  computed: {}
};
</script>

<style scoped lang="scss">
.card-body {
  padding-top: 0;
}

#storyAnchor {
  position: relative;
  top: -10em;
  display: block;
}
</style>
