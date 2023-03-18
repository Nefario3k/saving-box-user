<template>
  <div>
    <h1 class="right-drawer-title">Loan Application</h1>
    <p class="my-8">
      You are Currently not eligible for a loan, kindly verify your identity,
      BVN and KYC to get started with your loan application
    </p>
    <div class="has-error mb-12">
      <p class="error-message">
        Error in withdrawal request. Verify details below to then proceed
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
            <g clip-path="url(#clip0_985_87651)">
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                fill="#61CA61"
              />
            </g>
            <defs>
              <clipPath id="clip0_985_87651">
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
    <button @click="verifiedAccount" class="btn btn-primary btn-design">
      Start Verification
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    verifiedAccount() {
      this.$emit("accountVerified");
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
.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
}
</style>