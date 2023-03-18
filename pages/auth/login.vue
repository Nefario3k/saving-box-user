<template>
  <div class="auth-page-container">
    <div class="d-flex justify-content-between">
      <div class="auth-page-left-side" style="background-image: url(/images/auth/login-image.png)">
        <div class="auth-page-left-side-overlay">
          <h1 style="color: white; font-size: 30px">SAVINGSBOX</h1>
        </div>
      </div>
      <div class="auth-page-right-side flex-grow-1">
        <div class="auth-page-header">
          <h1>Login</h1>
          <p>Login to your account</p>
        </div>

        <div class="auth-form">
          <div class="row align-items-center">
            <div class="col-12 mb-3">
              <label for="emailAddress" class="form-label label-design">Email Address</label>
              <input type="email" v-model="loginData.unique_key" class="form-control input-design" id="emailAddress"
                placeholder="name@example.com" />
            </div>

            <div class="col-12 mb-3">
              <label for="password" class="form-label label-design">Password</label>
              <input type="password" v-model="loginData.password" class="form-control input-design" id="password"
                placeholder="************" @change="login" />
            </div>

            <div class="col-md-6 mb-3">
              <button to="/auth/activate-2fa" class="btn btn-primary btn-design" @click="login">Login</button>
            </div>

            <div class="col-md-6 mb-3 form-text-section">
              <span>Don’t have an account?</span>
              <nuxt-link to="/auth/register">Sign Up</nuxt-link>
            </div>

            <div class="col-12 mb-3 form-text-section text-center">
              <nuxt-link to="/auth/reset-password">Forgot Password?</nuxt-link>
              {{ loginData.email }}
              {{ loginData.password }}
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
// import { useUserStore } from "~/stores";
export default {
  components: { AuthFooterVue },

  layout: "auth",
  data() {
    return {
      loginData: {
        unique_key: 'john@gmail.com',
        password: 'password',
        device_name: 'iphone-scds'
      }
    };
  },
  methods: {
    login() {
      alert('submitting form');
      // useUserStore().login(this.loginData);
      // console.log(this.$config.myPublicVariable);
      /* try {
        const response = await this.$auth.loginWith('local', { data: this.loginData });
        console.log(response);
      } catch (e) {
        console.log(e);
      } */
    },
  },
};
</script>