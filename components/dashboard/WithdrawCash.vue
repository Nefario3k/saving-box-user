<template>
  <div>
    <section class="" v-if="step == 1">
      <div class="right-drawer-title">
        <h1 class="">Withdraw Cash</h1>
        <p>Cash withdrawal, money will sent to your bank account</p>
      </div>
      <template v-if="!hasError">
        <div class="col-12">
          <label for="exampleFormControlInput1" class="form-label label-design"
            >Enter Amount</label
          >
          <div
            style="
              box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
              border-radius: 8px;
            "
            class="input-group"
          >
            <label
              style="background-color: #fff4fa"
              for="withdrawInput"
              class="input-group-text input-design"
              ><!-- ₦ -->
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.304 12V0.12H5.13L8.856 6.942L9.882 9.012H9.918L9.846 7.14V0.12H12.006V12H9.18L5.526 5.358L4.428 3.162H4.41L4.464 5.106V12H2.304ZM0.306 6.834V5.268H14.004V6.834H0.306Z"
                  fill="#666B70"
                /></svg
            ></label>

            <input
              id="withdrawInput"
              type="text"
              v-model="amount"
              @change="checkError()"
              class="form-control input-design"
              aria-label="Amount (to the nearest naira)"
            />
            <label
              for="withdrawInput"
              class="input-group-text input-design secondLabel"
              style="
                font-weight: 400px;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
                background-color: #fff4fa;
              "
              >Min. 3000</label
            >
          </div>
        </div>
        <div class="col-12">
          <label for="exampleFormControlInput1" class="form-label label-design"
            >Note/Narration</label
          >
          <div
            style="
              box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
              border-radius: 8px;
            "
            class="input-group"
          >
            <textarea
              rows="4"
              class="form-control input-design"
              id="exampleFormControlInput1"
              placeholder="Enter note here"
              style="height: 11.6rem; resize: none"
            >
            </textarea>
          </div>
        </div>
        <div class="col-12">
          <label for="exampleFormControlInput1" class="form-label label-design"
            >Enter Password</label
          >
          <div
            style="
              box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
              border-radius: 8px;
            "
            class="input-group"
          >
            <input
              type="password"
              placeholder="Enter Password"
              class="form-control input-design lefting"
              aria-label="Enter Password"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="has-error">
          <p class="error-message">
            Error in withdrawal request. Verify details below the to proceed
          </p>
          <div class="error-detail">
            <div class="d-flex justify-space-between align-center mr-4">
              <p>BVN Verification</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_882_85786)">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                    fill="#61CA61"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_882_85786">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="d-flex justify-space-between">
              <p>KYC Verification</p>
              <nuxt-link to="/profile?verify=true">Verify</nuxt-link>
            </div>
            <div class="d-flex justify-space-between">
              <p>Bank Details</p>
              <nuxt-link to="/profile?verify=true">Verify</nuxt-link>
            </div>
          </div>
        </div>
      </template>

      <div class="col-12" style="margin-top: 100px">
        <button
          class="btn btn-primary btn-design"
          @click.prevent="step++"
          :disabled="hasError"
        >
          Withdraw
        </button>
      </div>
    </section>
    <!-- step 2 -->
    <success-screen
      v-if="step == 2"
      title="Successful!"
      body="You just Successfully Withdrew 20,000 Naira to <strong>FCMB-2039488488</strong>"
      link="Back to Dashboard"
    />
  </div>
</template>
<script>
import SuccessScreen from "../loan/form/SuccessScreen.vue";
export default {
  components: { SuccessScreen },
  data() {
    return {
      step: 1,
      hasError: false,
      amount: null,
    };
  },
  methods: {
    checkError() {
      if (this.amount == 1) {
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div.has-error {
  font-weight: 500;

  p.error-message {
    color: var(--danger-color);
  }

  div.error-detail {
    border: 1px solid #d0d0d0;
    padding: 2.3rem;
    border-radius: 1rem;

    div {
      color: #333940;
      font-size: 1.8rem;
      line-height: 3.5rem;

      a {
        text-decoration: none;
        color: var(--primary-color);
      }
    }
  }
}
.col-12 {
  padding-right: 0;
}
.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
}
</style>