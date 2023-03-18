<template>
  <div class="row">
    <!-- step one form -->
    <v-window v-model="formStep" direction="vertical">
      <v-window-item :value="1">
        <section v-if="formStep == 1">
          <div class="back-btn"></div>
          <div class="mb-0 right-drawer-title">
            <h1>Create New AutoBox</h1>
            <p>Autobox Plan at 10% interest per Annum</p>
          </div>
          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Plan Title</label
            >
            <input
              type="text"
              class="form-control input-design"
              id="exampleFormControlInput1"
              placeholder="Plan name"
            />
          </div>
          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Description</label
            >
            <textarea
              rows="4"
              class="form-control input-design"
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
              >Frequency</label
            >
            <select
              v-model="savingForm.frequency"
              @change="setPayInterval()"
              class="form-select input-design"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Period ({{
                savingForm.frequency == null && interval == null
                  ? "How Long?"
                  : `How many ${interval}`
              }})</label
            >
            <div class="input-group mb-3">
              <input
                id="periodInput"
                v-model="savingForm.period"
                type="text"
                class="form-control input-design lefting"
                aria-label="Amount (to the nearest dollar)"
              />
              <label
                for="periodInput"
                class="input-group-text input-design secondLabel"
                style="
                  font-weight: 400px;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  text-transform: capitalize;
                  background-color: #fff4fa;
                "
                >{{ interval }}</label
              >
            </div>
          </div>
          <div class="col-12">
            <label for="amountInput" class="form-label label-design"
              >Amount ({{ savingForm.frequency }} Instalment)</label
            >
            <div class="input-group mb-3">
              <label
                style="background-color: #fff4fa"
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
                id="amountInput"
                type="text"
                class="form-control input-design"
                aria-label="Amount (to the nearest dollar)"
              />
              <label
                for="amountInput"
                class="input-group-text input-design secondLabel"
                style="
                  font-weight: 400px;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  text-transform: capitalize;
                  background-color: #fff4fa;
                "
                >Per {{ interval }}</label
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
          <div class="mb-5 right-drawer-title">
            <h1>Create New AutoBox</h1>
            <p>Bind a Card</p>
          </div>
          <FundingSource />
          <div class="col-12">
            <p>
              <span v-if="bindError" class="red--text"
                >Make sure you bind a credit card before proceeding</span
              >
              <span @click="bindError = !bindError">trigger</span>
            </p>
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
          <div class="mb-4 right-drawer-title">
            <h1>Plan Summary</h1>
            <p>Review your Autobox Plan</p>
          </div>
          <div class="autobox-summary-box">
            <div class="row">
              <div class="col-6">
                <div class="summary-item">
                  <h4>Amount per Week</h4>
                  <p>₦1000</p>
                </div>
              </div>
              <div class="col-6">
                <div class="summary-item">
                  <h4>Started Date</h4>
                  <p>22 Aug. 2022</p>
                </div>
              </div>
              <div class="col-6">
                <div class="summary-item">
                  <h4>Target Due Amount</h4>
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
                  <h4>Funding Source</h4>
                  <p>FBN - 30568999380</p>
                </div>
              </div>
              <div class="col-6">
                <div class="summary-item">
                  <h4>Frequency</h4>
                  <p>Weekly</p>
                </div>
              </div>
              <div class="col-6">
                <div class="summary-item">
                  <h4>Interest Rate</h4>
                  <p>10 %</p>
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
      </v-window-item>
      <v-window-item :value="4">
        <section v-if="formStep == 4">
          <!-- <div class="back-btn">
            <a href="" @click.prevent="formStep = 3"
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
          </div> -->
          <div
            class="text-center"
            style="margin-top: 130px; margin-bottom: 30px"
          >
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
            <h1 class="mb-0">Plan Created!</h1>
            <p>
              Your Auto Savings plan has been created successfully. Continue
              saving.
            </p>
          </div>
          <div class="text-center" style="margin-top: 20px">
            <a
              href=""
              style="
                text-decoration: none;
                color: #4169e1;
                font-weight: 500;
                font-size: 18px;
              "
              >View New Savings</a
            >
          </div>
        </section>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="js">
import FundingSource from '~/components/payment/FundingSource.vue';

export default {
  components: { FundingSource },
  data() {
    return {
      formStep: 1,
      selectedFruits: '',
      bindError: false,
      interval: 'Days',
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
  mounted() {
  },
};
</script>

<style scoped>
.create-autobox-form-title h1 {
  font-weight: 600;
  font-size: 25px;
  color: rgba(0, 8, 16, 1);
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

.col-6 {
  padding-left: 0;
}

.create-autobox-form-title p {
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 8, 16, 1);
  margin: 0 auto 32px;
  width: 80%;
}
</style>
