<template>
  <div id="__axhl-root">
    <div id="__axhl-init" class="w-full h-full flex flex-col">
      <Topbar v-if="getUser" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    getUser () {
      return this.$store.state.account
    }
  }
}
</script>
