<template>
  <v-main>
    <!-- header  -->
    <section class="dashboard-title">
      <h1>Account</h1>
      <p>Manage your Account Setup</p>
    </section>
    <!-- content  -->
    <section class="dashboard-content">
      <div class="content__wrapperBox row">
        <div class="col-md-12">
          <!-- tab -->
          <div class="">
            <div
              class="d-md-block d-none"
              style="width: 100%; max-width: 80.8rem"
            >
              <v-tabs
                v-model="profileTab"
                background-color="transparent"
                color="basil"
                grow
                class="v-tabs-styles"
              >
                <v-tab :ripple="false"> Profile Settings </v-tab>
                <v-tab :ripple="false"> Verification </v-tab>
                <v-tab :ripple="false"> Next of Kin </v-tab>
                <v-tab :ripple="false"> Funding Method</v-tab>
                <v-tab :ripple="false"> Transactions </v-tab>
              </v-tabs>
            </div>
            <div class="d-md-none d-block">
              <MiniTabNoRoute
                :inputVal="tabItem[profileTab]"
                :activeTab="profileTab"
                @changeTabs="
                  (id) => {
                    profileTab = id;
                  }
                "
                :tabs="tabItem"
              />
            </div>
            <v-tabs-items v-model="profileTab" class="v-tabs-items-styles">
              <v-tab-item>
                <ProfileSettings />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <Verification />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <NextOfKin />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <FundingMethod />
              </v-tab-item>

              <v-tab-item>
                <!-- empty state -->
                <Transactions />
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
        <ProfileFooter />
      </div>
    </section>
  </v-main>
</template>

<script>
import CollateralBasedLoan from "@/components/loan/loan-types/CollateralBasedLoan.vue";
import IPPIS from "@/components/loan/loan-types/IPPIS.vue";
import SalaryEarnersLoan from "@/components/loan/loan-types/SalaryEarnersLoan.vue";
import SMELoan from "@/components/loan/loan-types/SMELoan.vue";
import ProfileSettings from "~/components/profile/ProfileSettings.vue";
import Verification from "~/components/profile/Verification.vue";
import NextOfKin from "@/components/profile/NextOfKin.vue";
import FundingMethod from "@/components/profile/FundingMethod.vue";
import Transactions from "@/components/profile/Transactions.vue";
import ProfileFooter from "~/components/profile/ProfileFooter.vue";
export default {
  layout: "dashboard",
  components: {
    CollateralBasedLoan,
    IPPIS,
    SalaryEarnersLoan,
    SMELoan,
    ProfileSettings,
    Verification,
    NextOfKin,
    FundingMethod,
    Transactions,
    ProfileFooter,
  },
  data() {
    return {
      profileTab: null,
      paymentTab: null,
      tabItem: [
        "Profile Settings",
        "Verification",
        "Next of Kin",
        "Funding Method",
        "Transactions",
      ],
    };
  },
  mounted() {
    if (this.$route.query && this.$route.query.hasOwnProperty("verify")) {
      this.profileTab = 1;
    }
    // console.log(this.$route.query.veri);
  },
  // page properties go here
};
</script>

<style scoped lang="scss">
section.dashboard-title {
  padding: 20px 25px 0;
}
section.dashboard-content {
  background: transparent;
  padding: 0 0;
  & > .content__wrapperBox {
    margin: 0 25px;
    border-radius: 16px 16px 0 0;
    // padding: 31px 32px;
    background-color: #fff;
    & > .col-md-12 {
      padding: 31px 32px;
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
.create-savings-btn {
  padding: 16px 24px 16px 24px;
  color: white !important;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
}

.create-savings-btn img {
  margin-right: 15px;
  color: white;
}

.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
}
</style>
