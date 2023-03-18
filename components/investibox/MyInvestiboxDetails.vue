<template>
  <div class="investibox-details-card">
    <!-- step 1 investibox details -->
    <section v-if="step == 1">
      <div class="right-drawer-title">
        <h1>Poultry Farm, Wuye Abuja</h1>
        <p>By Thrive Agric Abuja</p>
      </div>

      <div class="investibox-image-holder" @click="showDrawer = true"
        style="background-image: url(/images/temporary/investibox-image.jpg)"></div>

      <div class="investibox-deccription">
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci nisi tortor malesuada
          dictum semper vel risus egestas nec. Sed senectus orci nibh sit amet
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

      <div v-if="sellingInvestibox" class="col-12 mt-8">
        <label for="exampleFormControlInput1" class="form-label label-design">Selling Amount</label>
        <div class="input-group mb-3">
          <span class="input-group-text input-design">₦</span>
          <input type="text" class="form-control input-design" aria-label="Amount (to the nearest naira)" />
          <span class="input-group-text input-design" style="
                font-weight: 400px;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
              ">Total Amount</span>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-6" :class="{ 'col-12': liquidatingInvestibox }">
          <button v-if="sellingInvestibox == false" @click="liquidatingInvestibox = true"
            class="btn btn-primary btn-outline-design">
            Liquidate
          </button>
        </div>
        <div class="col-6" :class="{ 'col-12': sellingInvestibox }">
          <button v-if="liquidatingInvestibox == false && sellingInvestibox == false" @click="sellingInvestibox = true"
            class="btn btn-primary btn-design">
            Sell Off
          </button>
          <button v-if="liquidatingInvestibox == false && sellingInvestibox == true" @click="step = 2"
            class="btn btn-primary btn-design">
            Sell off Investment
          </button>
        </div>
      </div>
    </section>
    <section v-if="step == 2">

      <div class="text-center" style="margin-top: 130px; margin-bottom: 30px">
        <img src="/images/icons/success-check.png" alt="" />
      </div>

      <div class="create-autobox-form-title text-center">
        <h1>Investment Listed For Sale</h1>
        <p>
          Your Successfully listed your investment on the Investibox marketplace.
        </p>
      </div>

      <div class="text-center" style="margin-top: 20px">
        <a href="" style="text-decoration: none;
                  color: #4169e1;
                  font-weight: 500;
                  font-size: 18px;
                ">View on Marketplace</a>
      </div>
    </section>

  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      sellingInvestibox: false,
      liquidatingInvestibox: false,
      step: 1,
    };
  },
  // page properties go here
};
</script>

<style scoped>
.alert {
  color: red;
  border: 1px solid red;
}

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

.investibox-stat-item h1 {
  color: rgba(0, 0, 0, 1);
  font-weight: 500px;
  font-size: 14px;
}

.investibox-stat-item p {
  color: rgba(0, 0, 0, 1);
  font-weight: 400px;
  font-size: 10px;
  margin: 0px;
}
</style>
