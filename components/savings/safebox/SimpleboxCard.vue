<template>
  <div>
    <!-- savings card -->
    <div class="autobox-card">
      <div class="d-flex justify-content-between">
        <h1 class="autobox-card-title" @click="$refs.rightDraw.showPanel()">
          Children’s Fees
        </h1>
        <div class="autobox-card-amount">
          <h1>₦100 of ₦100,000</h1>
          <p>Amount Saved</p>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <div class="autobox-card-payment-info">
          <p>Payment Due in 15 days</p>
          <img src="/images/icons/angle-up.svg" alt="" />
          <small class="autobox-card-accrued-interest">₦1,000 (10%)</small>
          <small class="autobox-card-accrued-interest-text"
            >Earned all time</small
          >
        </div>
        <div class="autobox-card-next-payment">
          <small>₦1,000 </small> <small>/ Week</small>
          <p>Deposit Amount</p>
        </div>
      </div>

      <div class="autobox-card-progress">
        <v-progress-linear
          rounded
          value="50"
          height="8px"
          background-color="rgba(227, 227, 227, 1)"
          color="rgba(255, 150, 204, 1)"
        ></v-progress-linear>
        <div class="d-flex justify-content-between">
          <small class="text-left">2% Completed</small>
          <small class="text-right">5 Weeks Remaining</small>
        </div>
      </div>
    </div>

    <!-- view details right drawer -->
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showSavingsDetails"
      @closeDrawer="showSavingsDetails = false"
    >
      <AutoboxDetails />
    </RightDrawer>
  </div>
</template>

 <script lang="js">
 import RightDrawer from "@/components/assets/RightDrawer.vue";
 import AutoboxDetails from "@/components/savings/autobox/AutoboxDetails.vue";
export default {
  components: {
    RightDrawer,
    AutoboxDetails
  },
  data() {
    return {
      showSavingsDetails: false
    };
  },
  // page properties go here
};
</script>

<style scoped>
/* autobox card */

.autobox-card {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 23px;
  border: 0.5px solid rgba(168, 168, 168, 1);
  background: gree;
  margin-bottom: 10px;
  border-radius: 10px;
}

.autobox-card-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
  /* color: rgba(0, 8, 16, 1); */
  color: rgba(65, 105, 225, 1);
  cursor: pointer;
}

.autobox-card-amount h1 {
  font-weight: 700;
  font-size: 20px;
  /* line-height: 35.13px; */
  text-align: right;
  color: rgba(0, 8, 16, 1);
  margin-bottom: 0px;
}

.autobox-card-amount p {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 35.13px; */
  text-align: right;
  color: rgba(0, 8, 16, 1);
}

.autobox-card-payment-info p {
  font-weight: 500;
  font-size: 14px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
}

.autobox-card-payment-info p {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
}

.autobox-card-payment-info img {
  width: 9px;
  height: 4.5px;
  color: rgba(51, 51, 51, 1);
}

.autobox-card-accrued-interest {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(102, 107, 112, 1);
}

.autobox-card-accrued-interest-text {
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(153, 156, 159, 1);
}

.autobox-card-next-payment small {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 16, 1);
  text-align: right;
}

.autobox-card-next-payment p {
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(102, 107, 112, 1);
  text-align: right;
}

.autobox-card-progress {
  margin-top: 16px;
}

.autobox-card-progress .text-left {
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 49, 1);
}

.autobox-card-progress .text-right {
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 0px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 49, 1);
  text-align: right;
}
</style>
