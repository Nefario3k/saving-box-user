<template>
  <div class="row">
    <!-- step one form -->
    <section v-if="formStep == 1">
      <div class="back-btn"></div>

      <div class="create-autobox-form-title">
        <h1>Create New AutoBox</h1>
        <p>Autobox Plan at 10% interest per Annum</p>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Plan Title</label>
        <input type="text" class="form-control input-design" id="exampleFormControlInput1" placeholder="Plan name" />
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Description</label>
        <textarea rows="4" class="form-control input-design" id="exampleFormControlInput1"
          placeholder="Describe your plan" style="height: 150px">
        </textarea>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Frequency</label>
        <select class="form-select input-design">
          <option value="">Hello</option>
        </select>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Period (How Long?)</label>
        <select class="form-select input-design">
          <option value="">Hello</option>
        </select>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Amount (Instalment)</label>
        <div class="input-group mb-3">
          <span class="input-group-text input-design">₦</span>
          <input type="text" class="form-control input-design" aria-label="Amount (to the nearest dollar)" />
          <span class="input-group-text input-design" style="
              font-weight: 400px;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
            ">Per Week</span>
        </div>
      </div>

      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="formStep = 2">
          Continue
        </button>
      </div>
    </section>

    <!-- step 2 form -->
    <section v-if="formStep == 2">
      <div class="back-btn">
        <a href="" @click.prevent="formStep = 1"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Funding Source (Optional)</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
          <label class="form-check-label" for="flexCheckIndeterminate">
            Fund From SavingBox Wallet
          </label>
        </div>
      </div>

      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">Payment Method (Required)</label>
      </div>

      <div class="col-12">
        <a href="" class="btn btn-primary bind-new-card-btn">
          <i class="fa-solid fa-plus mr-3"></i>
          Bind New Card</a>
      </div>

      <div class="col-12">
        <v-select v-model="selectedFruits" :items="['1234', '5678', '9876', '4534', '5476']"
          label="Select a payment method" outlined>
          <!-- style each item -->
          <template #item="{ item }">
            <div class="payment-method-item">
              <span class="payment-method-item-date">03/24</span>

              <span class="payment-method-item-card">
                5336 5899 ****** {{ item }}
              </span>
            </div>
          </template>

          <!-- append item design -->
          <template v-slot:append-item>
            <div class="bind-new-card" style="margin-top: 15px; margin-bottom: 15px">
              <a href="" style="
                  text-decoration: none;
                  margin-left: 15px;
                  font-size: 16px;
                  font-weight: 500;
                  color: black;
                "><i class="fa-solid fa-plus"></i> Bind New Card</a>
            </div>
          </template>
        </v-select>
      </div>

      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="formStep = 3">
          Continue
        </button>
      </div>
    </section>

    <section v-if="formStep == 3">
      <div class="back-btn">
        <a href="" @click.prevent="formStep = 2"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="create-autobox-form-title">
        <h1>Plan Summary</h1>
      </div>

      <div class="autobox-summary-box">
        <div class="row">
          <div class="col-12">
            <div class="summary-item">
              <h4>Plane name</h4>
              <p>savings for my university</p>
            </div>
          </div>

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
        <button class="btn btn-primary btn-design" @click.prevent="formStep = 4">
          Finish Creating Plan
        </button>
      </div>
    </section>

    <section v-if="formStep == 4">
      <div class="back-btn">
        <a href="" @click.prevent="formStep = 3"><i class="fa-solid fa-arrow-left"></i> Back</a>
      </div>

      <div class="text-center" style="margin-top: 130px; margin-bottom: 30px">
        <img src="/images/icons/success-check.png" alt="" />
      </div>

      <div class="create-autobox-form-title text-center">
        <h1>Plan Created!</h1>
        <p>
          Your Auto Savings plan has been created successfully. Continue saving.
        </p>
      </div>

      <div class="text-center" style="margin-top: 20px">
        <a href="" style="
            text-decoration: none;
            color: #4169e1;
            font-weight: 500;
            font-size: 18px;
          ">View New Savings</a>
      </div>
    </section>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      formStep: 1,
      selectedFruits: ''
    };
  },
};
</script>

<style scoped>
.back-btn {
  margin-bottom: 16px;
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
</style>
