<template>
  <q-card class="mycard">
    <q-card-section class="bg-primary text-white">
      <div class="text-h5">OTP Verification</div>
    </q-card-section>

    <q-card-section class="q-mt-xl text-center">
      <div class="text-h6 text-weight-bold text-primary q-mb-md">REGISTRATION SUCCESS</div>
      <div class="text-h6 text-weight-bold text-primary">Enter OTP</div>
      <div class="text-body2">We have sent a OTP on your number</div>
      <div class="q-my-lg flex flex-center">
        <otp-input
          inputClasses="input-otp"
          :numInputs="4"
          separator="-"
          :shouldAutoFocus="true"
          @on-complete="handleOnComplete"
        />
      </div>
      <div>
        <countdown-timer v-bind:date="time"></countdown-timer>
        <q-btn label="Resend OTP" color="primary" @click="resend" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import OtpInput from 'components/OtpInput'
import CountdownTimer from 'components/CountdownTimer'
import moment from 'moment'

export default {
  name: 'PageOTP',
  components: {
    OtpInput,
    CountdownTimer
  },
  data () {
    return {
      time: moment().add(5, 'm').format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    handleOnComplete (value) {
      const userId = this.$store.getters['auth/userId']
      this.$store.dispatch('auth/otp', { user_id: userId, otp_code: value })
        .then(() => this.$router.push('/home'))
    },
    resend () {
      this.$q.dialog({
        title: 'Resend OTP',
        message: 'Input your phone number?',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(value => {
        this.$store.dispatch('auth/resendOtp', { phone: value })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 500px;
}
.input-otp {
  width: 50px;
  height: 50px;

  &.error {
    border: 1px solid red !important;
  }
}
</style>
