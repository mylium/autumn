<template>
  <div id="__axhl-content" class="w-full h-full">
    <article>
      <Logo w="250" h="250" />
      <p class="mt-2 md:mt-8 md:w-full lg:w-1/2 md:text-base text-sm">
        Mylium is an upcoming closed space for <b>kpoopies</b>, made by <b>kpoopies</b>. If you want to participate into beta testing,
        we encourage you to read Mylium' <nuxt-link to="/privacy" v-text="'privacy policy'" /> and fill the application form below.
      </p>
    </article>
    <form class="mt-6 md:mt-8 w-auto">
      <div class="__select-container flex flex-wrap flex-col lg:w-1/4 md:w-1/2 w-full">
        <div class="mb-4">
          <input
            id="username"
            type="text"
            class="outline-none bg-midnight-100 border border-midnight-300 text-white text-sm rounded-3xl focus:ring-midnight-600 focus:border-midnight-600 block w-full py-2.5 px-4"
            placeholder="Name"
            required
          >
        </div>
        <div class="mb-2">
          <input
            id="email"
            type="text"
            class="outline-none bg-midnight-100 border border-midnight-300 text-white text-sm rounded-3xl focus:ring-midnight-600 focus:border-midnight-600 block w-full py-2.5 px-4"
            placeholder="Email"
            required
          >
        </div>
        <div>
          <button class="mr-3 w-fit h-min flex items-center p-2 mt-4 text-sm border border-transparent rounded-3xl text-white bg-midnight-600 hover:bg-midnight-800 transition-colors duration-200 transform shadow shadow-md shadow-midnight-600">
            <span class="mx-2">Register</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen'
}
</script>
