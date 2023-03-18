<template>
  <div class="auth-page-container">
    <div class="d-flex justify-content-between">
      <div class="auth-page-left-side">
        <div class="auth-page-left-side-overlay">
          <h1 style="color: white; font-size: 30px">SAVINGSBOX</h1>
        </div>
      </div>
      <div class="auth-page-right-side flex-grow-1">
        <div class="auth-page-header">
          <h1>Two-factor Authentication</h1>
          <p>Set up two-factor authentication</p>
        </div>

        <div class="switch-token-method">
          <p>
            A 4-digit token was sent to your email 
            <strong>bdmichael.ajayi@gmail.com</strong>
          </p>
          <a href="">Send to Phone instead</a>
        </div>

        <div class="auth-form">
          <div class="row">
            <div class="col-md-6 pb-0 pl-5 pr-5">
              <v-otp-input length="4"></v-otp-input>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 pb-0 pl-5 pr-5">
              <div
                class="d-flex justify-content-between resend-token-container"
              >
                <span>Didn’t get code?</span>
                <a href="">Resend Code</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-md-6 pb-0 pl-5 pr-5"
              style="padding-right: 150px; margin-top: 49px"
            >
              <button class="btn btn-primary btn-design" type="submit">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <div class="footer" style="margin-top: 102px">
          <p>© 2022 Savingsbox About Privacy Terms</p>
        </div>
      </div>
    </div>
  </div>
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