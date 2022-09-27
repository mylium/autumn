<template>
  <div id="__axhl-root">
    <div id="__axhl-init" class="w-full h-full flex flex-col-reverse md:flex-row">
      <Sidebar v-if="!getUser" />
      <Nuxt class="md:pl-40 md:pr-24 md:py-12 py-6 px-12" />
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
