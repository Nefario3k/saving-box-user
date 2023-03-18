<template>
  <v-main>
    <!-- <div class="container main-content"> -->
    <section class="dashboard-title">
      <h1>Savings</h1>
      <p>Now, it is time to grow your wealth</p>
    </section>

    <section class="dashboard-content">
      <div class="dashboardRow row content_row">
        <div class="balanceHead col-12 mb-5">
          <WalletBalance text="Total Savings Balance" amount-color="#4169E1" />
        </div>
        <h2 class="savings-content-title">Create a new savings plan</h2>
        <div class="col-12 row savings-type">
          <div class="col-md-6">
            <div class="saving-type auto-box">
              <h3 class="d-flex align-center">
                <img
                  src="images/icons/autobox.png"
                  width="24px"
                  alt="saving icon"
                  class="d-md-none"
                />
                <span class="pl-2 pl-md-0">Autobox</span>
              </h3>
              <p>
                This is a general savings plan that allows users to save based
                on their preferences. The user can decides how long.
              </p>
              <div class="d-flex justify-content-between">
                <a
                  href="#"
                  @click.stop="
                    () => {
                      (savingType = 'autoBox'), $refs.rightDraw.showPanel();
                    }
                  "
                  class="savings-type-left-btn"
                  >View Details</a
                >
                <nuxt-link to="/savings/autobox" class="savings-type-right-btn"
                  >Start Saving</nuxt-link
                >
              </div>
            </div>
            <RightDrawer
              ref="rightDraw"
              :showDrawer="savingType == 'autoBox'"
              @closeDrawer="savingType = null"
            >
              <Autobox></Autobox>
            </RightDrawer>
          </div>

          <div class="col-md-6">
            <div class="saving-type target-box">
              <h3 class="d-flex align-center">
                <img
                  src="images/icons/targetbox.png"
                  width="24px"
                  alt="saving icon"
                  class="d-md-none"
                />
                <span class="pl-2 pl-md-0">Targetbox</span>
              </h3>
              <p>
                This is a general savings plan that allows users to save based
                on their preferences. The user can decides how long.
              </p>
              <div class="d-flex justify-content-between">
                <a
                  href="#"
                  @click.stop="
                    () => {
                      (savingType = 'targetBox'),
                        $refs.rightDrawSecond.showPanel();
                    }
                  "
                  class="savings-type-left-btn"
                  >View Details</a
                >
                <nuxt-link
                  to="/savings/targetbox"
                  class="savings-type-right-btn"
                  >Start Saving</nuxt-link
                >
              </div>
            </div>
            <RightDrawer
              ref="rightDrawSecond"
              :showDrawer="savingType == 'targetBox'"
              @closeDrawer="savingType = null"
            >
              <Targetbox></Targetbox>
            </RightDrawer>
          </div>

          <div class="col-md-6">
            <div class="saving-type simple-box">
              <h3 class="d-flex align-center">
                <img
                  src="images/icons/simplebox.png"
                  width="24px"
                  alt="saving icon"
                  class="d-md-none"
                />
                <span class="pl-2 pl-md-0">Simplebox</span>
              </h3>
              <p>
                This is a general savings plan that allows users to save based
                on their preferences. The user can decides how long.
              </p>
              <div class="d-flex justify-content-between">
                <a
                  href="#"
                  @click.stop="
                    () => {
                      (savingType = 'simpleBox'),
                        $refs.rightDrawThird.showPanel();
                    }
                  "
                  class="savings-type-left-btn"
                  >View Details</a
                >
                <nuxt-link
                  to="/savings/simplebox"
                  class="savings-type-right-btn"
                  >Start Saving</nuxt-link
                >
              </div>
            </div>
            <RightDrawer
              ref="rightDrawThird"
              :showDrawer="savingType == 'simpleBox'"
              @closeDrawer="savingType = null"
            >
              <Simplebox></Simplebox>
            </RightDrawer>
          </div>

          <div class="col-md-6">
            <div class="saving-type safe-lock">
              <h3 class="d-flex align-center">
                <img
                  src="images/icons/safebox.png"
                  width="24px"
                  alt="saving icon"
                  class="d-md-none"
                />
                <span class="pl-2 pl-md-0">Safelock</span>
              </h3>
              <p>
                This is a general savings plan that allows users to save based
                on their preferences. The user can decides how long.
              </p>
              <div class="d-flex justify-content-between">
                <a
                  href="#"
                  @click.stop="
                    () => {
                      (savingType = 'safeLock'),
                        $refs.rightDrawFouth.showPanel();
                    }
                  "
                  class="savings-type-left-btn"
                  >View Details</a
                >
                <nuxt-link to="/savings/safelock" class="savings-type-right-btn"
                  >Start Saving</nuxt-link
                >
              </div>
            </div>
            <RightDrawer
              ref="rightDrawFouth"
              :showDrawer="savingType == 'safeLock'"
              @closeDrawer="savingType = null"
            >
              <Safelock></Safelock>
            </RightDrawer>
          </div>
        </div>
      </div>
    </section>
    <!-- </div> -->
  </v-main>
</template>

<script>
import Autobox from "@/components/savings/savings-types/Autobox.vue";
import Targetbox from "@/components/savings/savings-types/Targetbox.vue";
import Simplebox from "@/components/savings/savings-types/Simplebox.vue";
import Safelock from "@/components/savings/savings-types/Safelock.vue";
import WalletBalance from "~/components/dashboard/WalletBalance.vue";
import RightDrawer from "~/components/assets/RightDrawer.vue";
export default {
  components: {
    Autobox,
    Targetbox,
    Simplebox,
    Safelock,
    WalletBalance,
    RightDrawer,
  },
  layout: "dashboard",
  data() {
    return {
      savingType: null,
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

.savings-type {
  // padding: 32px;
  // background-color: rgba(255, 234, 245, 1);
  border-radius: 10px;
  .col-md-6 {
    padding: 0;
    &:nth-child(1),
    &:nth-child(3) {
      padding-right: 26px;
      padding-bottom: 26px;
    }
    &:nth-child(2) {
      padding-bottom: 26px;
    }
    &:nth-child(4) {
      padding-bottom: 26px;
    }
  }

  .saving-type {
    background-color: #ffeaf5;
    border-radius: 1rem;
    padding: 2.5rem 3rem;
    border: 1px solid transparent;
    width: 100%;

    &:hover {
      border: 1px solid var(--primary-color);
    }
  }

  .saving-type.auto-box {
    .savings-type-right-btn {
      background-color: #d7e1fe;
      color: var(--primary-color) !important;

      &:hover {
        background-color: darken($color: #d7e1fe, $amount: 10%);
      }
    }
  }

  .saving-type.target-box {
    background-color: #fff4fa;
  }

  .saving-type.simple-box {
    background-color: #ffeec8;

    .savings-type-right-btn {
      background-color: #ffe7af;

      &:hover {
        background-color: darken($color: #ffe7af, $amount: 10%);
      }
    }
  }

  .saving-type.safe-lock {
    background-color: #ffdff0;
  }
}

.savings-type h3 {
  font-weight: 600;
  font-size: 25px;
  line-height: 35.13px;
  color: #000831;
}

.savings-type p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 8, 49, 1);
  margin-bottom: 30px;
}

.savings-type-left-btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 37.15px;
  color: rgba(102, 107, 112, 1) !important;
  text-decoration: none;
}

.savings-type-right-btn {
  border-radius: 40px;
  padding-top: 9px;
  gap: 10px;
  background-color: #ffffff;
  font-weight: 400 !important;
  font-size: 16px !important;
  /* line-height: 35.13px; */
  color: rgba(0, 8, 49, 1) !important;
  text-decoration: none;
  display: inline-block;
  width: 143px;
  height: 44px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    background-color: darken($color: white, $amount: 10%);
  }
}
</style>
