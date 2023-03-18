<template>
  <div class="row">
    <!-- step one form -->
    <section v-if="formStep == 1">
      <div class="back-btn"></div>

      <div class="mt-4 right-drawer-title">
        <h1>Create New Targetbox</h1>
        <p>Get double the amount saved for 6-11 months</p>
      </div>
      <div class="col-12">
        <label for="targetTitle" class="form-label label-design"
          >Target Title</label
        >
        <input
          type="text"
          class="form-control input-design dark__input"
          id="targetTitle"
          placeholder="Target Title"
        />
      </div>
      <div class="col-12">
        <label for="description" class="form-label label-design"
          >Description</label
        >
        <textarea
          rows="4"
          class="form-control input-design dark__input"
          id="description"
          placeholder="Describe your plan"
          style="height: 11.6rem; resize: none"
        >
        </textarea>
      </div>

      <div class="col-12">
        <label for="targetAmount" class="form-label label-design"
          >Target Amount</label
        >
        <input
          id="targetAmount"
          placeholder="Enter Amount (NGN)"
          type="text"
          class="form-control input-design dark__input"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Frequency</label
        >
        <select
          v-model="savingForm.frequency"
          @change="setPayInterval()"
          class="form-select input-design dark__input"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Period ({{
            savingForm.frequency == null && interval == null
              ? "How Long?"
              : `How many ${interval}`
          }})</label
        >
        <div class="input-group">
          <input
            id="periodInput"
            v-model="savingForm.period"
            type="text"
            class="form-control input-design dark__input lefting"
            aria-label="Amount (to the nearest dollar)"
          />
          <label
            for="periodInput"
            class="input-group-text input-design dark__input secondLabel"
            style="
              font-weight: 400px;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              text-transform: capitalize;
            "
            >{{ interval }}</label
          >
        </div>
      </div>
      <div class="col-12">
        <label for="amountInput" class="form-label label-design"
          >Amount ({{ savingForm.frequency }} Instalment)</label
        >
        <div class="input-group">
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
            class="input-group-text input-design dark__input secondLabel"
            style="
              font-weight: 400px;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              text-transform: capitalize;
            "
            >Per {{ interval }}</label
          >
        </div>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Start Date</label
        >
        <input
          type="date"
          class="form-control input-design"
          id="exampleFormControlInput1"
          placeholder="Start Date"
        />
      </div>

      <div class="col-12" style="margin-top: 130px">
        <button
          class="btn btn-primary btn-design"
          @click.prevent="formStep = 2"
        >
          Continue
        </button>
      </div>
    </section>

    <!-- step 2 form -->
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
      <div class="mt-4 right-drawer-title">
        <h1>Create New Targetbox</h1>
        <p>Get double the amount saved for 6-11 months</p>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
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
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Payment Method (Required)</label
        >
      </div>

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

      <div class="col-12" style="margin-top: 130px">
        <button
          class="btn btn-primary btn-design"
          @click.prevent="formStep = 3"
        >
          Continue
        </button>
      </div>
    </section>

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
        <p>Review your TargetBox Plan</p>
      </div>

      <div class="autobox-summary-box">
        <div class="row">
          <div class="col-6">
            <div class="summary-item">
              <h4>Plan Title</h4>
              <p>Housing & Accomodation</p>
            </div>
          </div>

          <div class="col-6">
            <div class="summary-item">
              <h4>Start Date</h4>
              <p>22 Aug. 2022</p>
            </div>
          </div>

          <div class="col-6">
            <div class="summary-item">
              <h4>Target Amount</h4>
              <p>₦100,000</p>
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
              <h4>Interest Rate</h4>
              <p>2.6 %</p>
            </div>
          </div>

          <div class="col-6">
            <div class="summary-item">
              <h4>Frequency</h4>
              <p>Daily</p>
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
              <h4>Period</h4>
              <p>6 Months</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12" style="margin-top: 100px">
        <button
          class="btn btn-primary btn-design"
          @click.prevent="formStep = 4"
        >
          Finish Creating Plan
        </button>
      </div>
    </section>

    <section v-if="formStep == 4">
      <div class="text-center" style="margin-top: 130px; margin-bottom: 30px">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="create-autobox-form-title text-center">
        <h1 class="mb-5">Plan Created!</h1>
        <p style="width: 80%; margin: 0 auto">
          Your Auto Savings plan has been created successfully. Continue saving.
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
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      formStep: 1,
      selectedFruits: '',
       interval: 'Days',
       showMenu: false,
      checkbox: false,
      savingForm: {
        title: '',
        description: '',
        frequency: 'Daily',
        period: '',
        amount: ''
      }
    };
  },
    methods: {
    setPayInterval() {
      // alert(this.savingForm.period);
      switch (this.savingForm.frequency) {
        case 'Daily':
          this.interval = 'days';
          break;
        case 'Weekly':
          this.interval = 'weeks';
          break;
        case 'Monthly':
          this.interval = 'months';
          break;
        case 'Yearly':
          this.interval = 'years';
          break;
        default:
          this.interval = null;
      }
    }
  },
};
</script>

<style scoped>
.back-btn {
  margin-bottom: 16px;
}
.col-12 {
  padding: 0;
  padding-bottom: 10px;
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

.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
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
