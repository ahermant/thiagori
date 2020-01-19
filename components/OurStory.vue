<template>
  <b-card body-class="text-center" id="story" class="w-75 border-0 mt-0 mb-5">
    <a id="storyAnchor"></a>
    <b-card-title title-tag="h2" :title="$t('our_story')" class="mt-3 mb-5" />
    <hr class="my-4" />
    <b-card-text class="text-justify">{{$t('our_story_content')}}</b-card-text>
  </b-card>
</template>

<script>
export default {
  computed: {}
};
</script>

<style lang="scss">
#storyAnchor {
  position: relative;
  top: -20em;
  display: block;
}
</style>
