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
        <div class="text-h6">Update Career</div>
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-input
            v-model="data.position"
            label="Position *"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || '* Required',
            ]"
          >
            <template v-slot:before>
              <q-icon name="work_outline" />
            </template>
          </q-input>
          <q-input
            v-model="data.company_name"
            label="Company Name *"
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
            v-model="data.starting_from"
            label="Start Date *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
            mask="date">
            <template v-slot:before>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="data.starting_from" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            v-model="data.ending_in"
            label="End Date *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
            mask="date">
            <template v-slot:before>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="data.ending_in" @input="() => $refs.qDateProxy.hide()" />
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
  name: 'PostCareerialog',
  props: {
    openDialogCareer: {
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
      data: Object.assign({}, this.profile.career),
      open: this.openDialogCareer
    }
  },
  watch: {
    openDialogCareer (newVal, oldVal) {
      this.open = newVal
    }
  },
  methods: {
    onSubmit () {
      console.log(this.data)
      this.$store.dispatch('profile/updateCareer', this.data)
        .then(() => {
          this.$q.notify({
            message: 'Update career success',
            icon: 'check',
            color: 'green'
          })
          this.$emit('childCareerDialog', false)
        })
    },
    close (event) {
      this.$emit('childCareerDialog', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 400px;
}
</style>
