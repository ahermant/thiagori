<template>
  <b-card id="Contact" class="border-0 mt-0 mb-5">
    <div>
      <b-form
        name="contactmessages"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field2"
      >
        <input type="hidden" name="form-name" value="messages" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field2" />
          </label>
        </p>
        <b-row>
          <b-col lg="6">
            <b-form-group :label="$t('your_name')" label-for="name">
              <b-form-input
                id="name"
                name="name"
                v-model="form.name"
                required
                :placeholder="$t('enter_name')"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group :label="$t('email_address')" label-for="email">
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
        <b-row>
          <b-col>
            <b-form-group :label="$t('message')" label-for="textarea" class="mt-5">
              <b-form-textarea
                id="message"
                v-model="form.message"
                :placeholder="$t('message_allowed')"
                name="message"
                rows="5"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="text-center mt-5 mb-0">
              <b-button type="submit" name="submit" variant="primary">{{$t('send')}}</b-button>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        message: "",
        name: ""
      }
    };
  },
  computed: {},
  methods: {
    onSubmit(evt) {
      //evt.preventDefault();
      alert(this.$t("thank_you_for_submission"));
    }
  }
};
</script>

<style lang="scss">
.hidden {
  display: none;
}
</style>
