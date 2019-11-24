<template>
  <q-page>
    <div v-if="profile">
      <q-parallax>
        <template v-slot:media>
          <img v-bind:src="profile.cover_picture.url ? profile.cover_picture.url : 'https://www.solidbackgrounds.com/images/1584x396/1584x396-queen-blue-solid-color-background.jpg'">
        </template>

        <template v-slot:content="scope">
          <div class="q-mt-lg q-mr-lg absolute-top-right">
            <q-btn color="grey" round glossy unelevated icon="camera_enhance" @click="dialogCover = true"/>
            <q-dialog v-model="dialogCover">
              <q-card class="bg-white">
                <q-bar>
                  <q-space />
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>
                <q-card-section>
                  <q-uploader
                    label="Upload cover image"
                    accept=".jpg, image/*"
                    :factory="factoryFnCover"
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
          <div q-pa-lg
            class="absolute column items-center"
            :style="{
              top: (scope.percentScrolled * 60) + '%',
              left: 0,
              right: 0
            }"
          >
            <q-avatar size="150px">
              <img v-bind:src="profile.user_picture.picture.url ? profile.user_picture.picture.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfx2lz0ccO8_grKnVibu_ISa6vIZ4cXk02Ld7eoZ3fSMDbGtVV'">
              <q-btn class="absolute-top-right" color="grey" round glossy unelevated icon="camera_enhance" @click="dialogPropic = true"/>
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
            </q-avatar>
            <div class="q-mt-md text-h3 text-primary text-center">{{ profile.name }}</div>
            <div class="flex flex-center">
              <q-card class="q-pa-lg detail-card">
                <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  indicator-color="primary"
                  align="justify"
                >
                  <q-tab name="info" label="Personal Info" />
                  <q-tab name="career" label="Career" />
                  <q-tab name="education" label="Education" />
                  <q-tab name="photos" label="Photos" />
                </q-tabs>
              </q-card>
            </div>
          </div>
        </template>
      </q-parallax>
      <div class="detail flex flex-center">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="info">
            <personal-info></personal-info>
          </q-tab-panel>

          <q-tab-panel name="career">
            <career-info></career-info>
          </q-tab-panel>

          <q-tab-panel name="education">
            <education-info></education-info>
          </q-tab-panel>
          <q-tab-panel name="photos">

          </q-tab-panel>
        </q-tab-panels>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          icon="add"
          direction="up"
          color="accent"
        >
          <q-fab-action @click="postInfo" color="primary" icon="person_add" />
          <q-fab-action @click="postCareer" color="primary" icon="work_outline" />
          <q-fab-action @click="postEducation" color="primary" icon="menu_book" />
        </q-fab>
      </q-page-sticky>
      <post-info-dialog :openDialog="openDialog" :profile="profile" v-on:childInfoDialog="onChildDialogVal"></post-info-dialog>
      <post-career-dialog :openDialogCareer="openDialogCareer" :profile="profile" v-on:childCareerDialog="onChildCareerVal"></post-career-dialog>
      <post-education-dialog :openDialogEducation="openDialogEducation" :profile="profile" v-on:childEducationDialog="onChildEducationVal"></post-education-dialog>
    </div>
  </q-page>
</template>

<script>
import PersonalInfo from '../../components/PersonalInfo'
import CareerInfo from '../../components/CareerInfo'
import EducationInfo from '../../components/EducationInfo'
import PostInfoDialog from '../../components/PostInfoDialog'
import PostCareerDialog from '../../components/PostCareerDialog'
import PostEducationDialog from '../../components/PostEducationDialog'
import * as uploadService from '../../service/UploadService'

export default {
  name: 'PageHome',
  components: {
    PersonalInfo,
    CareerInfo,
    EducationInfo,
    PostInfoDialog,
    PostCareerDialog,
    PostEducationDialog
  },
  data () {
    return {
      tab: 'info',
      openDialog: false,
      openDialogCareer: false,
      openDialogEducation: false,
      dialogCover: false,
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
  created () {
    this.loadProfile()
  },
  methods: {
    loadProfile () {
      this.$store.dispatch('profile/getProfile')
    },
    postInfo () {
      this.openDialog = !this.openDialog
    },
    postCareer () {
      this.openDialogCareer = !this.openDialogCareer
    },
    postEducation () {
      this.openDialogEducation = !this.openDialogEducation
    },
    onChildDialogVal (val) {
      this.openDialog = val
    },
    onChildCareerVal (val) {
      this.openDialogCareer = val
    },
    onChildEducationVal (val) {
      this.openDialogEducation = val
    },
    async factoryFnCover (files) {
      try {
        let formData = new FormData()
        formData.append('image', files[0])
        const response = await uploadService.uploadCoverService(formData)
        this.loadProfile()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async factoryFnProfile (files) {
      try {
        let formData = new FormData()
        for (var i = 0; i < files.length; i++) {
          let file = files[i]
          formData.append('image', file)
        }
        const response = await uploadService.uploadProfileService(formData)
        this.loadProfile()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-card{
  width: 800px;
  &__avatar{
    margin-top:-100px;
  }
}
.detail{
  margin-top: 20px;
  .q-tab-panels{
     width: 800px;
  }

}
</style>
