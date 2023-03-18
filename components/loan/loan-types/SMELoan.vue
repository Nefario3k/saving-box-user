<template>
  <div>
    <div class="mb-3 right-drawer-title"><h1>SME Loan</h1></div>

    <div class="loan-details-description">
      <p>
        Whatever your business needs are, we have the right loan to help meet
        your need. Such as;
      </p>

      <ul>
        <li>Cash flow lending</li>
        <li>School finance</li>
        <li>Distributor finance</li>
      </ul>

      <h1 style="font-weight: 500">Interest</h1>

      <ol>
        <li>Interest is 10% of all payments that were paid on time</li>
        <li>All late payments will not be used to calculate interest</li>
      </ol>

      <h1 style="font-weight: 500">Liuidation of Savings</h1>

      <ol>
        <li>The user will lose accrued interest on savings.</li>
        <li>The user will lose 1.5% of the total amount saved.</li>
        <li>
          On completion or liquidation of the savings plan, money should be
          deposited in the user’s Savingsbox wallet
        </li>
      </ol>
    </div>

    <div style="margin-top: 67px">
      <button @click="showVerification" class="btn btn-primary btn-design">
        Apply Now
      </button>
    </div>
    <div style="margin-top: 23px">
      <nuxt-link to="/loans/sme-loans">
        <button class="btn btn-primary btn-outline-design btn-design">
          Go to Dashboard
        </button>
      </nuxt-link>
    </div>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showVerificationDrawer"
      @closeDrawer="showVerificationDrawer = false"
    >
      <VerifyAccount @accountVerified="showLoanForm"></VerifyAccount>
    </RightDrawer>
    <RightDrawer
      ref="rightDrawSecond"
      :showDrawer="showCreateLoanForm"
      @closeDrawer="showCreateLoanForm = false"
    >
      <CreateSMELoanForm />
    </RightDrawer>
  </div>
</template>

<script lang="js">
import RightDrawer from "@/components/assets/RightDrawer.vue";
import VerifyAccount from "../VerifyAccount.vue";
import CreateSMELoanForm from "../sme-loan/CreateSMELoanForm.vue"
export default {
  components: {
    RightDrawer,
    VerifyAccount,
    CreateSMELoanForm
  },
  data() {
    return {
      showDrawer: false,
      showVerificationDrawer: false,
      showCreateLoanForm: false,
    };
  },
  methods: {
    showVerification() {
      this.showDrawer = false;
      this.showVerificationDrawer = true;
      this.$refs.rightDraw.showPanel()
    },
    showLoanForm() {
      this.showVerificationDrawer = false;
      this.showCreateLoanForm = true;
      this.$refs.rightDraw.closeDrawer()
      this.$refs.rightDrawSecond.showPanel()
    }
  },
  // page properties go here
};
</script>

<style scoped>
.loan-type {
  padding: 32px;
  background-color: rgba(231, 237, 255, 1);
  border-radius: 10px;
}

.loan-type-content h3 {
  font-weight: 600;
  font-size: 25px;
  line-height: 35.13px;
  color: rgba(65, 105, 225, 1) !important;
}

.loan-type .loan-type-content p {
  font-weight: 400px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(51, 57, 64, 1);
  margin-bottom: 0px;
}

.loan-type .loan-type-content .loan-type-btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 37.15px;
  color: rgba(102, 107, 112, 1) !important;
  text-decoration: none;
}

.loan-type .loan-type-direction {
  width: 35px;
  font-size: 20px;
  color: rgba(65, 105, 225, 1);
}

ul {
  list-style-type: none;
  padding: 0 !important;
  margin-bottom: 27px;
}

ol {
  margin-bottom: 27px;
}

.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
}

.btn-outline-design {
  background-color: transparent;
}
</style>
