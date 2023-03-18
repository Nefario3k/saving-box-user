<template>
  <section>
    <!-- step 1 -->
    <section v-if="stepInfo.step == 1">
      <div class="right-drawer-title">
        <h1 class="">Fund Wallet</h1>
        <p>Top up your wallet Balance</p>
      </div>
      <div class="funding-source">
        <h2>Select Funding Source</h2>
        <div class="fund-option d-flex pa-4">
          <div class="option-logo d-flex justify-center align-center">
            <img src="images/paystack-logo.png" alt="" />
          </div>
          <div class="option-text ml-4">
            <h3>Fund with PayStack</h3>
            <p>Enter your card details</p>
          </div>
          <div class="loan-type-direction d-flex justify-center align-center">
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
        </div>
        <div class="fund-option d-flex pa-4">
          <div class="option-logo d-flex justify-center align-center">
            <img src="images/flutterwave-logo.png" alt="" />
          </div>
          <div class="option-text ml-4">
            <h3>Fund with Flutterwave</h3>
            <p>Enter your card details</p>
          </div>
          <div class="loan-type-direction d-flex justify-center align-center">
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
        </div>
        <div
          class="fund-option d-flex pa-4"
          @click="stepInfo = { fundingOption: 'va', step: 2 }"
        >
          <div class="option-logo d-flex justify-center align-center">
            <img src="images/virtual-account.png" alt="" />
          </div>
          <div class="option-text ml-4">
            <h3>
              Fund with Virtual Account

              <svg
                class="ml-2 mt-n1"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_126_39502)">
                  <path
                    d="M9 16.5C4.85775 16.5 1.5 13.1422 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1422 1.5 16.5 4.85775 16.5 9C16.5 13.1422 13.1422 16.5 9 16.5ZM9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15V15ZM8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25Z"
                    fill="#999C9F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_126_39502">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </h3>
            <p>Fund Wallet via transfer</p>
          </div>
          <div class="loan-type-direction d-flex justify-center align-center">
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
        </div>
        <div class="col-12 mt-8 pb-1">
          <label
            for="exampleFormControlInput1"
            class="form-label label-design font-weight-medium"
            >Fund with saved card</label
          >
        </div>
        <!-- select menu  -->
        <div class="py-0 col-12">
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
      </div>
      <div class="col-12" style="margin-top: 100px">
        <button
          class="btn btn-primary btn-design"
          @click="stepInfo = { fundingOption: 'flutterwave', step: 2 }"
        >
          Continue
        </button>
      </div>
    </section>
    <section v-if="stepInfo.step == 2">
      <div class="back-btn">
        <a href="" @click.prevent="stepInfo.step = --stepInfo.step"
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
      <template v-if="stepInfo.fundingOption == 'va'">
        <div class="right-drawer-title">
          <h1 class="">Fund with virtual account</h1>
          <p>Fund your wallet via bank transfer</p>
        </div>
        <div class="fund-with-va">
          <h2></h2>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>
                    <div class="bankDetails">
                      <span class="countingNo">1</span>
                      <div class="bankDetails__wrapper">
                        <div class="bankDetails__wrapper-content">
                          <h3>Account No:</h3>
                          <h4>
                            0238488480
                            <v-icon
                              class="copy-icon ml-8"
                              @click="snackbar = true"
                              >mdi-content-copy</v-icon
                            >
                          </h4>
                        </div>
                        <div class="bankDetails__wrapper-content">
                          <h3>Bank Name:</h3>
                          <h4>Gaurantee Trust Bank</h4>
                        </div>
                        <div class="bankDetails__wrapper-content">
                          <h3>Account Name:</h3>
                          <h4>SavingsBox Wallet</h4>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="bankDetails">
                      <span class="countingNo">2</span>
                      <div class="bankDetails__wrapper">
                        <div class="bankDetails__wrapper-content">
                          <h3>Account No:</h3>
                          <h4>
                            0238488480
                            <v-icon
                              class="copy-icon ml-8"
                              @click="snackbar = true"
                              >mdi-content-copy</v-icon
                            >
                          </h4>
                        </div>
                        <div class="bankDetails__wrapper-content">
                          <h3>Bank Name:</h3>
                          <h4>Gaurantee Trust Bank</h4>
                        </div>
                        <div class="bankDetails__wrapper-content">
                          <h3>Account Name:</h3>
                          <h4>SavingsBox Wallet</h4>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </template>
      <template v-else>
        <div class="right-drawer-title mb-4">
          <h1 class="">Fund Wallet</h1>
          <p class="mb-0">Set amount you want to fund wallet</p>
        </div>
        <div class="col-12 pt-0">
          <label for="exampleFormControlInput1" class="form-label label-design"
            >Enter Amount</label
          >
          <div
            style="
              box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
              border-radius: 8px;
            "
            class="input-group mb-3"
          >
            <label
              style="background-color: #fff4fa"
              for="fundsInput"
              class="input-group-text input-design"
            >
              <!-- ₦ -->
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
                />
              </svg>
            </label>
            <input
              id="fundsInput"
              type="text"
              class="form-control input-design"
              aria-label="Amount (to the nearest naira)"
            />
          </div>
        </div>
        <div class="col-12" style="margin-top: 100px">
          <button
            class="btn btn-primary btn-design"
            @click.prevent="stepInfo.step = 3"
          >
            Fund Now
          </button>
        </div>
      </template>
    </section>
    <section v-if="stepInfo.step == 3">
      <div class="successActionWrapper">
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.25 41.4375L36.5625 48.75L48.75 31.6875M68.25 39C68.25 42.8412 67.4934 46.6447 66.0235 50.1935C64.5535 53.7423 62.399 56.9668 59.6829 59.6829C56.9668 62.399 53.7423 64.5535 50.1935 66.0235C46.6447 67.4934 42.8412 68.25 39 68.25C35.1588 68.25 31.3553 67.4934 27.8065 66.0235C24.2577 64.5535 21.0332 62.399 18.3171 59.6829C15.601 56.9668 13.4465 53.7423 11.9765 50.1935C10.5066 46.6447 9.75 42.8412 9.75 39C9.75 31.2424 12.8317 23.8026 18.3171 18.3171C23.8026 12.8317 31.2424 9.75 39 9.75C46.7576 9.75 54.1974 12.8317 59.6829 18.3171C65.1683 23.8026 68.25 31.2424 68.25 39Z"
            stroke="#61CA61"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h3>Payment Successful!</h3>
        <p>
          Congratulations, You have successfully funded your savingsbox wallet.
        </p>
        <span class="actionTag">Return to Dashboard</span>
      </div>
    </section>
    <!-- <RightDrawer ref="rightDraw" :showDrawer="fundingOption == 'va'" @closeDrawer="fundingOption = null">

        </RightDrawer>
        <RightDrawer ref="rightDraw" :showDrawer="fundingOption == 'paystack' || fundingOption == 'flutterwave'"
            @closeDrawer="fundingOption = null">

        </RightDrawer> -->
    <v-snackbar v-model="snackbar" :timeout="timeout">
      Account number copied!

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>
<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
export default {
  components: {
    RightDrawer,
  },
  data() {
    return {
      selectedFruits: null,
      showMenu: false,
      snackbar: false,
      timeout: 2000,
      stepInfo: {
        fundingOption: null,
        step: 1,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.col-12 {
  padding-right: 0;
  .btn-design {
    height: 5rem;
    border-radius: 8px;
    background-color: var(--primary-color);
    font-weight: 600;
    font-size: 1.8rem;
  }
}
div.funding-source {
  div.fund-option {
    padding: 1.1rem 1.9rem;
    border-radius: var(--normal-radius);
    border: 1px solid #ede0e0;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: var(--primary-color);
      transition: all 0.2s ease-in-out;
    }

    div.option-text {
      color: rgb(16, 9, 1);
      flex-grow: 1;

      h3,
      p {
        margin: 0px;
        padding: 0px;
        font-size: 1.4rem;
        color: #666b70;
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 5px;
        svg {
          cursor: pointer;
          path {
            fill: #999c9f;
            transition: all 0.2s ease-in-out;
          }
          &:hover {
            path {
              fill: var(--primary-color);
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
}

.fund-with-va {
  border: 1px solid #ede0e0;
  border-radius: var(--normal-radius);
  padding: 1.4rem;

  .copy-icon {
    cursor: pointer;
    font-size: 1.4rem;

    &:hover {
      color: var(--primary-color);
    }
  }

  .theme--light.v-data-table
    > .v-data-table__wrapper
    > table
    > tbody
    > tr:not(:last-child)
    > td:not(.v-data-table__mobile-row) {
    border: none;
  }

  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    // font-size: 1.4rem;
    // font-weight: 400;
    // color: #000831;
    // height: 2.3rem;
    // padding: 0.5rem 0rem;
  }
}

table {
  tbody {
    tr {
      td {
        padding: 0 !important;
        .bankDetails {
          background: #fafbff;
          border: 1px solid #ede0e0;
          border-radius: 8px;
          width: 100%;
          margin-bottom: 13px;
          display: flex;
          align-items: flex-start;
          grid-gap: 21px;
          padding: 15px 21px;
          min-height: 11.6rem;
          span.countingNo {
            width: 3.2rem;
            height: 3.2rem;
            padding: 0.5rem;
            border-radius: 50%;
            background-color: #fff4fa;
            text-align: center;
            display: inline-block;
          }
          .bankDetails__wrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            row-gap: 5px;
            width: calc(100% - 53px);
            .bankDetails__wrapper-content {
              display: flex;
              align-items: center;
              width: 100%;
              column-gap: 15px;
              h3 {
                font-weight: 400;
                font-size: 1.5rem;
                color: #666b70;
                width: calc(43% - 15px);
              }
              h4 {
                font-weight: 500;
                font-size: 1.5rem;
                color: #333940;
              }
            }
          }
        }
      }
      &:hover {
        background: transparent !important;
      }
    }
  }
}
</style>