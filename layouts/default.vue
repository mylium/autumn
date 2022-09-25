<template>
  <div id="__axhl-root">
    <div v-if="!loading" id="__axhl-init" class="w-full h-full flex flex-row">
      <Sidebar v-if="!getUser" />
      <Nuxt />
    </div>
    <div v-else id="__axhl-loading" class="w-full h-full flex justify-center items-center flex-row">
      <div class="__axhl-loading-container">
        <Logo class="__axhl-loader" w="100" h="100" sizing="false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    getUser () {
      return this.$store.state.account
    }
  },
  mounted () {
    setTimeout(() => { this.loading = false }, 5000)
  }
}
</script>
