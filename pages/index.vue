<template>
  <Welcome />
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: '- Building new experiences',
    meta: [
      { name: 'og:title', content: 'Mylium - Building new experiences' }
    ]
  },
  computed: {
    getUser () {
      return this.$store.state.account
    }
  }
}
</script>
