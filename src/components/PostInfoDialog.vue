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
         <div class="text-h6">Update Personal Info</div>
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-input
            v-model="data.name"
            label="Name *"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || '* Required',
            ]"
          >
            <template v-slot:before>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-select color="purple-12" v-model="data.gender" :options="options" label="Gender">
            <template v-slot:before>
              <q-icon name="accessibility" />
            </template>
          </q-select>
          <q-input
            v-model="data.birthday"
            label="Birthday *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
            mask="date">
            <template v-slot:before>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="data.birthday" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            v-model="data.hometown"
            label="Hometown *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
          >
            <template v-slot:before>
              <q-icon name="place" />
            </template>
          </q-input>
          <q-input
            v-model="data.bio"
            label="Bio *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || '* Required']"
          >
            <template v-slot:before>
              <q-icon name="assignment" />
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
// import moment from 'moment'
export default {
  name: 'PostInfoDialog',
  props: {
    openDialog: {
      required: false,
      type: Boolean
    },
    profile: {
      required: false,
      type: Object
    }
  },
  data () {
    return {
      options: ['Male', 'Female'],
      maximizedToggle: true,
      open: this.openDialog
    }
  },

  computed: {
    data: {
      get: function () {
        return Object.assign({}, this.profile)
      }
    }
  },
  watch: {
    openDialog (newVal, oldVal) {
      this.open = newVal
    }
  },
  methods: {
    onSubmit () {
      this.data.gender = this.profile.gender === 'Male' ? 0 : 1
      this.$store.dispatch('profile/updateProfile', this.data)
        .then(() => {
          this.$q.notify({
            message: 'Update profile success',
            icon: 'check',
            color: 'green'
          })
          this.$emit('childInfoDialog', false)
        })
    },
    close (event) {
      this.$emit('childInfoDialog', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.mycard {
  width: 400px;
}
</style>
