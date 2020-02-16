<template>
  <b-card body-class="text-center" id="story" class="w-75 border-0 pt-0 mt-0">
    <b-card-title title-tag="h2" class="pt-0 my-5" :title="weddingDate" />
    <b-card-title title-tag="h2" class="pt-0 mt-0 mb-5">
      <countdown :time="milliseconds">
        <template
          slot-scope="props"
        >{{$t('time_remaining')}}: {{ props.days }} {{$t('days')}}, {{ props.hours }} {{$t('hours')}}, {{ props.minutes }} {{$t('minutes')}}, {{ props.seconds }} {{$t('seconds')}}.</template>
      </countdown>
    </b-card-title>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      date: "28/11/2020 17:00:00"
    };
  },
  computed: {
    weddingDate() {
      return (
        this.$t("wedding_date") +
        " " +
        this.$t("brasilian_time") +
        ": " +
        this.date
      );
    },
    weddingTimestamp() {
      return this.$moment
        .utc(this.date, "DD/MM/YYYY HH:ii:ss")
        .local()
        .valueOf();
    },
    milliseconds() {
      let timestamp = this.weddingTimestamp - Date.now();
      return timestamp;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
