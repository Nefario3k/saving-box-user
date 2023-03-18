<template>
  <div>

    <!-- step 1 -->
    <section v-if="stepInfo.step == 1" class="">

      <BioDataFields />


      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="stepInfo.step = ++stepInfo.step">
          Continue
        </button>
      </div>
    </section>
    <!-- step 2 -->
    <section v-if="stepInfo.step == 2" class="">
      <div class="back-btn">
        <a href="" @click.prevent="stepInfo.step = --stepInfo.step"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="right-drawer-title">
        <h1>Loan Application</h1>
        <p>Work information</p>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Employer Name</label>
        <div class="input-group mb-3">
          <input type="text" placeholder="Business Address" class="form-control input-design"
            aria-label="Employer Name" />
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Office address</label>
        <div class="input-group mb-3">
          <input type="text" placeholder="Business Address" class="form-control input-design"
            aria-label="Enter Office Address" />
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Business name</label>
        <div class="input-group mb-3">
          <input type="text" placeholder="Business Address" class="form-control input-design"
            aria-label="Enter Business name" />
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Employer phone number</label>
        <div class="input-group mb-3">
          <input type="text" placeholder="Business Address" class="form-control input-design"
            aria-label="Enter Employer phone number" />
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">
          6 Months Bank Statement
        </label>
        <div class="input-group">
          <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
          <input type="file" class="form-control" id="exampleFormControlInput1" />
        </div>
      </div>

      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="stepInfo.step = ++stepInfo.step">
          Continue
        </button>
      </div>
    </section>
    <!-- step 3 -->
    <section v-if="stepInfo.step == 3" class="">
      <div class="back-btn">
        <a href="" @click.prevent="stepInfo.step = --stepInfo.step"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="right-drawer-title">
        <h1>Loan Application</h1>
        <p>Bind a Credit/Debit Card</p>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">
          Passport photograph
        </label>
        <div class="input-group">
          <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
          <input type="file" class="form-control" id="exampleFormControlInput1" />
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">
          Government-issued ID
        </label>
        <div class="input-group">
          <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
          <input type="file" class="form-control" id="exampleFormControlInput1" />
        </div>
      </div>

      <FundingSource />

      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="stepInfo.step = ++stepInfo.step">
          Continue
        </button>
      </div>
    </section>
    <!-- step 4 -->
    <section v-if="stepInfo.step == 4" class="">
      <div class="back-btn">
        <a href="" @click.prevent="stepInfo.step = --stepInfo.step"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="right-drawer-title">
        <h1>Loan Summary</h1>
        <p>Salary Earners' loan</p>
      </div>

      <UploadedFilesSummary :uploadedFiles="[{ name: '3 Months Bank Statement', status: true }]" />
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
        <button class="btn btn-primary btn-design" @click.prevent="stepInfo.step = ++stepInfo.step">
          Apply
        </button>
      </div>
    </section>
    <!-- step 5-->
    <section v-if="stepInfo.step == 5" class="">
      <SuccessScreen />
    </section>
    <!-- <div style="margin-top: 67px;">2
        <nuxt-link to="/auth/activate-2fa" class="btn btn-primary btn-design">Login</nuxt-link>
      </div> -->
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
import UploadedFilesSummary from "../UploadedFilesSummary.vue";
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
@import url('@/static/css/file-input.css');


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
</style>
