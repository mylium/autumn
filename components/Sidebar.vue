<template>
  <div id="axhl__sidebar" class="h-full flex flex-col justify-start items-center relative p-8 border-r border-midnight-300">
    <nuxt-link to="/">
      <Logo w="50" h="50" text="false" sizing="false" />
    </nuxt-link>
    <nuxt-link to="/settings" class="mt-16">
      <outline-cog-icon class="w-8 h-8" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SideBar'
}
</script>
