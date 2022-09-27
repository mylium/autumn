<template>
  <div v-if="loading" id="__axhl-loading" class="w-full h-full flex justify-center items-center flex-row">
    <div class="__axhl-loading-container" />
    <Logo class="__axhl-loader absolute text-midnight-700" w="100" h="100" sizing="false" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
