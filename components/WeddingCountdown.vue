<template>
  <b-card body-class="text-center" id="story" class="w-75 border-0 pt-0 mt-0">
    <b-card-title title-tag="h2" class="pt-0 my-5" :title="weddingDate" />
    <b-card-title title-tag="h2" class="p-4 mt-0 mb-5 backgroundColor">
      <countdown :time="milliseconds">
        <template slot-scope="props">
          <p class="mb-4">{{ $t("time_remaining") }}</p>
          <b-row>
            <b-col lg="3">
              <b-card class="thiagoriCard" body-class="text-center">
                <b-card-title
                  title-tag="h2"
                  class="text-capitalize"
                  :title="$t('days')"
                />
                <b-card-text class="countdown-text" v-html="props.days" />
              </b-card>
            </b-col>
            <b-col lg="3">
              <b-card class="thiagoriCard" body-class="text-center">
                <b-card-title
                  title-tag="h2"
                  class="text-capitalize"
                  :title="$t('hours')"
                />
                <b-card-text class="countdown-text" v-html="props.hours" />
              </b-card>
            </b-col>
            <b-col lg="3">
              <b-card class="thiagoriCard" body-class="text-center">
                <b-card-title
                  title-tag="h2"
                  class="text-capitalize"
                  :title="$t('minutes')"
                />
                <b-card-text class="countdown-text" v-html="props.minutes" />
              </b-card>
            </b-col>
            <b-col lg="3">
              <b-card class="thiagoriCard" body-class="text-center">
                <b-card-title
                  title-tag="h2"
                  class="text-capitalize"
                  :title="$t('seconds')"
                />
                <b-card-text class="countdown-text" v-html="props.seconds" />
              </b-card>
            </b-col>
          </b-row>
        </template>
      </countdown>
    </b-card-title>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      date: "19/11/2022 16:00:00",
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
    },
  },
};
</script>

<style scoped lang="scss">
.countdown-text {
  font-size: 1.2em;
}
</style>
