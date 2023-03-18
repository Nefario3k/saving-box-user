<template>
  <div class="investibox-details-card">
    <v-window v-model="formStep" direction="vertical">
      <!-- step 1 investibox details -->
      <v-window-item :value="1">
        <section v-if="formStep == 1">
          <div class="mb-3 right-drawer-title">
            <h1>Poultry Farm, Wuye Abuja</h1>
            <p>By Thrive Agric Abuja</p>
          </div>

          <div
            class="investibox-image-holder"
            @click="showDrawer = true"
            style="
              background-image: url(/images/temporary/investibox-image.jpg);
            "
          ></div>

          <div class="mt-1 text-justify investibox-deccription">
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci nisi tortor malesuada
              dictum semper vel risus egestas nec. Sed senectus orci nibh sit
              amet
            </p>
          </div>

          <div class="row mb-0">
            <div class="col-4 pb-3">
              <div class="investibox-stat-item">
                <h1>₦10,000</h1>
                <p>Per unit</p>
              </div>
            </div>

            <div class="col-4 pb-3">
              <div class="investibox-stat-item">
                <h1>12 Months</h1>
                <p>Duration</p>
              </div>
            </div>

            <div class="col-4 pb-3">
              <div class="investibox-stat-item">
                <h1>12% per Year</h1>
                <p>Expected ROI</p>
              </div>
            </div>
          </div>

          <div class="row mt-0">
            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>499/500</h1>
                <p>Available Units</p>
              </div>
            </div>

            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>23</h1>
                <p>Active Investors</p>
              </div>
            </div>
          </div>

          <!-- <hr /> -->

          <!-- <h1 class="purchase-investibox">Purchase Investibox</h1> -->

          <div
            style="margin-top: 17px"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="flex-grow-1 total-amount">
              <h3>₦1,400</h3>
              <p>Total Returns</p>
            </div>

            <div
              class="d-flex justify-content-between align-items-center manage-cart"
            >
              <div class="cart-btn">
                <span>-</span>
              </div>
              <span class="flex-grow-1 text-center cart-quantity">10</span>
              <div class="cart-btn">
                <span>+</span>
              </div>
            </div>
          </div>
          <!-- display when viewMore is true -->
          <div class="row mb-0 mt-7" v-if="viewMore">
            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>₦11,400</h1>
                <p>Total Payback</p>
              </div>
            </div>

            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>499/500</h1>
                <p>Available Units</p>
              </div>
            </div>

            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>23</h1>
                <p>Investors</p>
              </div>
            </div>

            <v-divider class="col-12 mb-3 p-0 mt-5"></v-divider>
            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>₦11,400</h1>
                <p>Total Payback</p>
              </div>
            </div>

            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>499/500</h1>
                <p>Available Units</p>
              </div>
            </div>

            <div class="col-4">
              <div class="investibox-stat-item">
                <h1>23</h1>
                <p>Investors</p>
              </div>
            </div>
            <v-divider class="col-12 mb-3 p-0 mt-5"></v-divider>
            <div class="col-12 pe-0 pb-0">
              <h3>Behind Berger Yard, Wuye Abuja, Nigeria</h3>
              <span>Location Address</span>
            </div>
          </div>
          <div
            class="mt-8"
            style="
              color: var(--primary-color);
              font-weight: 600;
              font-size: 1.6rem;
            "
          >
            <button @click="viewMore = !viewMore">
              {{ viewMore ? "View less" : "View more" }}
            </button>
          </div>
          <div class="more-details"></div>

          <div class="mt-5">
            <button @click="formStep = 2" class="btn btn-primary btn-design">
              Invest Now
            </button>
          </div>
        </section>
      </v-window-item>

      <v-window-item :value="2">
        <!-- step 2 payment method -->
        <section v-if="formStep == 2">
          <div class="back-btn">
            <a href="" @click.prevent="formStep = 1"
              ><svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13L2 7L8 1"
                  stroke="#4169E1"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Back</a
            >
          </div>

          <div class="mb-0 right-drawer-title">
            <h1>Poultry Farm, Wuye Abuja</h1>
            <p>12% return on investment</p>
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
          </div>

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="formStep = 3"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>

      <v-window-item :value="3">
        <!-- step 3 sumary -->
        <section v-if="formStep == 3">
          <div class="back-btn">
            <a href="" @click.prevent="formStep = 2"
              ><svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13L2 7L8 1"
                  stroke="#4169E1"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Back</a
            >
          </div>

          <div class="mb-4 right-drawer-title">
            <h1>Investment Summary</h1>
          </div>

          <div class="autobox-summary-box">
            <div class="row">
              <div class="col-6">
                <div class="summary-item">
                  <h4>Investment</h4>
                  <p>Poultry Farm Wuye</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Investment Type</h4>
                  <p>Agriculture</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Amount / Unit</h4>
                  <p>₦10,000.00</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Units bought</h4>
                  <p>200</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Interest Rate/ROI</h4>
                  <p>12%</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Total Return</h4>
                  <p>₦2,400,000</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Funding Source</h4>
                  <p>FBN - 30568999380</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Due Date</h4>
                  <p>22 April. 2023</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Period</h4>
                  <p>12 Months</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="formStep = 4"
            >
              Confirm Investment
            </button>
          </div>
        </section>
      </v-window-item>

      <v-window-item :value="4">
        <!-- success -->
        <section v-if="formStep == 4">
          <div
            class="text-center"
            style="margin-top: 130px; margin-bottom: 30px"
          >
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 33.4375L28.5625 40.75L40.75 23.6875M60.25 31C60.25 34.8412 59.4934 38.6447 58.0235 42.1935C56.5535 45.7423 54.399 48.9668 51.6829 51.6829C48.9668 54.399 45.7423 56.5535 42.1935 58.0235C38.6447 59.4934 34.8412 60.25 31 60.25C27.1588 60.25 23.3553 59.4934 19.8065 58.0235C16.2577 56.5535 13.0332 54.399 10.3171 51.6829C7.60101 48.9668 5.44647 45.7423 3.97652 42.1935C2.50657 38.6447 1.75 34.8412 1.75 31C1.75 23.2424 4.83169 15.8026 10.3171 10.3171C15.8026 4.83169 23.2424 1.75 31 1.75C38.7576 1.75 46.1974 4.83169 51.6829 10.3171C57.1683 15.8026 60.25 23.2424 60.25 31Z"
                stroke="#61CA61"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="create-autobox-form-title text-center">
            <h1>Payment Successful!</h1>
            <p style="width: 80%; margin: 0 auto">
              Congratulations, Your investment is successfully created.
            </p>
          </div>

          <div class="text-center" style="margin-top: 58px">
            <a
              href=""
              style="
                text-decoration: none;
                color: #4169e1;
                font-weight: 500;
                font-size: 18px;
              "
              >View my investment</a
            >
          </div>
        </section>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="js">
import FundingSource from '../payment/FundingSource.vue';


export default {
  data() {
    return {
      formStep: 1,
      selectedFruits: "",
      viewMore: false,
      showMenu: false,
    };
  },
  components: { FundingSource }
};
</script>

<style scoped>
.investibox-image-holder {
  width: 100%;
  height: 189px;
  overflow: hidden;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 17px;
}

.investibox-deccription {
  color: rgba(0, 8, 49, 1);
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 39px;
}

.purchase-investibox {
  color: rgba(0, 8, 49, 1);
  font-weight: 600;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 15px;
}

.total-amount h3 {
  color: rgba(0, 8, 49, 1);
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 0px;
}

.total-amount p {
  color: #666b70;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0;
}

.manage-cart {
  width: 147px;
  height: 40px;
}

.cart-btn {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(65, 105, 225, 1);
  border-radius: 1px;
  padding: 0px;
  position: relative;
  cursor: pointer;
}

.cart-btn span {
  position: absolute;
  top: -5px;
  right: 10px;
  color: rgba(65, 105, 225, 1);
  font-size: 30px;
}

.investibox-stat-item h1 {
  color: rgba(0, 0, 0, 1);
  font-weight: 500px;
  font-size: 14px;
}

.investibox-stat-item p {
  color: #666b70;
  font-weight: 400px;
  font-size: 10px;
  margin: 0px;
}

.col-4 {
  padding-left: 0;
}

.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
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

.col-6 {
  padding-left: 0;
}
.col-6:nth-child(1) {
  padding-top: 0;
}
.col-6:nth-child(2) {
  padding-top: 0;
}
p {
  margin-bottom: 0;
}

.summary-item {
  margin-bottom: 0;
}

.autobox-summary-box {
  padding: 18px 30px;
}
</style>
