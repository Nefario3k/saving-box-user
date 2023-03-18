<template>
  <section class="container-fluid" data-app>
    <div class="welcome-logo-section" style="margin: 49px 0px 66px 52px">
      <h1 style="color: rgba(128, 128, 128, 1); font-size: 30px">SAVINGSBOX</h1>
    </div>

    <div class="container two-fa-page-content text-center">
      <div class="two-fa-notice-page-header">
        <h1>Good One!</h1>
        <p>You have successfully enabled Two -Factor authentication</p>
      </div>

      <div class="activat-2fa-btn-container">
        <nuxt-link to="/" class="btn btn-primary btn-design" style="padding: 8px 25px;">
          Go to Dashboard
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
    
<script>
export default {
  layout: "auth",
  data() {
    return {};
  },
  // page properties go here
};
</script>
  
<style>
.two-fa-page-content {
  max-width: 1000px;
}

.two-fa-notice-page-header {
  margin-bottom: 52px;
}

.activat-2fa-btn-container {
  margin-bottom: 55px;
}

.activat-2fa-btn-container .btn-design {
  max-width: 387px;
}

.two-fa-notice-page-header h1 {
  font-weight: 700;
  font-size: 40px;
  line-height: 32.65px;
  color: rgba(65, 105, 225, 1);
}

.two-fa-notice-page-header p {
  font-weight: 500;
  font-size: 20px;
  line-height: 32.65px;
  color: rgba(0, 8, 49, 1);
}

.wellcome-page-footer-left {
  color: rgba(102, 107, 112, 1) !important;
}
</style>