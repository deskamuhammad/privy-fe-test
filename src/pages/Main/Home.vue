<template>
  <q-page>
      <div v-if="profile">
        <!-- <q-parallax :height="250" :speed="0.5">
          <template v-slot:media>
            <img v-bind:src="profile.cover_picture.url ? profile.cover_picture.url : 'https://www.coverphotosforfb.com/files/covers/1826-sunset.jpg'">
          </template>

           <div class="profile text-center">
              <q-avatar size="150px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
          </div>
        </q-parallax> -->

        <q-parallax>
          <template v-slot:media>
            <img v-bind:src="profile.cover_picture.url ? profile.cover_picture.url : 'https://www.solidbackgrounds.com/images/1584x396/1584x396-queen-blue-solid-color-background.jpg'">
          </template>

          <template v-slot:content="scope">
            <div q-pa-lg
              class="absolute column items-center"
              :style="{

                top: (scope.percentScrolled * 60) + '%',
                left: 0,
                right: 0
              }"
            >
              <q-avatar size="150px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
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
      </div>
    </q-page>
</template>

<script>
import PersonalInfo from '../../components/PersonalInfo'
import CareerInfo from '../../components/CareerInfo'
import EducationInfo from '../../components/EducationInfo'

export default {
  name: 'PageHome',
  components: {
    PersonalInfo,
    CareerInfo,
    EducationInfo
  },
  data () {
    return {
      tab: 'info'
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
    // if (this.$store.state.profile.user) {
    this.$store.dispatch('profile/getProfile')
    // }
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
