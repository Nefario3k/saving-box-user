<template>
  <div class="auth-page-container">
    <div class="d-flex justify-content-between">
      <div
        class="auth-page-left-side"
        style="background-image: url(/images/auth/password-reset-image.png)"
      >
        <div class="auth-page-left-side-overlay">
          <h1 style="color: white; font-size: 30px">SAVINGSBOX</h1>
        </div>
      </div>
      <div class="auth-page-right-side flex-grow-1">
        <!-- reset password step one -->
        <section v-if="formStep === 1">
          <div class="auth-page-header">
            <h1>Reset Password</h1>
            <p>Enter the email or Phone Number you registered with.</p>
          </div>

          <div class="auth-form">
            <div class="row align-items-center">
              <div class="col-12 mb-3" style="position: relative">
                <label for="emailAddress" class="form-label label-design"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="form-control input-design"
                  id="emailAddress"
                  placeholder="name@example.com"
                />

                <a href="" class="input-top-righ">Use Phone Number</a>
              </div>

              <div class="col-md-6 mb-3">
                <button
                  class="btn btn-primary btn-design"
                  @click.prevent="formStep = 2"
                >
                  Send Token
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- reset password step twu -->
        <section v-if="formStep === 2">
          <div class="auth-page-header">
            <h1>Confirm Token</h1>
            <p>Enter the token sent to your email or phone</p>
          </div>

          <div class="switch-token-method">
            <p>
              A 4-digit token was sent to your email
              <strong>bdmichael.ajayi@gmail.com</strong>
            </p>
            <a href="" @click.prevent="formStep = 1">Send to Phone instead</a>
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
                <button
                  class="btn btn-primary btn-design"
                  @click="formStep = 3"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- reset password step there -->
        <section v-if="formStep == 3">
          <div class="auth-page-header">
            <h1>Create New Password</h1>
            <p>Login to your account</p>
          </div>

          <div class="auth-form">
            <div class="row align-items-center">
              <div class="col-12 mb-3" style="position: relative">
                <label for="password" class="form-label label-design"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control input-design"
                  id="password"
                  placeholder="************"
                />

                <i class="fa-solid fa-eye-slash password-view-switch"></i>
              </div>

              <div class="col-12 mb-3" style="position: relative">
                <label for="password" class="form-label label-design"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="form-control input-design"
                  id="password"
                  placeholder="************"
                />
                <i class="fa-solid fa-eye password-view-switch"></i>
              </div>

              <div class="col-md-6 mb-3">
                <button
                  class="btn btn-primary btn-design"
                  @click="formStep = 1"
                >
                  Create Password
                </button>
              </div>
            </div>
          </div>
        </section>

        <AuthFooterVue />
      </div>
    </div>
  </div>
</template>

<script>
import AuthFooterVue from "@/components/assets/AuthFooter.vue";
export default {
  components: { AuthFooterVue },
  layout: "auth",
  data() {
    return {
      formStep: 1,
    };
  },
  // page properties go here
};
</script>