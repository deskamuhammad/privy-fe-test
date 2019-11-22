<template>
  <q-layout view="hHh lpR fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <q-page class="flex flex-center">
        <!-- This is where pages get injected -->
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
<style lang="scss" scoped>
.q-page-container{
  background: #eeeeee;
}
</style>
