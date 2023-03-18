<template>
  <div class="row">
    <!-- drawer -->
    <v-window v-model="stepInfo.step" direction="vertical">
      <!-- step 1 -->
      <v-window-item :value="1">
        <section v-if="stepInfo.step == 1">
          <div class="right-drawer-title">
            <h1 class="">Collateral Based Loan</h1>
          </div>
          <div class="loan-details-description">
            <div
              class="collateral-type"
              @click="stepInfo = { step: 2, collateralType: 'car' }"
            >
              <div class="">
                <h3>Vehicle for cash</h3>
                <p>
                  This loan is only available to people in Lagos and Abuja. The
                  user will drop their car documents after profiling. The tenure
                  of loan ranges from 1 to 3 months at at 8%.
                </p>
              </div>
              <div class="loan-type-direction">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div
              class="collateral-type"
              @click="stepInfo = { step: 2, collateralType: 'landedProperty' }"
            >
              <div class="">
                <h3>Landed property for cash</h3>
                <p>
                  This loan is available to very one in Nigeria that have landed
                  property they want to drop as collateral for a loan. The
                  tenure of loan ranges from 1 to 3 months at 8%
                </p>
              </div>
              <div class="loan-type-direction">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div
              class="collateral-type"
              @click="stepInfo = { step: 2, collateralType: 'machinery' }"
            >
              <div class="">
                <h3>Plant and Machineries</h3>
                <p>
                  This loan is available to very one in Nigeria that have
                  production and processing lines they want to drop as
                  collateral for a loan. The tenure of loan ranges from 1 to 3
                  months at 8%
                </p>
              </div>
              <div class="loan-type-direction">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </section>
      </v-window-item>
      <!-- step 2 -->
      <v-window-item :value="2">
        <section v-if="stepInfo.step == 2" class="">
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

          <BioDataFields addressType="Business" />

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="stepInfo.step = ++stepInfo.step"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>
      <!-- step 3 -->
      <v-window-item :value="3">
        <section v-if="stepInfo.step == 3" class="">
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

          <CarLoanDocFields v-if="stepInfo.collateralType == 'car'" />
          <LandedPropertyLoanDocFields
            :collateralType="stepInfo.collateralType"
            v-if="
              stepInfo.collateralType == 'landedProperty' ||
              stepInfo.collateralType == 'machinery'
            "
          />

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="stepInfo.step = ++stepInfo.step"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>
      <!-- step 4 -->
      <v-window-item :value="4">
        <section v-if="stepInfo.step == 4" class="">
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

          <div class="right-drawer-title">
            <h1>Loan Application</h1>
            <p>Bind a Credit/Debit Card</p>
          </div>

          <FundingSource />

          <div class="col-12" style="margin-top: 100px">
            <button
              class="btn btn-primary btn-design"
              @click.prevent="stepInfo.step = ++stepInfo.step"
            >
              Continue
            </button>
          </div>
        </section>
      </v-window-item>
      <!-- step 5 -->
      <v-window-item :value="5">
        <section v-if="stepInfo.step == 5" class="">
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

          <div class="right-drawer-title">
            <h1>Loan Summary</h1>
            <p>Car for Cash loan</p>
          </div>
          <!-- uploaded files summary -->
          <UploadedFilesSummary
            :uploadedFiles="uploadedFiles"
          ></UploadedFilesSummary>

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
              @click.prevent="stepInfo.step = ++stepInfo.step"
            >
              Apply
            </button>
          </div>
        </section>
      </v-window-item>
      <!-- step 6 -->
      <v-window-item :value="6">
        <section v-if="stepInfo.step == 6" class="">
          <SuccessScreen />
        </section>
      </v-window-item>
      <!-- <div style="margin-top: 67px;">2
        <nuxt-link to="/auth/activate-2fa" class="btn btn-primary btn-design">Login</nuxt-link>
      </div> -->
    </v-window>
  </div>
</template>

<script lang="js">
import RightDrawer from "@/components/assets/RightDrawer.vue";
import BioDataFields from "@/components/loan/form/BioDataFields.vue"
import FundingSource from "~/components/payment/FundingSource.vue";
import SuccessScreen from "@/components/loan/form/SuccessScreen.vue"
import CarLoanDocFields from "../form/CarLoanDocFields.vue";
import LandedPropertyLoanDocFields from "@/components/loan/form/LandedPropertyLoanDocFields.vue";
import PMLoanDocFields from "@/components/loan/form/PMLoanDocFields.vue";
import UploadedFilesSummary from "@/components/loan/UploadedFilesSummary.vue";

export default {
  components: {
    RightDrawer,
    BioDataFields,
    FundingSource,
    SuccessScreen,
    CarLoanDocFields,
    LandedPropertyLoanDocFields,
    PMLoanDocFields,
    UploadedFilesSummary,
  },
  data() {
    return {
      showDrawer: false,
      stepInfo: { step: 1, collateralType: null },
      uploadedFiles: [
        { name: 'Proof of ownership', status: true },
        { name: 'Customs documents', status: true },
        { name: 'Bank Statement', status: true },
        { name: 'Passport Photograph', status: true },
      ],
    };
  },
  methods: {
    apply() {
      alert("done");
    }
  },
  // page properties go here
};
</script>

<style lang="scss" scoped>
.collateral-type {
  padding: 1.4rem 2.6rem;
  background-color: #fffafa;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  display: flex;
  border: 1px solid #cbcbcb;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 2px rgba(128, 128, 128, 0.527);
    border: 1px solid var(--primary-color);

    h3 {
      color: var(--primary-color);
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
  }
}

.loan-type {
  padding: 32px;
  background-color: rgba(233, 251, 233, 1);
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
</style>
