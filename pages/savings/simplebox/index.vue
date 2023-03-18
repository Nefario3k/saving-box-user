<template>
  <v-main>
    <section class="dashboard-title">
      <h1>Simplebox Saving</h1>
    </section>

    <section class="dashboard-content">
      <div class="singleSavingRow row">
        <!-- header  -->
        <div class="col-12">
          <!-- top section  -->
          <div class="row align-center">
            <div class="col-12 col-sm-8">
              <wallet-balance
                text="Total SimpleBox Balance"
                amount-color="#4169E1"
              ></wallet-balance>
            </div>
            <div class="createBtnwrapper col-12 col-sm-4 text-right">
              <a
                href=""
                @click.prevent="$refs.rightDraw.showPanel()"
                class="btn btn-primary create-savings-btn"
                ><img src="/images/icons/plus.svg" alt="" /> Create New</a
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7">
          <!-- tab -->
          <div class="autobox-card-section">
            <v-tabs
              v-model="savingsTab"
              background-color="transparent"
              color="basil"
              grow
              class="v-tabs-styles"
            >
              <v-tab :ripple="false"> Ongoing </v-tab>

              <v-tab :ripple="false"> Liquidated </v-tab>

              <v-tab :ripple="false"> Completed </v-tab>
            </v-tabs>

            <v-tabs-items v-model="savingsTab" class="v-tabs-items-styles">
              <v-tab-item>
                <SimpleboxCard />
                <!-- <SimpleboxCard />
                  <SimpleboxCard /> -->
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <SimpleboxEmptyState />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <SimpleboxEmptyState />
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="invoice-card">
            <h1 class="invoice-card-title">Payments</h1>

            <v-tabs
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

    <RightDrawer
      ref="rightDraw"
      :showDrawer="showCretateSavingsDrawer"
      @closeDrawer="showCretateSavingsDrawer = false"
    >
      <CreateSimpleboxForm />
    </RightDrawer>
  </v-main>
</template>

<script>
import SimpleboxCard from "@/components/savings/simplebox/SimpleboxCard.vue";
import SimpleboxEmptyState from "@/components/savings/simplebox/EmptyState.vue";
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
import RightDrawer from "@/components/assets/RightDrawer.vue";
import CreateSimpleboxForm from "@/components/savings/simplebox/CreateSimpleboxForm.vue";
import WalletBalance from "~/components/dashboard/WalletBalance.vue";

export default {
  components: {
    SimpleboxCard,
    SimpleboxEmptyState,
    InvoiceCard,
    InvoiceEmptyState,
    RightDrawer,
    CreateSimpleboxForm,
    WalletBalance,
  },
  layout: "dashboard",
  data() {
    return {
      savingsTab: null,
      paymentTab: null,
      showCretateSavingsDrawer: false,
      // cardSelectItems: {'asdasd', 'dasdad', 'dasdasd', 'asdadsasd', dasdasd},
    };
  },
};
</script>

<style scoped lang="scss">
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
    & > .col-12 {
      padding: 0;
    }
  }
}
/* page style */
.my-savings-stats {
  margin-top: 40px;
  margin-bottom: 44px;
}

.my-savings-stats-item {
  padding: 24px;
  border-radius: 10px;
  background-color: rgba(255, 231, 175, 1);
}

.my-savings-stats-item p {
  font-weight: 400;
  font-size: 16px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 49, 1);
  margin-bottom: 0px;
}

.my-savings-stats-item h1 {
  font-weight: 600;
  font-size: 25px;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 49, 1);
}

/* create-savings-btn */
.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
}
/* create-savings-btn */
.createBtnwrapper {
  padding-right: 0;
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
}

/* create savings form */
.bind-new-card-btn {
  width: 100%;
  background-color: #fff4fa;
  height: 53px;
  border-radius: 8px;
  color: rgba(0, 8, 16, 1) !important;
  font-weight: 500;
  font-size: 16px;
  padding-top: 13px;
}

.bind-new-card-btn:hover {
  background-color: #fff4fa;
}
</style>
