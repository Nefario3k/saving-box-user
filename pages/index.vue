<template>
  <v-main>
    <!-- <div class="container main-content"> -->
    <section class="dashboard-title">
      <h1>My Dashboard</h1>
      <p>A world of limitless opportunities</p>
    </section>
    <section>
      <section class="dashboard-content">
        <div class="dashboardRow row">
          <!-- wallet container  -->
          <div class="col-12 col-md-7 col-lg-7 col-xl-7">
            <div class="wallet-container">
              <div class="row">
                <div class="p-0 col-12 col-sm-7 wallet-amount">
                  <span class="wallet-title">Wallet Balance</span>
                  <p class="d-flex align-center">
                    <span class="mr-4">
                      {{ showAmount ? "₦ 340,598,980" : "************" }}
                    </span>
                    <v-icon
                      @click="showAmount = !showAmount"
                      style="
                        font-weight: bold;
                        background-color: transparent !important;
                      "
                    >
                      {{
                        showAmount ? "mdi-eye-off-outline" : "mdi-eye-outline"
                      }}
                    </v-icon>
                  </p>
                </div>
                <div class="pt-0 col-12 col-sm-5 wallet-id">
                  <p class="user-id"><span>WalletID:</span> @Johndoe</p>
                </div>
              </div>
              <div class="wallet-actions">
                <v-btn
                  color="var(--primary-color)"
                  @click="$refs.rightDraw.showPanel()"
                  class="Btn fund_wallet"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="white" />
                  </svg>
                  <span>Fund Wallet</span>
                </v-btn>
                <v-btn
                  @click="$refs.rightDrawThird.showPanel()"
                  class="Btn send_money"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.923018 7.36955C0.413018 7.16455 0.419018 6.85955 0.957018 6.68055L20.043 0.318552C20.572 0.142552 20.875 0.438552 20.727 0.956552L15.273 20.0426C15.123 20.5716 14.798 20.5956 14.556 20.1126L10 10.9996L0.923018 7.36955ZM5.81302 7.16955L11.449 9.42455L14.489 15.5066L18.035 3.09655L5.81202 7.16955H5.81302Z"
                      fill="#4169E1"
                    />
                  </svg>
                  <span>Send Money</span>
                </v-btn>
                <v-btn
                  color="var(--green)"
                  @click="$refs.rightDrawSecond.showPanel()"
                  class="Btn withdraw"
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.168 0.833008H1.83464C1.59152 0.833008 1.35836 0.929585 1.18645 1.10149C1.01455 1.2734 0.917969 1.50656 0.917969 1.74967V9.08301C0.917969 9.32612 1.01455 9.55928 1.18645 9.73119C1.35836 9.9031 1.59152 9.99967 1.83464 9.99967H4.58464V18.2497C4.58464 18.4928 4.68121 18.7259 4.85312 18.8979C5.02503 19.0698 5.25819 19.1663 5.5013 19.1663H16.5013C16.7444 19.1663 16.9776 19.0698 17.1495 18.8979C17.3214 18.7259 17.418 18.4928 17.418 18.2497V9.99967H20.168C20.4111 9.99967 20.6442 9.9031 20.8162 9.73119C20.9881 9.55928 21.0846 9.32612 21.0846 9.08301V1.74967C21.0846 1.50656 20.9881 1.2734 20.8162 1.10149C20.6442 0.929585 20.4111 0.833008 20.168 0.833008ZM6.41797 17.333V15.4997C6.9042 15.4997 7.37051 15.6928 7.71433 16.0366C8.05815 16.3805 8.2513 16.8468 8.2513 17.333H6.41797ZM15.5846 17.333H13.7513C13.7513 16.8468 13.9445 16.3805 14.2883 16.0366C14.6321 15.6928 15.0984 15.4997 15.5846 15.4997V17.333ZM15.5846 13.6663C14.6122 13.6663 13.6795 14.0526 12.9919 14.7403C12.3043 15.4279 11.918 16.3605 11.918 17.333H10.0846C10.0846 16.3605 9.69833 15.4279 9.01069 14.7403C8.32306 14.0526 7.39043 13.6663 6.41797 13.6663V6.33301H15.5846V13.6663ZM19.2513 8.16634H17.418V5.41634C17.418 5.17323 17.3214 4.94007 17.1495 4.76816C16.9776 4.59625 16.7444 4.49967 16.5013 4.49967H5.5013C5.25819 4.49967 5.02503 4.59625 4.85312 4.76816C4.68121 4.94007 4.58464 5.17323 4.58464 5.41634V8.16634H2.7513V2.66634H19.2513V8.16634ZM11.0013 12.7497C11.5452 12.7497 12.0769 12.5884 12.5291 12.2862C12.9814 11.984 13.3338 11.5546 13.542 11.0521C13.7501 10.5496 13.8046 9.99662 13.6985 9.46318C13.5924 8.92973 13.3304 8.43972 12.9458 8.05513C12.5613 7.67054 12.0712 7.40862 11.5378 7.30251C11.0044 7.1964 10.4514 7.25086 9.94892 7.45901C9.44643 7.66715 9.01694 8.01962 8.71476 8.47186C8.41259 8.92409 8.2513 9.45578 8.2513 9.99967C8.2513 10.729 8.54103 11.4285 9.05676 11.9442C9.57248 12.4599 10.272 12.7497 11.0013 12.7497ZM11.0013 9.08301C11.1826 9.08301 11.3598 9.13677 11.5106 9.23749C11.6613 9.33822 11.7788 9.48138 11.8482 9.64888C11.9176 9.81638 11.9357 10.0007 11.9004 10.1785C11.865 10.3563 11.7777 10.5197 11.6495 10.6479C11.5213 10.7761 11.358 10.8634 11.1801 10.8987C11.0023 10.9341 10.818 10.9159 10.6505 10.8466C10.483 10.7772 10.3398 10.6597 10.2391 10.5089C10.1384 10.3582 10.0846 10.181 10.0846 9.99967C10.0846 9.75656 10.1812 9.5234 10.3531 9.35149C10.525 9.17958 10.7582 9.08301 11.0013 9.08301Z"
                      fill="white"
                    />
                  </svg>
                  <span>Withdraw</span>
                </v-btn>
              </div>
            </div>
          </div>

          <!-- discover container  -->
          <div class="discoverCol col-12 col-md-5 col-lg-5 col-xl-5">
            <div class="discover-container">
              <div class="virtual-account">
                <p>Funding Account</p>
                <h2>My Virtual Account</h2>
                <button>View</button>
              </div>
              <div class="market-place">
                <p>Investibox</p>
                <h2>Marketplace</h2>
                <button>View</button>
              </div>
            </div>
          </div>

          <!-- stats container  -->
          <div class="col-12 col-md-7 col-lg-7 col-xl-7">
            <div class="stats-container">
              <h2>Start Growing Your Finance</h2>
              <div class="stats__wrapper">
                <!-- active savings  -->
                <div class="active-savings d-flex">
                  <div class="img d-flex align-center">
                    <img src="images/icons/pigy-green.png" alt="" />
                  </div>
                  <div
                    class="saving-info ml-0 ml-md-4 mt-2 mt-md-0 flex-grow-1"
                  >
                    <h4 class="">Total Active Savings</h4>
                    <div class="d-flex justify-space-between mt-4">
                      <span class="number"> 18 </span>
                      <button class="">Save</button>
                    </div>
                  </div>
                </div>
                <!-- investment  -->
                <div
                  class="active-savings investment d-flex flex-wrap flex-column flex-md-row"
                >
                  <div class="img d-flex align-center">
                    <img src="images/icons/investment2.png" alt="" />
                  </div>
                  <div
                    class="saving-info ml-0 ml-md-4 mt-2 mt-md-0 flex-grow-1"
                  >
                    <h4>Active Investment</h4>
                    <div class="d-flex justify-space-between mt-4">
                      <span class="number"> 7 </span>
                      <button class="">Invest</button>
                    </div>
                  </div>
                </div>
                <!-- loan  -->
                <div
                  class="active-savings loan d-flex flex-wrap flex-column flex-md-row"
                >
                  <div class="img d-flex align-center">
                    <img src="images/icons/loan.png" alt="" />
                  </div>
                  <div
                    class="saving-info ml-0 ml-md-4 mt-2 mt-md-0 flex-grow-1"
                  >
                    <h4>Total Active Loans</h4>
                    <div class="d-flex justify-space-between mt-4">
                      <span class="number"> 3 </span>
                      <button class="">Apply</button>
                    </div>
                  </div>
                </div>
                <!-- jolly -->
                <div
                  class="active-savings jolly d-flex flex-wrap flex-column flex-md-row"
                >
                  <div class="img d-flex align-center">
                    <img src="images/icons/jollification.png" alt="" />
                  </div>
                  <div
                    class="saving-info ml-0 ml-md-4 mt-2 mt-md-0 flex-grow-1"
                  >
                    <h4>Total Active Jolly</h4>
                    <div class="d-flex justify-space-between mt-4">
                      <span class="number"> 2 </span>
                      <button class="">Join</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="referral">
                <h2>Referral</h2>
                <p>
                  Invite a friend and get NGN500 anytime a user signs up, saves
                  or invest with your referral code
                </p>
                <nuxt-link to="referrals">Get Referral Code</nuxt-link>
              </div>
            </div>
          </div>

          <!-- invoice container  -->
          <div class="col-12 col-md-5 col-lg-5 col-xl-5">
            <div class="invoice-card">
              <h1 class="invoice-card-title">Recent</h1>

              <v-tabs
                :show-arrows="false"
                v-model="paymentTab"
                background-color="transparent"
                color="basil"
                grow
                class="v-tabs-styles"
              >
                <v-tab :ripple="false"> Pending Invoice </v-tab>

                <v-tab :ripple="false"> Transactions </v-tab>
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
              </v-tabs-items>
            </div>
          </div>
        </div>
      </section>
    </section>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="isFundingWallet"
      @closeDrawer="isFundingWallet = false"
    >
      <fund-wallet />
    </RightDrawer>
    <RightDrawer
      ref="rightDrawSecond"
      :showDrawer="isWithdrawing"
      @closeDrawer="isWithdrawing = false"
    >
      <withdraw-cash />
    </RightDrawer>
    <RightDrawer
      ref="rightDrawThird"
      :showDrawer="isSendingMoney"
      @closeDrawer="isSendingMoney = false"
    >
      <send-money />
    </RightDrawer>
    <!-- </div> -->
  </v-main>
</template>

<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
import FundWallet from "@/components/dashboard/FundWallet.vue";
import SendMoney from "@/components/dashboard/SendMoney.vue";
import WithdrawCash from "@/components/dashboard/WithdrawCash.vue";
export default {
  layout: "dashboard",
  components: {
    RightDrawer,
    InvoiceCard,
    InvoiceEmptyState,
    FundWallet,
    SendMoney,
    WithdrawCash,
  },
  data() {
    return {
      paymentTab: null,
      isFundingWallet: false,
      isWithdrawing: false,
      isSendingMoney: false,
      showAmount: true,
    };
  },
  // page properties go here
};
</script>

<style lang="scss" scoped>
/* page style */
.main-content {
  // padding: 2.4rem;
}
section.dashboard-title {
  padding: 20px 25px 0;
}
section.dashboard-content {
  background-color: #fff4fa;
  padding: 0;
  & > .row {
    padding: 0 25px;
    & > .col-12 {
      min-height: 24rem;
      padding: 0;
      &:nth-child(1),
      &:nth-child(3) {
        padding-right: 30px;
        padding-bottom: 30px;
      }
      &:nth-child(2) {
        padding-bottom: 30px;
      }
      &:nth-child(4) {
        padding-bottom: 30px;
      }
    }
  }

  div.wallet-container,
  div.stats-container,
  div.discover-container,
  div.invoice-card {
    background-color: #fff;
    padding: 24px 37px;
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }

  div.wallet-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.wallet-id {
      margin-bottom: 4.7rem;

      .user-id {
        color: var(--primary-color);
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 0 !important;

        span {
          color: #666b70;
          font-size: 1.6rem;
          font-weight: 400;
        }
      }
    }

    div.wallet-amount {
      .wallet-title {
        font-size: 1.6rem;
        color: #333940;
      }

      p {
        margin: 0px;
        font-size: 3rem;
        font-weight: 600;

        img {
          cursor: pointer;
        }
      }
    }

    div.wallet-actions {
      display: flex;
      grid-gap: 15px;
      justify-content: space-between;
      .Btn {
        width: calc(33.3% - 7.5px);
        height: 5rem;
        box-shadow: none;
        border-radius: var(--normal-radius);
        transition: all 0.2s ease-in-out;
        span {
          color: #fff;
          font-weight: 500;
          font-size: 1.6rem;
          text-transform: initial;
        }
        svg {
          margin-right: 10px;
        }
        &:hover {
          box-shadow: 1px 1px 2px gray;
          transition: all 0.2s ease-in-out;
        }

        &.send_money {
          border: 1px solid var(--primary-color);
          background-color: var(--input-bg);
          span {
            color: var(--primary-color);
          }
          &:hover {
            background-color: darken($color: #fff4fa, $amount: 5%) !important;
            transition: all 0.2s ease-in-out;
          }
        }
        &.fund_wallet {
          &:hover {
            background-color: darken($color: #4169e1, $amount: 10%) !important;
            transition: all 0.2s ease-in-out;
          }
        }

        &.withdraw {
          &:hover {
            background-color: darken($color: #61ca61, $amount: 10%) !important;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
  }

  div.stats-container {
    h2 {
      margin-bottom: 1.1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.51rem;
    }

    div.stats__wrapper {
      display: grid;
      // grid-template-columns: auto auto;
      grid-template-columns: repeat(2, 1fr);
      padding: 0px;
      gap: 20px;
    }

    div.active-savings {
      background-color: #fff4dc;
      padding: 1rem 1.4rem;
      width: 100%;
      // min-width: 23.8rem;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
      &.investment {
        background-color: var(--input-bg);
      }
      &.loan {
        background-color: #ffeaf5;
      }
      &.jolly {
        background-color: #ffdff0;
      }

      &:hover {
        background-color: #b1afafa0;
        box-shadow: 1px 1px 2px #b1afafa0;
        transition: all 0.3s ease-in-out;
      }

      div.img {
        img {
          max-width: 4.8rem;
          max-height: 4.8rem;
          object-fit: cover;
          //   border-radius: 50%;
          height: 100%;
          width: 100%;
        }
      }

      div.saving-info {
        h4 {
          font-weight: 500;
          font-size: 1.4rem;
          color: #333940;
          // white-space: nowrap;
        }

        .number {
          font-weight: 600;
          font-size: 2.2rem;
          color: var(--primary-color);
        }

        button {
          font-size: 1.2rem;
          background-color: #d5ddf7;
          border-radius: 2rem;
          padding: 0.4rem 1.8rem;

          &:hover {
            color: white;
            background-color: var(--primary-color);
          }
        }
      }
    }

    div.referral {
      margin-top: 3.7rem;
      padding: 1.8rem 3.1rem;
      background-color: #fff4fa;
      border-radius: 1rem;

      h2 {
        color: var(--primary-color);
        font-size: 2.5rem;
        font-weight: 600;
      }

      a {
        color: var(--primary-color);
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
  }
}

.invoice-card {
  border: none;
}

div.discover-container {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //   overflow: hidden;

  div.virtual-account,
  div.market-place {
    padding: 15px 24px;
    color: white;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    max-height: 18.7rem;
    width: calc(50% - 15px);

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 28px;
      line-height: 23px;
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
      color: #d0dbe5;
      margin-bottom: 0;
    }

    button {
      padding: 2px 10px;
      width: 100%;
      line-height: 35px;
      font-size: 1.6rem;
      font-weight: 600;
      border-radius: 2rem;
      background-color: white;
      color: var(--green);
      text-align: center;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  div.virtual-account {
    // background: linear-gradient(253.66deg, #4169e1 1.76%, #000831 100%);
    background: linear-gradient(137.01deg, #4169e1 2.31%, #869feb 100%);

    button {
      color: var(--primary-color);

      &:hover {
        color: var(--green);
      }
    }
  }

  div.market-place {
    // background: linear-gradient(135.61deg, #61ca61 0%, #beefbe 100%);
    background: linear-gradient(135.61deg, #61ca61 0%, #84ef84 100%);

    p {
      color: #fff;
    }
  }
}
</style>
