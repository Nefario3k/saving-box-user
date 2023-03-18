<template>
  <footer class="py-6">
    <div class="row text-center">
      <div class="col-12 col-sm-6 col-md-4 px-12">
        <h3>Help center</h3>
        <p>Answers to frequently asked questions.</p>
        <nuxt-link to="">Visit Help Center</nuxt-link>
      </div>
      <div class="col-12 col-sm-6 col-md-4 px-12">
        <h3>Community</h3>
        <p>Ask questions and discuss issues and ideas with our teams</p>
        <nuxt-link to="">Join Our Community</nuxt-link>
      </div>
      <div class="col-12 col-sm-6 col-md-4 px-12">
        <h3>Support</h3>
        <p>Get in touch with an OpenAI support specialist.</p>
        <nuxt-link to="">About Us</nuxt-link>
        <nuxt-link to="">Contact Us</nuxt-link>
      </div>
    </div>
    <p class="text-center mt-6">Privacy Policy</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: #fbf8f8;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3.1rem;
  }

  p {
    font-size: 1.4rem;
    color: #333940;
    // line-height: 2.5rem;
    margin-bottom: 0.75rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: var(--primary-color) !important;
    font-weight: 500;
    font-size: 1.6rem;

    &:hover {
      color: #2e499c !important;
    }
  }
}
</style>