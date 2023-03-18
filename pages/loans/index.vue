<template>
  <v-main>
    <section class="dashboard-title">
      <h1 @click="hasLoan = !hasLoan">Loan</h1>
      <p>Access up to 5 Million Naira Loan</p>
    </section>

    <section class="dashboard-content" v-if="!hasLoan">
      <div class="content__wrapperBox">
        <h2 class="savings-content-title">Start your Loan Application</h2>
        <div class="row loanPageRow">
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center loan-type first"
            >
              <div class="loan-type-content">
                <h3>SME loan</h3>
                <p>
                  This type of loan is for small and medium enterprises or
                  business people. The tenure for this loan ranges from 1 to 12
                  months.
                </p>
                <div class="actionWrapper">
                  <div class="">
                    <a
                      href="#"
                      @click.stop="
                        () => {
                          (action = 'viewSMELoan'), $refs.rightDraw.showPanel();
                        }
                      "
                      class="loan-type-btn"
                      ><span class="d-none d-md-block">View Details</span
                      ><span class="d-block d-md-none">Apply</span></a
                    >
                  </div>
                  <div class="">
                    <nuxt-link to="loans/sme-loans">
                      <button class="loan-type-btn dashboard d-none d-md-block">
                        Visit Dashboard
                      </button>
                      <i class="d-block d-md-none fa-solid fa-angle-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <RightDrawer
              ref="rightDraw"
              :showDrawer="action == 'viewSMELoan'"
              @closeDrawer="action = null"
            >
              <SMELoan></SMELoan>
            </RightDrawer>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center loan-type second"
            >
              <div class="loan-type-content">
                <h3>Collateral based loan</h3>
                <p>
                  This type of loan is for small and medium enterprises or
                  business people. The tenure for this loan ranges from 1 to 12
                  months.
                </p>
                <div class="actionWrapper">
                  <div class="">
                    <a
                      href="#"
                      @click.stop="
                        () => {
                          (action = 'viewCollateralLoan'),
                            $refs.rightDrawSecond.showPanel();
                        }
                      "
                      class="loan-type-btn"
                      ><span class="d-none d-md-block">View Details</span
                      ><span class="d-block d-md-none">Apply</span></a
                    >
                  </div>
                  <div class="">
                    <nuxt-link to="loans/collateral-loans">
                      <button class="loan-type-btn dashboard d-none d-md-block">
                        Visit Dashboard
                      </button>
                      <i class="d-block d-md-none fa-solid fa-angle-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <RightDrawer
              ref="rightDrawSecond"
              :showDrawer="action == 'viewCollateralLoan'"
              @closeDrawer="action = null"
            >
              <CollateralBasedLoan></CollateralBasedLoan>
            </RightDrawer>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center loan-type third"
            >
              <div class="loan-type-content">
                <h3>IPPIS</h3>
                <p>
                  This type of loan is for small and medium enterprises or
                  business people. The tenure for this loan ranges from 1 to 12
                  months.
                </p>
                <div class="actionWrapper">
                  <div class="">
                    <a
                      href="#"
                      @click.stop="
                        () => {
                          (action = 'viewIPPISLoan'),
                            $refs.rightDrawThird.showPanel();
                        }
                      "
                      class="loan-type-btn"
                      ><span class="d-none d-md-block">View Details</span
                      ><span class="d-block d-md-none">Apply</span></a
                    >
                  </div>
                  <div class="">
                    <nuxt-link to="loans/ippis-loans">
                      <button
                        class="loan-type-btn dashboard ippis d-none d-md-block"
                      >
                        Visit Dashboard
                      </button>
                      <i class="d-block d-md-none fa-solid fa-angle-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <RightDrawer
              ref="rightDrawThird"
              :showDrawer="action == 'viewIPPISLoan'"
              @closeDrawer="action = null"
            >
              <IPPIS></IPPIS>
            </RightDrawer>
          </div>
          <div class="col-md-6">
            <div
              class="d-flex justify-content-between align-items-center loan-type fourth"
            >
              <div class="loan-type-content">
                <h3>Salary earners loan</h3>
                <p>
                  This type of loan is for small and medium enterprises or
                  business people. The tenure for this loan ranges from 1 to 12
                  months.
                </p>
                <div class="actionWrapper">
                  <div class="">
                    <a
                      href="#"
                      @click.stop="
                        () => {
                          (action = 'viewSalaryLoan'),
                            $refs.rightDrawFouth.showPanel();
                        }
                      "
                      class="loan-type-btn"
                      ><span class="d-none d-md-block">View Details</span
                      ><span class="d-block d-md-none">Apply</span></a
                    >
                  </div>
                  <div class="">
                    <nuxt-link to="loans/salary-loans">
                      <button class="loan-type-btn dashboard d-none d-md-block">
                        Visit Dashboard
                      </button>
                      <i class="d-block d-md-none fa-solid fa-angle-right"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <RightDrawer
              ref="rightDrawFouth"
              :showDrawer="action == 'viewSalaryLoan'"
              @closeDrawer="action = null"
            >
              <SalaryEarnersLoan></SalaryEarnersLoan>
            </RightDrawer>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="dashboard-content">
      <div class="content__wrapperBox row">
        <div class="col-12 col-md-7 pa-0">
          <!-- tab -->
          <div class="autobox-card-section">
            <v-tabs
              center-active
              :show-arrows="true"
              v-model="savingsTab"
              background-color="transparent"
              color="basil"
              grow
              class="v-tabs-styles"
            >
              <v-tab :ripple="false"> Active Loans </v-tab>

              <v-tab :ripple="false"> Pending Approval </v-tab>

              <v-tab :ripple="false"> Repaid Loans </v-tab>
            </v-tabs>

            <v-tabs-items v-model="savingsTab" class="v-tabs-items-styles">
              <v-tab-item>
                <LoanCard />
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

        <div class="col-md-5 pt-0 d-none d-md-block">
          <!-- create new auto savings btn -->
          <div class="text-right mb-5">
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
import LoanDetailsVue from "~/components/loan/LoanDetails.vue";
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
      savingsTab: null,
      paymentTab: null,
      hasLoan: false,
      action: null,
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
  & > .content__wrapperBox {
    margin: 0 25px;
    border-radius: 16px;
    padding: 30px 40px;
    background-color: #fff;
  }
}
/* page style */

.loanPageRow {
  margin-top: 17px !important;
  & > .col-md-6 {
    padding: 0;
    &:nth-child(2n) {
      padding-bottom: 30px;
    }
    &:nth-child(2n - 1) {
      padding-bottom: 30px;
      padding-right: 30px;
    }
    .loan-type {
      padding: 18px 31px;
      background-color: #e7edff;
      border-radius: 10px;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
      box-sizing: content-box;
      border: solid 1px transparent;

      &:hover {
        border: 1px solid #4169e1;
      }
      &.second {
        background-color: #f0f8f0;
      }
      &.third {
        background-color: #e9fbe9;
      }
      &.fourth {
        background-color: #fffefe;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      .loan-type-content {
        h3 {
          font-weight: 600;
          font-size: 2.5rem;
          line-height: 35.13px;
          color: var(--primary-color);
        }
        p {
          font-weight: 400px;
          font-size: 1.4rem;
          line-height: 20px;
          color: rgba(51, 57, 64, 1);
          margin-bottom: 0px;
        }
        .actionWrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          grid-gap: 10px;
          margin-top: 17px;
          .loan-type-btn {
            font-weight: 600;
            font-size: 16px;
            // line-height: 37.15px;
            color: rgba(102, 107, 112, 1) !important;
            text-decoration: underline;
            &.dashboard {
              background-color: var(--primary-color);
              color: white !important;
              padding: 0.5rem 2.4rem;
              border-radius: 4rem;
              font-weight: 500;
              text-decoration: none;

              &:hover {
                background-color: darken($color: #4169e1, $amount: 10%);
              }
              &.ippis {
                background-color: var(--green);

                &:hover {
                  background-color: darken($color: #61ca61, $amount: 10%);
                }
              }
            }
          }
        }
      }
    }
  }
}

.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
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
</style>
