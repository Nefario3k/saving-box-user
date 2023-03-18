<template>
  <v-main>
    <section class="dashboard-title">
      <h1>{{ loanTitle }}</h1>
      <p>Access up to 5 Million Naira Loan</p>
    </section>

    <section class="dashboard-content">
      <div class="loanTypeRow row">
        <div class="col-12 col-md-7 pt-0">
          <!-- tab -->
          <div class="autobox-card-section">
            <v-tabs
              :show-arrows="true"
              center-active
              v-model="statusTab"
              background-color="transparent"
              color="basil"
              grow
              class="v-tabs-styles"
            >
              <v-tab :ripple="false"> Active Loans </v-tab>

              <v-tab :ripple="false"> Pending Approval </v-tab>

              <v-tab :ripple="false"> Repaid Loans </v-tab>
            </v-tabs>

            <v-tabs-items v-model="statusTab" class="v-tabs-items-styles">
              <v-tab-item>
                <LoanCard v-for="n in 3" :key="n" :loan-type="loanTitle" />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <AutoboxEmptyState />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <AutoboxEmptyState />
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>

        <div class="col-12 pt-0 col-md-5">
          <!-- create new auto savings btn -->
          <div class="text-right mb-5 d-none d-md-block">
            <a
              href=""
              @click.prevent="
                showCretateSavingsDrawer = !showCretateSavingsDrawer
              "
              class="btn btn-primary create-savings-btn"
              >New Loan</a
            >
          </div>
          <div class="invoice-card">
            <h1 class="invoice-card-title">Recent</h1>

            <v-tabs
              center-active
              :show-arrows="true"
              v-model="paymentTab"
              background-color="transparent"
              color="basil"
              grow
              class="v-tabs-styles"
            >
              <v-tab :ripple="false"> Upcoming </v-tab>

              <v-tab :ripple="false"> Credit </v-tab>

              <v-tab :ripple="false"> Debit </v-tab>
            </v-tabs>

            <v-tabs-items
              v-model="paymentTab"
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
      </div>
    </section>
  </v-main>
</template>

<script>
import CollateralBasedLoan from "@/components/loan/loan-types/CollateralBasedLoan.vue";
import IPPIS from "@/components/loan/loan-types/IPPIS.vue";
import SalaryEarnersLoan from "@/components/loan/loan-types/SalaryEarnersLoan.vue";
import SMELoan from "@/components/loan/loan-types/SMELoan.vue";
import LoanCard from "~/components/loan/LoanCard.vue";
import AutoboxEmptyState from "@/components/savings/autobox/EmptyState.vue";
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
import RightDrawer from "~/components/assets/RightDrawer.vue";

export default {
  layout: "dashboard",
  components: {
    CollateralBasedLoan,
    IPPIS,
    SalaryEarnersLoan,
    SMELoan,
    LoanCard,
    AutoboxEmptyState,
    InvoiceCard,
    InvoiceEmptyState,
    RightDrawer,
  },
  data() {
    return {
      statusTab: null,
      paymentTab: null,
      action: null,
      loanType: "",
      loanTitle: "",
    };
  },
  methods: {
    setLoanTitle() {
      if (!this.loanType) return;
      let firstPart = this.loanType.split("-")[0];
      this.loanTitle = this.loanType.replace("-", " ");
      if (firstPart.length < 6) {
        this.loanTitle = this.loanTitle.replace(
          firstPart,
          firstPart.toUpperCase()
        );
      }
    },
  },
  mounted() {
    this.loanType = this.$route.params.loanType;
    this.setLoanTitle();
  },
};
</script>

<style lang="scss" scoped>
section.dashboard-title {
  padding: 20px 25px 0;
}
section.dashboard-content {
  background: transparent;
  padding: 0 0 20px;
  & > .row {
    margin: 0 25px;
    border-radius: 16px;
    padding: 30px 40px;
    background-color: #fff;
  }
}
/* page style */

.dashboard-title h1 {
  text-transform: capitalize;
}

.create-savings-btn {
  padding: 12px;
  color: white !important;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  max-width: 18.9rem;
  margin-left: auto;
  justify-self: flex-end;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 15px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: darken($color: #4169e1, $amount: 10%) !important;
    box-shadow: 1px 1px 2px gray;
    transition: all 0.2s ease-in-out;
  }
}

.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
}
.autobox-card-section {
  //   padding-right: 0px;
}
</style>
