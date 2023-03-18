<template>
  <v-main>
    <section class="dashboard-content">
      <div class="loanTypeRow row">
        <div class="col-12 row__header">
          <h1>Withdrawal</h1>
        </div>
        <div class="col-12">
          <!-- tab -->
          <div class="withdrawRow row" style="width: 100%">
            <div class="col-12 col-md-9">
              <v-tabs
                center-active
                :show-arrows="true"
                v-model="jollificationsTab"
                background-color="transparent"
                color="basil"
                grow
                class="v-tabs-styles mb-0"
              >
                <v-tab :ripple="false"> All</v-tab>
                <v-tab :ripple="false"> Pending </v-tab>
                <v-tab :ripple="false"> Approved</v-tab>
                <v-tab :ripple="false"> Declined</v-tab>
              </v-tabs>
            </div>
            <div class="col-12 col-md-3 text-right">
              <v-btn @click="$refs.rightDraw.showPanel()" class="withdraw-btn"
                >Withdraw</v-btn
              >
            </div>
          </div>

          <v-tabs-items v-model="jollificationsTab" class="v-tabs-items-styles">
            <v-tab-item>
              <section class="records mt-8">
                <v-data-table
                  :disable-sort="true"
                  :headers="headers"
                  :items="desserts"
                  item-key="transaction"
                  :items-per-page="5"
                  :hide-default-footer="false"
                  :mobile-breakpoint="960"
                  class="elevation-0 generic__table noAction records-table"
                >
                  <!-- user details  -->
                  <template v-slot:item.transaction="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <span>{{ item.transaction }}</span>
                      </div>
                    </div>
                  </template>

                  <!-- role  -->
                  <template v-slot:item.amount="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <p>{{ item.amount }}</p>
                      </div>
                    </div>
                  </template>

                  <!-- date  -->
                  <template v-slot:item.recipient="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <p class="approved">{{ item.recipient }}</p>
                      </div>
                    </div>
                  </template>

                  <!-- date  -->
                  <template v-slot:item.created_at="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <p>{{ item.created_at }}</p>
                      </div>
                    </div>
                  </template>

                  <!-- created  -->
                  <template v-slot:item.created="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <p>{{ item.created }}</p>
                      </div>
                    </div>
                  </template>

                  <!-- user details  -->
                  <template v-slot:item.action="{ item }">
                    <div class="user_content">
                      <div class="user_content_details">
                        <p class="approved">{{ item.action }}</p>
                      </div>
                    </div>
                  </template>
                </v-data-table>
              </section>
            </v-tab-item>

            <v-tab-item>
              <h2 style="font-size: 1.8rem" class="text-center">
                No withdrawals to show
              </h2>
            </v-tab-item>

            <v-tab-item>
              <h2 style="font-size: 1.8rem" class="text-center">
                No withdrawals to show
              </h2>
            </v-tab-item>

            <v-tab-item>
              <h2 style="font-size: 1.8rem" class="text-center">
                No withdrawals to show
              </h2>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </section>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="isWithdrawing"
      @closeDrawer="isWithdrawing = false"
    >
      <withdraw-cash />
    </RightDrawer>
  </v-main>
</template>

<script>
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import JollificationCard from "~/components/jollifications/JollificationCard.vue";
import RightDrawer from "~/components/assets/RightDrawer.vue";
import WithdrawCash from "~/components/dashboard/WithdrawCash.vue";

export default {
  layout: "dashboard",
  components: {
    InvoiceCard,
    JollificationCard,
    WithdrawCash,
    RightDrawer,
  },
  data() {
    return {
      jollificationsTab: null,
      paymentTab: null,
      showJolliDetails: false,
      isWithdrawing: false,
      headers: [
        {
          text: "TRANSACTION",
          align: "start",
          sortable: false,
          value: "transaction",
        },
        { text: "AMOUNT", value: "amount" },
        { text: "RECIPIENT", value: "recipient" },
        { text: "CREATED AT", value: "created_at" },
        { text: "ACTION", value: "action" },
      ],
      desserts: [
        {
          transaction: "Savings Top Up",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "download",
        },
        {
          transaction: "Transfer",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "download",
        },
        {
          transaction: "Loan Repayment",
          amount: "₦70, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "download",
        },
        {
          transaction: "Investment Top Up",
          amount: "₦20, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "download",
        },
      ],
    };
  },
  // page properties go here
};
</script>

<style lang="scss" scoped>
section.dashboard-title {
  padding: 20px 25px 0;
}
section.dashboard-content {
  background: transparent;
  padding: 0 0 20px;
  & > .loanTypeRow {
    margin: 0 25px;
    border-radius: 16px;
    padding: 30px 40px;
    background-color: #fff;
    & > .col-12 {
      padding: 0;
    }
  }
}
h3.tab-heading {
  padding: 1.1rem 0rem;
}
/* create-savings-btn */
</style>
