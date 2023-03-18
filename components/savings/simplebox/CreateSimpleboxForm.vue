<template>
  <div class="row">
    <v-window v-model="formStep" direction="vertical">
      <!-- step one form -->
      <v-window-item :value="1">
        <section v-if="formStep == 1">
          <div class="back-btn"></div>

          <div class="mb-3 right-drawer-title">
            <h1>Create SimpleBox Plan</h1>
            <p>Get double the amount saved for 6-11 months</p>
          </div>
          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Plan Title</label
            >
            <input
              type="text"
              class="form-control input-design dark__input"
              id="exampleFormControlInput1"
              placeholder="Plan name"
            />
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Description (Optional)</label
            >
            <textarea
              rows="4"
              class="form-control input-design dark__input"
              id="exampleFormControlInput1"
              placeholder="Describe your plan"
              style="height: 11.6rem; resize: none"
            >
            </textarea>
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Period (6 or 11 months)</label
            >
            <select class="form-select input-design dark__input">
              <option value="">6 Months</option>
              <option value="">11 Months</option>
            </select>
          </div>

          <div class="col-12">
            <label for="amountInput" class="form-label label-design"
              >Enter Amount</label
            >
            <div class="input-group mb-3">
              <label class="input-group-text input-design dark__input">
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
                id="amountInput"
                type="text"
                class="form-control input-design dark__input"
                aria-label="Amount (to the nearest dollar)"
              />
              <label
                for="amountInput"
                class="input-group-text input-design secondLabel dark__input"
                style="
                  font-weight: 400px;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  text-transform: capitalize;
                "
                >min of 10000 Naira per month</label
              >
            </div>
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Start Date</label
            >
            <input
              type="date"
              class="form-control input-design"
              id="exampleFormControlInput1"
              placeholder="Start Date"
            />
          </div>

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="formStep = 2"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>

      <!-- step 2 form -->
      <v-window-item :value="2">
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

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Funding Source (Optional)</label
            >
            <v-checkbox
              class="font-weight-medium"
              v-model="checkbox"
              color="blue"
              :label="` Fund From SavingBox Wallet`"
            ></v-checkbox>
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Payment Method (Required)</label
            >
          </div>

          <!-- <div class="col-12">
            <a href="" class="btn btn-primary bind-new-card-btn">
              <i class="fa-solid fa-plus mr-3"></i>
              Bind New Card</a
            >
          </div> -->

          <div class="col-12">
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

          <div class="right-drawer-title">
            <h1>Plan Summary</h1>
            <p>Review your SimpleBox Plan</p>
          </div>

          <div class="autobox-summary-box">
            <div class="row">
              <div class="col-6">
                <div class="summary-item">
                  <h4>Plan Title</h4>
                  <p>HouseHold Items</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Day of the Month</h4>
                  <p>22nd</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>SimpleBox Amount</h4>
                  <p>₦100.00</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Period</h4>
                  <p>6 Months</p>
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
                  <h4>Interest Rate</h4>
                  <p>50 %</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12" style="margin-top: 130px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="formStep = 4"
            >
              Finish Creating Plan
            </button>
          </div>
        </section>
      </v-window-item>

      <v-window-item :value="4">
        <section v-if="formStep == 4">
          <div
            class="text-center"
            style="margin-top: 130px; margin-bottom: 30px"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 32.4375L27.5625 39.75L39.75 22.6875M59.25 30C59.25 33.8412 58.4934 37.6447 57.0235 41.1935C55.5535 44.7423 53.399 47.9668 50.6829 50.6829C47.9668 53.399 44.7423 55.5535 41.1935 57.0235C37.6447 58.4934 33.8412 59.25 30 59.25C26.1588 59.25 22.3553 58.4934 18.8065 57.0235C15.2577 55.5535 12.0332 53.399 9.31713 50.6829C6.60101 47.9668 4.44647 44.7423 2.97652 41.1935C1.50657 37.6447 0.75 33.8412 0.75 30C0.75 22.2424 3.83169 14.8026 9.31713 9.31713C14.8026 3.83169 22.2424 0.75 30 0.75C37.7576 0.75 45.1974 3.83169 50.6829 9.31713C56.1683 14.8026 59.25 22.2424 59.25 30Z"
                stroke="#61CA61"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="create-autobox-form-title text-center">
            <h1 class="mb-2" style="color: var(--primary-color)">
              Plan Created!
            </h1>
            <p style="width: 80%; margin: 0 auto">
              Your Auto Savings plan has been created successfully. Continue
              saving.
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
              >View My Savings</a
            >
          </div>
        </section>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      formStep: 1,
      selectedFruits: '',
      showMenu: false,
    };
  },
};
</script>

<style scoped>
.back-btn {
  margin-bottom: 16px;
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

.back-btn a {
  text-decoration: none;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(102, 107, 112, 1);
}

.create-autobox-form-title h1 {
  font-weight: 600;
  font-size: 25px;
  color: rgba(0, 8, 16, 1);
  margin-bottom: 41px;
}

.create-autobox-form-title p {
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 8, 16, 1);
  margin-bottom: 16px;
}

.col-6 {
  padding-left: 0;
}
p {
  margin-bottom: 0;
}

.summary-item {
  margin-bottom: 0;
}
</style>
