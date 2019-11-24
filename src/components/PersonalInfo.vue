<template>
  <div v-if="profile" class="text-left">
    <div class="text-h5">Personal Info</div>
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Age</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.age }} y.o</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Birthday</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.birthday }}</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Zodiac</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.zodiac }}</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Gender</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.gender }}</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Hometown</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.hometown }}</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Latlong</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.latlong }}</div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="text-caption text-weight-bold">Level</div>
          <div class="text-subtitle1 text-weight-light">{{ profile.level }}</div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {}
  },
  computed: {
    profile: {
      get: function () {
        return this.$store.state.profile.user
      }
    }
  }
}
</script>
