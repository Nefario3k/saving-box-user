<template>
  <div>
    <div class="invoice-item">
      <div class="d-flex justify-content-between">
        <div class="invoice-item-title-date">
          <p>Children’s Fees</p>
          <small>Due 9 Nov. 2022, 17:30</small>
        </div>

        <div class="invoice-item-amount-action">
          <p>N1000</p>
          <a href="" @click.prevent="$refs.rightDraw.showPanel()"
            >Make Payment</a
          >
        </div>
      </div>
      <hr />
    </div>

    <RightDrawer
      ref="rightDraw"
      :showDrawer="showMakePaymentDrawer"
      @closeDrawer="showMakePaymentDrawer = false"
    >
      <section v-if="step == 1">
        <div class="invoice-payment-section">
          <div class="mb-0 right-drawer-title">
            <h1>Make Payment</h1>
            <p>Top up Children’s Fees Savings</p>
          </div>
          <div class="pt-0 col-12">
            <v-container class="pa-0 font-weight-medium" fluid>
              <v-checkbox
                class="font-weight-medium"
                v-model="checkbox"
                color="blue"
                :label="` Fund From SavingBox Wallet`"
              ></v-checkbox>
            </v-container>
          </div>
          <h1 class="funding-source-title">Select Funding Source</h1>
          <div
            class="d-flex justify-content-between align-items-center payment-gatway-card"
          >
            <img src="/images/paystack-logo.png" alt="" />
            <div class="flex-grow-1 ml-4 payment-gatway-name">
              <h4>Fund with PayStack</h4>
              <span>Enter your card details</span>
            </div>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.999999L7 7.6L0.999999 14.2"
                stroke="#4169E1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div
            class="d-flex justify-content-between align-items-center payment-gatway-card"
          >
            <img src="/images/flutterwave-logo.png" alt="" />
            <div class="flex-grow-1 ml-4 payment-gatway-name">
              <h4>Fund with Flutterwave</h4>
              <span>Enter your card details</span>
            </div>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.999999L7 7.6L0.999999 14.2"
                stroke="#4169E1"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div style="margin-top: 29px">
            <h1 class="funding-source-title">Fund with Saved Card</h1>
            <v-menu v-model="showMenu" offset-y :nudge-bottom="5">
              <template v-slot:activator="{ on, attrs }">
                <div
                  :class="{ activeMenu: showMenu }"
                  v-bind="attrs"
                  v-on="on"
                  class="minitab relative d-block my-0"
                >
                  <input
                    style="
                      background: rgba(255, 255, 255, 0.02);
                      border: 1px solid #ede0e0;
                      color: #000831;
                    "
                    disabled
                    type=""
                    name=""
                    value="Select from saved Cards"
                  />
                  <div class="absolute dropdownIcon">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1L7 7L1 1"
                        stroke="var(--primary-color)"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </template>
              <v-list class="dropdown__list select__list">
                <v-list-item class="dropdown__list-item">
                  <v-list-item-title class="dropdown__list-title">
                    <span class="radioBtn"></span>
                    <span class="content date">03/24</span>
                    <span class="content">5336 5899 ******</span>
                    <img src="/images/icons/mastercard.png" alt="" />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-title class="dropdown__list-title">
                    <span class="radioBtn"></span>
                    <span class="content date">03/24</span>
                    <span class="content">5336 5899 ******</span>
                    <img src="/images/icons/mastercard.png" alt="" />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-title class="dropdown__list-title">
                    <span class="radioBtn"></span>
                    <span class="content date">03/24</span>
                    <span class="content">4336 5899 ******</span>
                    <img src="/images/icons/visa.png" alt="" />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="dropdown__list-item bindNew">
                  <v-list-item-title class="dropdown__list-title">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4_17464)">
                        <path
                          d="M11 11.5V5.5H13V11.5H19V13.5H13V19.5H11V13.5H5V11.5H11Z"
                          fill="#4169E1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_17464">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Bind New Card</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <div style="margin-top: 130px" class="col-12">
              <button class="btn btn-primary btn-design" @click="++step">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="" v-if="step == 2">
        <success-screen
          title="Payment Successful!!"
          body="Congratulations, You have successfully funded your savingsbox wallet."
          link="Return to Dashboard"
        ></success-screen>
      </section>
    </RightDrawer>
  </div>
</template>

<script lang="js">
import RightDrawer from "@/components/assets/RightDrawer.vue";
import SuccessScreen from "../loan/form/SuccessScreen.vue";
export default {
  components: {
    RightDrawer,
    SuccessScreen
  },
  data() {
    return {
      showMakePaymentDrawer: false,
      selectedFruits: '',
      showMenu: false,
      step: 1,
      checkbox: false,
    };
  },
  // page properties go here
};
</script>

<style scoped>
.invoice-payment-title {
  margin-bottom: 42px;
}

.invoice-payment-title h1 {
  font-weight: 600;
  font-size: 25px;
  color: rgba(0, 8, 16, 1);
  margin-bottom: 16px;
}

.invoice-payment-title p {
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 8, 16, 1);
}

.funding-source-title {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.3rem;
  color: rgba(0, 8, 16, 1);
}

.payment-gatway-card {
  /* padding: 20px; */
  border: 1px solid rgba(237, 224, 224, 1);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  height: 80px;
  padding: 0px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.payment-gatway-card:hover {
  border-color: var(--primary-color);
  transition: all 0.2s ease-in-out;
}

.payment-gatway-card img {
  width: 105px;
  height: 27px;
}

.payment-gatway-name h4 {
  font-weight: 500;
  font-size: 16px;
  color: var(--primary-color);
  margin-bottom: 0px;
}

.payment-gatway-name span {
  font-weight: 400;
  font-size: 14px;
  color: rgba(102, 107, 112, 1);
  margin-bottom: 0px;
}
.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
}
.col-12 {
  padding-right: 0;
}
</style>