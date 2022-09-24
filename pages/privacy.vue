<template>
  <div id="__axhl-content" class="w-full h-full p-12">
    <article>
      <nuxt-link class="md:text-base sm:text-sm text-xs" to="/">
        Back to Home.
      </nuxt-link>
      <section class="mt-4">
        <h1 class="md:text-4xl text-2xl font-bold">
          Privacy Policy
        </h1>
        <p class="italic text-midnight-800 md:text-base sm:text-sm text-xs">
          (not in force, last updated September 24th, 2022)
        </p>
        <p class="mt-4 md:text-base sm:text-sm text-xs">
          Mylium ("we", "us") is committed to your security and right to privacy. In this document, we leave our terms regarding the use that we give to the data that you grant us when entering the Mylium web application.
          Thank you for selecting our space. If you have any questions or concerns about this document, contact us at <a href="mailto:contact@mylium.app">contact@mylium.app</a>.
          When you visit our website <a href="https://mylium.app">mylium.app</a> ("the Website"), or consequently, use any of our services ("the Services", which include the Website and App), we appreciate the trust you place in us by providing us with your personal data.
          <br><br>
          Please read this policy carefully as it will help you understand what we do with the information that we collect and the data that you give to us.<br><br>Before that, here's a summary of the terms:
          <ul class="list-disc pt-4 pl-8">
            <li><b>We do not sell your data.</b> Your data is only yours. We do not have the right to use the data that you do not agree to grant, and much worse to sell it to third parties. They belong to you.</li>
            <li><b>We store data you give.</b> The only data we get is what you want to give. Mylium offers settings for letting us know that you don't want to give any kind of data.</li>
            <li><b>We are not business.</b> Mylium's only a hobby. There are no intentions to become a big company.</li>
          </ul>
        </p>
      </section>
      <section class="mt-8">
        <h1 class="md:text-2xl text-lg font-bold">
          1. Data collect
        </h1>
        <p class="mt-4 md:text-base sm:text-sm text-xs">
          We collect certain data when you create an user account in our website. This includes information you willingly or automatically give to us.
          <br><br>The information that you <b>voluntarily</b> give to us are:
          <ul class="list-disc pt-4 pl-8">
            <li>
              <b>Account information.</b>
              When you create an account on Mylium, you give to your own account an username and a password, with a verified email address. You can also set an avatar
              or banner to your account. Information like your username, avatar and banner is public, but your email and password is encrypted and stored. If you have account problems, an Mylium employee will not ask
              you for your account's password, and if someone does, we ask you to report them in our email.
            </li>
            <li>
              <b>Content you post.</b>
              After you create an account on the website, you are able to create posts which may include multimedia. The content of your post is stored, linking its creating to your account.
            </li>
          </ul>
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PrivacyPage',
  head: {
    title: 'Privacy Policy',
    meta: [
      { name: 'og:title', content: 'Mylium - Privacy Policy' }
    ]
  }
}
</script>
