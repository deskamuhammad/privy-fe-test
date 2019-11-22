/* eslint-disable no-console */
<template>
  <div class="q-pa-md">
    <q-card class="mycard">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Register Form</div>
      </q-card-section>

      <q-card-section class="q-mt-xl">
        <q-form @submit="onSubmit" class="q-gutter-md">
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
            <q-btn label="Login" type="submit" color="primary" />
          </div>
          <div align="left">
            Need an account? <router-link :to="{ name: 'register' }" title="Login"><span class="text-primary">Sign up</span></router-link>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      data: {
        phone: null,
        password: null,
        country: null,
        latlong: null,
        device_token: 'xxxxxxxxxxxxx', // Not setup firebase yet :)
        device_type: 0
      },
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('auth/login', this.data)
        .then((res) =>
          // this.$q.cookies.set('auth-token', res),
          this.$router.push('/home'))
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 500px;
}
</style>
