<template>
  <div>
    <!-- savings card -->
    <div class="loan-card">
      <div class="d-flex justify-content-between">
        <h1 class="loan-card-title" @click="$refs.rightDraw.showPanel()">
          {{ loanType }}
        </h1>
        <div class="loan-card-amount">
          <h1>₦100,000</h1>
          <p>Amount Borrowed</p>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <div class="loan-card-payment-info">
          <p>2/6</p>
          <small class="loan-card-accrued-interest">Monthly Repayment</small>
          <!-- <small class="loan-card-accrued-interest-text">Earned all time</small> -->
        </div>
        <div class="loan-card-next-payment">
          <small>22 Nov, 2022</small>
          <p>Due Date</p>
        </div>
      </div>

      <div class="simple-card-progress">
        <div class="font-weight-medium">Progress</div>
        <v-progress-linear
          rounded
          value="10"
          height="8px"
          background-color="rgba(227, 227, 227, 1)"
          color="rgba(97, 202, 97, 1)"
        ></v-progress-linear>
        <div class="d-flex justify-content-between">
          <small class="text-left">10% Completed</small>
          <small class="text-right">6 Months Left</small>
        </div>
      </div>
    </div>
    <!-- view details right drawer -->
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showSavingsDetails"
      @closeDrawer="showSavingsDetails = false"
    >
      <LoanDetailsVue />
    </RightDrawer>
  </div>
</template>
<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
import LoanDetailsVue from "./LoanDetails.vue";
export default {
  props: { loanType: { Type: String, default: "SME Loan" } },
  components: { LoanDetailsVue, RightDrawer },
  data() {
    return {
      showSavingsDetails: false,
    };
  },
};
</script>
<style scoped>
/* autobox card */

.loan-card {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 23px;
  border: 0.5px solid rgba(168, 168, 168, 1);
  /* background: linear-gradient(101.16deg, #EFF3FF 1.96%, #E3FEE3 97.93%); */
  background-color: transparent;
  margin-bottom: 10px;
  border-radius: 10px;
  max-width: 100%;
}

.loan-card-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
  /* color: rgba(0, 8, 16, 1); */
  color: rgba(65, 105, 225, 1);
  cursor: pointer;
  text-transform: capitalize;
}

.loan-card-amount h1 {
  font-weight: 700;
  font-size: 20px;
  /* line-height: 35.13px; */
  text-align: right;
  color: rgba(0, 8, 16, 1);
  margin-bottom: 0px;
}

.loan-card-amount p {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 35.13px; */
  text-align: right;
  color: rgba(0, 8, 16, 1);
}

.loan-card-payment-info p {
  font-weight: 500;
  font-size: 14px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
}

.loan-card-payment-info p {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
}

.loan-card-payment-info img {
  width: 9px;
  height: 4.5px;
  color: rgba(51, 51, 51, 1);
}

.loan-card-accrued-interest {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(102, 107, 112, 1);
}

.loan-card-accrued-interest-text {
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(153, 156, 159, 1);
}

.loan-card-next-payment small {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
  text-align: right;
}

.loan-card-next-payment p {
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(102, 107, 112, 1);
  text-align: right;
}
</style>