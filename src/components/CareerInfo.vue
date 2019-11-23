<template>
  <div>
    <q-timeline color="secondary" v-if="profile">
      <q-timeline-entry heading>
        Career Information
      </q-timeline-entry>

      <q-timeline-entry v-if="profile.career.company_name"
        :title="profile.career.company_name"
        :subtitle="profile.career.starting_from + ' - ' + profile.career.ending_in"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: 'CareerInfo',
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
