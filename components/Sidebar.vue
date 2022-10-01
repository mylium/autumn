<template>
  <div id="__axhl-sidebar" class="md:h-full bottom-0 fixed bg-midnight-150 w-full md:w-auto flex md:flex-col flex-row md:justify-start justify-between items-center p-8 border-t md:border-t-0 md:border-r border-midnight-300">
    <nuxt-link to="/">
      <Logo w="50" h="50" text="false" sizing="false" />
    </nuxt-link>
    <div class="md:flex-col flex-row flex md:mt-16">
      <nuxt-link class="md:mr-auto mr-4" to="/privacy">
        <outline-scale-icon class="w-8 h-8 md:mb-4" />
      </nuxt-link>
      <nuxt-link to="/settings">
        <outline-cog-icon class="w-8 h-8" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SideBar'
}
</script>
