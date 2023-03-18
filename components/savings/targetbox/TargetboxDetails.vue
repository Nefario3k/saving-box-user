<template>
  <div class="autobox-details-card">
    <h1 class="autobox-details-title">Children’s Fee Plan</h1>
    <!--  -->
    <AutoboxDetailsCard></AutoboxDetailsCard>

    <div class="autobox-summary-box" style="margin-top: 45px">
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

    <div class="row" style="margin-top: 35px">
      <div class="col-md-6">
        <button class="btn btn-primary btn-design">Edit</button>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary btn-outline-design">Liquidate</button>
      </div>
    </div>

    <div class="" style="margin-top: 35px">
      <v-tabs
        v-model="invoicesTab"
        background-color="transparent"
        color="basil"
        grow
        style="
          border-radius: 8px;
          height: 50px;
          margin-bottom: 20px;
          background-color: rgba(246, 246, 246, 1);
        "
      >
        <v-tab> Pending Invoices </v-tab>

        <v-tab> Overdue </v-tab>

        <v-tab> Paid Invoice </v-tab>
      </v-tabs>

      <v-tabs-items
        v-model="invoicesTab"
        style="
          padding-left: 10px;
          padding-right: 10px;
          min-height: 300px;
          background-color: transparent;
        "
      >
        <v-tab-item>
          <!-- invoice-item -->
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
        </v-tab-item>

        <v-tab-item>
          <!-- empty state -->
          <InvoiceEmptyState />
        </v-tab-item>

        <v-tab-item>
          <!-- empty state -->
          <InvoiceEmptyState />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

 <script lang="js">
 import AutoboxDetailsCard from "@/components/savings/autobox/AutoboxDetailsCard.vue";
 import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
export default {
  components: {
    AutoboxDetailsCard,
    InvoiceCard,
    InvoiceEmptyState
  },
  data() {
    return {
      showSavingsDetails: false,
      invoicesTab: null
    };
  },
  // page properties go here
};
</script>

<style scoped>
.autobox-details-title {
  color: rgba(0, 8, 16, 1);
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 23px;
}

/* tab */
.v-tabs-bar .v-tab:not(.v-tab--active) {
  color: rgba(102, 107, 112, 1) !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  text-transform: capitalize;
}

.v-tab--active {
  background-color: #ffffff;
  margin: 3px 3px 2px 3px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  color: rgba(65, 105, 225, 1) !important;
  text-transform: capitalize;
}

.v-tabs-slider-wrapper {
  display: none;
}

/* tab */
.v-tabs-bar .v-tab:not(.v-tab--active) {
  color: rgba(102, 107, 112, 1) !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  text-transform: capitalize;
}

.v-tab--active {
  background-color: #ffffff;
  margin: 3px 3px 2px 3px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 8, 16, 1) !important;
  text-transform: capitalize;
}

.v-tabs-slider-wrapper {
  display: none;
}
</style>
