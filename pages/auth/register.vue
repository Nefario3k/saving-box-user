<template>
  <div class="auth-page-container">
    <div class="d-flex justify-content-between">
      <div class="auth-page-left-side" style="background-image: url(/images/auth/register-image.png)">
        <div class="auth-page-left-side-overlay">
          <h1 style="color: white; font-size: 30px">SAVINGSBOX</h1>
        </div>
      </div>
      <div class="auth-page-right-side flex-grow-1">
        <div class="auth-page-header">
          <h1>Create an Account</h1>
          <p>Create a Secure profile</p>
        </div>

        <div class="auth-form">
          <div class="row align-items-center">
            <div class="col-md-6 mb-3">
              <label for="firstname" class="form-label label-design"
                >First Name</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="firstname"
                placeholder="John"
              />
            </div>

            <div class="col-md-6 mb-3">
              <label for="lastname" class="form-label label-design"
                >Last Name
              </label>
              <input
                type="email"
                class="form-control input-design"
                id="lastname"
                placeholder="Doe"
              />
            </div>

            <div class="col-12 mb-3">
              <label for="emailAddress" class="form-label label-design"
                >Email Address</label
              >
              <input
                type="email"
                class="form-control input-design"
                id="emailAddress"
                placeholder="name@example.com"
              />
            </div>

            <div class="col-12 mb-3">
              <label for="phonrnumber" class="form-label label-design"
                >Phone Number</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="phonrnumber"
                placeholder="08136000000"
              />
            </div>

            <div class="col-md-6 mb-3">
              <label for="password" class="form-label label-design"
                >Password</label
              >
              <input
                type="password"
                class="form-control input-design"
                id="password"
                placeholder="************"
              />
            </div>

            <div class="col-md-6 mb-3">
              <label for="refCode" class="form-label label-design"
                >Referal Code</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="refCode"
                placeholder="FG77633"
              />
            </div>

            <div class="col-md-6 mb-3">
              <nuxt-link class="btn btn-primary btn-design" to="/auth/verify-account">
                Create Account
              </nuxt-link>
            </div>

            <div class="col-md-6 mb-3 form-text-section">
              <span>Already have an account? <br /> </span> <nuxt-link to="/auth/login">Sign in!</nuxt-link>
            </div>

            <div class="col-12 mb-3 form-text-section">
              <span
                >By registering you indicate that you read and agreed to the
              </span>
              <nuxt-link to="/terms">Terms of Use</nuxt-link>
            </div>
          </div>
        </div>

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
    return {};
  },
  // page properties go here
};
</script>