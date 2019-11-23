<template>
  <q-layout view="hHh lpR fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="add"
              direction="up"
              color="accent"
            >
              <q-fab-action @click="postInfo" color="primary" icon="person_add" />
              <q-fab-action @click="postInfo" color="primary" icon="work_outline" />
              <q-fab-action @click="postInfo" color="primary" icon="menu_book" />
            </q-fab>
          </q-page-sticky>

    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'HomeLayout',
  components: {

  },
  data () {
    return {
      openDialog: false
    }
  },
  methods: {
    postInfo () {
      this.openDialog = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
