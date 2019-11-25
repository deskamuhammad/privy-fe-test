<template>
  <div v-if="profile">
    <q-btn class="absolute-top-right" color="grey" glossy unelevated icon="camera_enhance" @click="dialogPropic = true" label="Upload Photos"/>
    <q-dialog v-model="dialogPropic">
      <q-card class="bg-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <q-uploader
            label="Upload profile images"
            accept=".jpg, image/*"
            :factory="factoryFnProfile"
            multiple
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="row justify-center q-gutter-sm q-mt-lg">
      <q-intersection
        v-for="(image,index) in profile.user_pictures"
        :key="index"
        transition="scale"
        class="item relative-position"
      >
        <q-card class="q-ma-sm">
          <img :src="image.picture.url">
          <q-card-section class="text-right">
            <q-btn color="primary" v-if="image.id !== profile.user_picture.id" no-caps size="sm" label="set as profile" v-on:click="setProfile(image.id)"/>
            <q-btn color="negative" v-if="image.id === profile.user_picture.id" no-caps size="sm" label="delete as profile" v-on:click="deteleProfile(image.id)"/>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import * as uploadService from '../service/UploadService'
export default {
  name: 'ProfilesImages',
  data () {
    return {
      dialogPropic: false
    }
  },
  computed: {
    profile: {
      get: function () {
        return this.$store.state.profile.user
      }
    }
  },
  methods: {
    async factoryFnProfile (files) {
      try {
        let formData = new FormData()
        for (var i = 0; i < files.length; i++) {
          let file = files[i]
          formData.append('image', file)
        }
        const response = await uploadService.uploadProfileService(formData)
        this.dialogPropic = false
        this.$emit('loadProfileChild', true)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async setProfile (id) {
      try {
        const response = await uploadService.setProfileService({ 'id': id })
        this.$emit('loadProfileChild', true)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async deteleProfile (id) {
      try {
        const response = await uploadService.deleteProfileService({ 'id': id })
        this.$emit('loadProfileChild', true)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item{
    // height: 250px;
    width: 250px;
  img{
      width: 100%;
      height: 100%;
  }

}
</style>
