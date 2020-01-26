<template>
  <b-card id="RSVP" class="w-75 border-0 mt-0 mb-5">
    <a id="RSVPAnchor"></a>
    <b-card-title title-tag="h2" :title="$t('rsvp')" class="text-center mt-3 mb-5" />
    <hr class="my-4" />
    <div>
      <b-form
        name="rsvp"
        method="POST"
        data-netlify-recaptcha="true"
        @reset="onReset"
        v-if="show"
        netlify
      >
        <b-row>
          <b-col lg="4">
            <b-form-group id="rsvpRadioGroup" :label="$t('want_to_attend')">
              <b-form-radio-group
                v-model="form.attendance"
                name="attendance"
                :options="form.radioOptions"
                required
              />
            </b-form-group>
          </b-col>
          <b-col lg="4">
            <b-form-group id="input-group-2" :label="$t('your_name')" label-for="name">
              <b-form-input
                id="name"
                name="name"
                v-model="form.name"
                required
                :placeholder="$t('enter_name')"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="4">
            <b-form-group id="input-group-1" :label="$t('email_address')" label-for="email">
              <b-form-input
                id="email"
                name="email"
                v-model="form.email"
                type="email"
                required
                :placeholder="$t('enter_email')"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          id="attendees-group"
          :label="$t('please_fill_attendees')"
          label-for="attendees"
        >
          <b-form-select
            id="attendeesNumber"
            name="attendeesNumber"
            v-model="form.numberSelected"
            :options="options"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group :label="$t('message')" label-for="textarea">
          <b-form-textarea
            id="message"
            v-model="form.message"
            :placeholder="$t('message_allowed')"
            name="message"
            rows="5"
          ></b-form-textarea>
        </b-form-group>
        <div data-netlify-recaptcha="true"></div>
        <div class="text-center">
          <b-button type="submit" name="submit" variant="primary">{{$t('send')}}</b-button>
          <b-button type="reset" name="reset" variant="danger">{{$t('reset')}}</b-button>
        </div>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        attendance: "",
        email: "",
        message: "",
        name: "",
        numberSelected: null,
        radioOptions: [
          { value: true, text: this.$t("yes") },
          { value: false, text: this.$t("no") }
        ]
      },
      show: true
    };
  },
  computed: {
    options: function() {
      let optionsArray = [
        { value: null, text: this.$t("number_of_attendees") }
      ];
      for (let i = 1; i < 11; i++) {
        optionsArray.push({ value: i, text: i });
      }
      return optionsArray;
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(this.$("thank_you_for_submission"));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.attendance = "";
      this.form.email = "";
      this.form.name = "";
      this.form.numberSelected = null;
      this.form.message = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss">
#storyAnchor {
  position: relative;
  top: -20em;
  display: block;
}
</style>
