/* eslint-disable no-console */
<template>
  <div class="q-pa-md">
    <q-card class="mycard">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Register Form</div>
      </q-card-section>

      <q-card-section class="q-mt-xl">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            v-model="data.phone"
            label="Phone *"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || '* Required',
              val => val[0] != 0 || 'Please use country code'
            ]"
            hint="Must with country code 62xxxx"
          >
            <template v-slot:before>
              <q-icon name="phone" />
            </template>
          </q-input>
          <q-input
            v-model="data.password"
            label="Password *"
            :type="isPwd ? 'password' : 'text'"
            :rules="[val => (val && val.length > 0) || '* Required']"
          >
            <template v-slot:before>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="data.country"
            label="Country *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
          >
            <template v-slot:before>
              <q-icon name="flag" />
            </template>
          </q-input>
          <q-input
            v-model="data.latlong"
            label="Latlong *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
          >
            <template v-slot:before>
              <q-icon name="place" />
            </template>
          </q-input>
          <div align="right">
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import AuthService from '../../service/AuthService'

export default {
  name: 'PageRegister',
  data () {
    return {
      data: {
        phone: null,
        password: null,
        country: null,
        latlong: null,
        device_token: 'xxxxxxxxxxxxx', // Not setup firebase yet :)
        device_type: 2
      },
      isPwd: true
    }
  },
  methods: {
    async onSubmit () {
      try {
        const response = await AuthService.register(this.data)
        if (response) {
          // if success redirect to otp page
          this.$router.push('/auth/otp')
        }
      } catch (err) {
        this.$q.notify({
          message: err.data.error.errors[0],
          icon: 'warning',
          color: 'red'
        })
      }
    },
    onReset () {
      this.data = {
        phone: null,
        password: null,
        country: null,
        latlong: null,
        device_token: 'xxxxxxxxxxxxx',
        device_type: 2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 500px;
}
</style>
