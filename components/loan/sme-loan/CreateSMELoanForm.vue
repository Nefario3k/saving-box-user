<template>
  <div class="row">
    <v-window v-model="formStep" direction="vertical">
      <!-- step one form -->
      <v-window-item :value="1">
        <section v-if="formStep == 1">
          <div class="back-btn"></div>

          <div class="right-drawer-title">
            <h1>Loan Application</h1>
            <p>Enter required information below</p>
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Reason for Loan</label
            >
            <input
              type="text"
              class="form-control input-design dark__input"
              id="exampleFormControlInput1"
              placeholder="Reason for Loan"
            />
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control input-design dark__input"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Business Address</label
            >
            <input
              type="text"
              placeholder="Business Address"
              class="form-control input-design dark__input"
              aria-label="Business Address"
            />
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Enter Amount</label
            >
            <div
              style="
                box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
                border-radius: 8px;
              "
              class="input-group"
            >
              <label
                for="loanAmount"
                class="input-group-text input-design dark__input"
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
                id="loanAmount"
                type="text"
                class="form-control input-design dark__input"
                aria-label="Amount (to the nearest naira)"
              />
              <label
                for="loanAmount"
                class="input-group-text input-design dark__input secondLabel"
                style="
                  font-weight: 400px;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  text-transform: capitalize;
                "
                >Max, Amount ₦100,000</label
              >
            </div>
          </div>

          <div class="col-12">
            <label
              for="exampleFormControlInput1"
              class="form-label label-design"
              >Period (1 to 12 Months)</label
            >
            <select class="form-select input-design dark__input">
              <option value="">1 Month</option>
              <option value="">4 Month</option>
              <option value="">8 Month</option>
              <option value="">12 Month</option>
            </select>
          </div>

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="++formStep"
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
            <h1>Loan Application</h1>
            <p>Upload required document</p>
          </div>

          <SMELoanDocFields />

          <FundingSource />

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="++formStep"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>

      <!-- step 3 form -->
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

          <div class="mb-3 right-drawer-title">
            <h1>Loan Summary</h1>
            <p>Uploaded Files</p>
          </div>

          <!-- uploaded files summary -->
          <uploaded-files-summary
            :uploadedFiles="uploadedFiles"
          ></uploaded-files-summary>

          <div class="autobox-summary-box">
            <div class="row">
              <div class="col-6">
                <div class="summary-item">
                  <h4>Loan Amount</h4>
                  <p>₦1000</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Purpose</h4>
                  <p>Business</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Interest Rate</h4>
                  <p>12%</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Interest Amount</h4>
                  <p>₦20,000</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Period</h4>
                  <p>12 Months</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Repayment Date</h4>
                  <p>22 April. 2023</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Due Amount</h4>
                  <p>₦120,000</p>
                </div>
              </div>

              <div class="col-6">
                <div class="summary-item">
                  <h4>Monthly Repayment</h4>
                  <p>₦12,000</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="++formStep"
            >
              Apply
            </button>
          </div>
        </section>
      </v-window-item>

      <v-window-item :value="4">
        <!-- step 4 form -->
        <section v-if="formStep == 4">
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
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="right-drawer-title text-center">
            <h1>Loan Application Successful</h1>
            <p style="width: 80%; margin: 0 auto !important">
              Your Loan Application was submitted and it is being processed. you
              will be notified when it is approved.
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
              >Back to Home</a
            >
          </div>
        </section>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="js">
import FundingSource from '~/components/payment/FundingSource.vue';
import SMELoanDocFields from '../form/SMELoanDocFields.vue';
import UploadedFilesSummary from '@/components/loan/UploadedFilesSummary.vue';

export default {
  data() {
    return {
      formStep: 1,
      selectedFruits: "",
      uploadedFiles: [
        { name: 'Bank Statement', status: true },
        { name: 'Passport Photograph', status: true },
      ]
    };
  },
  components: { FundingSource, SMELoanDocFields, UploadedFilesSummary }
};
</script>

<style lang="scss" scoped>
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

.autobox-summary-box {
  padding: 18px 30px;
  .summary-item {
    margin-bottom: 0;
  }
}
p {
  margin-bottom: 0;
}
</style>
