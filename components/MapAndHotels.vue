<template>
  <div id="map" class="w-100 text-center py-3 mx-auto">
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1j8G5m3OwD0yMvFygQC2NLDbasECnq2jE&ll=-20.190487557262188%2C-40.19208467892918&z=15&legend=true&theme=light"
      width="60%"
      height="500px"
      class="mx-auto"
      frameborder="0"
      style="border:0"
    ></iframe>
    <b-card body-class="text-center" class="w-75 border-0 mt-2 mb-5"></b-card>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>

<style lang="scss">
#map {
  background-color: lightgray;
  height: "600px";
}
</style>
