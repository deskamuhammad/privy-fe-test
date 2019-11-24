<template>
  <q-dialog
    ref="dialog"
    v-model="open"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card>
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" @click="close">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section v-if="data">
        <div class="text-h6">Update Education</div>
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-input
            v-model="data.school_name"
            label="School Name *"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || '* Required',
            ]"
          >
            <template v-slot:before>
              <q-icon name="home_work" />
            </template>
          </q-input>
          <q-input
            v-model="data.graduation_time"
            label="Graduation Time *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
            mask="date">
            <template v-slot:before>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="data.graduation_time" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div align="right">
            <q-btn label="Save" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'PostEducationDialog',
  props: {
    openDialogEducation: {
      required: true,
      type: Boolean
    },
    profile: {
      required: false,
      type: Object
    }
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      data: Object.assign({}, this.profile.education),
      open: this.openDialogEducation
    }
  },
  watch: {
    openDialogEducation (newVal, oldVal) {
      this.open = newVal
    }
  },
  methods: {
    onSubmit () {
      console.log(this.data)
      this.$store.dispatch('profile/updateEducation', this.data)
        .then(() => {
          this.$q.notify({
            message: 'Update education success',
            icon: 'check',
            color: 'green'
          })
          this.$emit('childEducationDialog', false)
        })
    },
    close (event) {
      this.$emit('childEducationDialog', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 400px;
}
</style>
