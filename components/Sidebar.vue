<template>
  <div id="axhl__sidebar" class="md:h-full bottom-0 md:relative fixed bg-midnight-150 w-full md:w-auto flex md:flex-col flex-row md:justify-start justify-between items-center p-8 border-t md:border-t-0 md:border-b border-b-0 md:border-r border-midnight-300">
    <nuxt-link to="/">
      <Logo w="50" h="50" text="false" sizing="false" />
    </nuxt-link>
    <nuxt-link to="/settings" class="md:mt-16">
      <outline-cog-icon class="w-8 h-8" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SideBar'
}
</script>
