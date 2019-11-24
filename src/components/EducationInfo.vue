<template>
  <div>
    <q-timeline color="secondary" v-if="profile">
      <q-timeline-entry heading>
        Education Information
      </q-timeline-entry>

      <q-timeline-entry v-if="profile.education.school_name"
        :title="profile.education.school_name"
        :subtitle="profile.education.graduation_time"
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
  name: 'EducationInfo',
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
