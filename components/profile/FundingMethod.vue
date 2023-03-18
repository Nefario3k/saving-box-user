<template>
  <div>
    <v-tabs
      color="var(--primary-color)"
      v-model="fundingMethodTab"
      class="tabs-row"
    >
      <v-tab :ripple="false"> Cards </v-tab>
      <v-tab :ripple="false"> Virtual Account </v-tab>
    </v-tabs>

    <v-tabs-items v-model="fundingMethodTab" class="v-tabs-items-styles">
      <v-tab-item>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div @click="$refs.rightDrawSecond.showPanel()" class="card new">
              <div class="card-details new">
                <div class="text-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#4169E1" />
                  </svg>
                  <br />
                  Add New Card
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div class="card relative">
              <div class="row">
                <div class="ps-0 col-9">
                  <h4>5668 **** **** 4990</h4>
                </div>
                <div class="col-3">
                  <img src="images/icons/mastercard.png" alt="" />
                </div>
              </div>
              <div class="card-details">
                <div class="">
                  <span>03/24</span>
                  <span>JOHN DOE</span>
                </div>
                <div class="">
                  <span>123</span>
                </div>
                <div class=""></div>
              </div>
              <v-menu offset-y :nudge-bottom="5">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on" class="absolute cardSelector">
                    <svg
                      width="5"
                      height="18"
                      viewBox="0 0 5 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1493_91160)">
                        <path
                          d="M2.72831 6.99959C1.71316 6.99959 0.890216 7.82253 0.890216 8.83769C0.890216 9.85284 1.71316 10.6758 2.72831 10.6758C3.74346 10.6758 4.56641 9.85284 4.56641 8.83769C4.56641 7.82253 3.74346 6.99959 2.72831 6.99959Z"
                          fill="white"
                        />
                        <path
                          d="M2.72831 13.4332C1.71316 13.4332 0.890216 14.2561 0.890216 15.2713C0.890216 16.2864 1.71316 17.1094 2.72831 17.1094C3.74346 17.1094 4.56641 16.2864 4.56641 15.2713C4.56641 14.2561 3.74346 13.4332 2.72831 13.4332Z"
                          fill="white"
                        />
                        <path
                          d="M2.72831 0.565997C1.71316 0.565997 0.890216 1.38894 0.890216 2.40409C0.890216 3.41924 1.71316 4.24219 2.72831 4.24219C3.74346 4.24219 4.56641 3.41924 4.56641 2.40409C4.56641 1.38894 3.74346 0.565997 2.72831 0.565997Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1493_91160">
                          <rect
                            width="3.67619"
                            height="16.5429"
                            fill="white"
                            transform="translate(4.56641 17.1094) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </template>
                <v-list class="dropdown__list">
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-title class="dropdown__list-title"
                      >Disable dard</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-title class="dropdown__list-title"
                      >Remove Card</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div class="card relative">
              <div class="row">
                <div class="ps-0 col-9">
                  <h4>5668 **** **** 4990</h4>
                </div>
                <div class="col-3">
                  <img src="images/icons/visa.png" alt="" />
                </div>
              </div>
              <div class="card-details">
                <div class="">
                  <span>03/24</span>
                  <span>JOHN DOE</span>
                </div>
                <div class="">
                  <span>123</span>
                </div>
                <div class=""></div>
              </div>
              <v-menu offset-y :nudge-bottom="5">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on" class="absolute cardSelector">
                    <svg
                      width="5"
                      height="18"
                      viewBox="0 0 5 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1493_91160)">
                        <path
                          d="M2.72831 6.99959C1.71316 6.99959 0.890216 7.82253 0.890216 8.83769C0.890216 9.85284 1.71316 10.6758 2.72831 10.6758C3.74346 10.6758 4.56641 9.85284 4.56641 8.83769C4.56641 7.82253 3.74346 6.99959 2.72831 6.99959Z"
                          fill="white"
                        />
                        <path
                          d="M2.72831 13.4332C1.71316 13.4332 0.890216 14.2561 0.890216 15.2713C0.890216 16.2864 1.71316 17.1094 2.72831 17.1094C3.74346 17.1094 4.56641 16.2864 4.56641 15.2713C4.56641 14.2561 3.74346 13.4332 2.72831 13.4332Z"
                          fill="white"
                        />
                        <path
                          d="M2.72831 0.565997C1.71316 0.565997 0.890216 1.38894 0.890216 2.40409C0.890216 3.41924 1.71316 4.24219 2.72831 4.24219C3.74346 4.24219 4.56641 3.41924 4.56641 2.40409C4.56641 1.38894 3.74346 0.565997 2.72831 0.565997Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1493_91160">
                          <rect
                            width="3.67619"
                            height="16.5429"
                            fill="white"
                            transform="translate(4.56641 17.1094) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </template>
                <v-list class="dropdown__list">
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-title class="dropdown__list-title"
                      >Disable dard</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-title class="dropdown__list-title"
                      >Remove Card</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </v-tab-item>

      <v-tab-item>
        <div class="row bank-details d-flex">
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div
              class="card new pa-6 mr-4"
              @click="$refs.rightDraw.showPanel()"
            >
              <div class="card-details new text-center">
                <p class="generate-account">Generate a Virtual Account</p>
                <span class="actionClick">(Click Here)</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div class="card va">
              <h4 class="mb-5">FIRST BANK OF NIGERIA</h4>
              <div class="row">
                <div class="ps-0 col-10">
                  <div class="card-details d-block">
                    <h3>30556828902</h3>
                    <p>Account Number</p>
                  </div>
                </div>
                <div class="col-2 copy-icon-container">
                  <v-icon class="">mdi-content-copy</v-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div class="card va">
              <h4 class="mb-5">GAURANTEE TRUST BANK</h4>
              <div class="row">
                <div class="col-10 ps-0">
                  <div class="card-details d-block">
                    <h3>30556828902</h3>
                    <p>Account Number</p>
                  </div>
                </div>
                <div class="col-2 copy-icon-container">
                  <v-icon class="">mdi-content-copy</v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="generateVirtualAccount"
      @closeDrawer="generateVirtualAccount = false"
    >
      <GenerateVirtualAccountForm />
    </RightDrawer>
    <RightDrawer
      ref="rightDrawSecond"
      :showDrawer="addNewCard"
      @closeDrawer="addNewCard = false"
    >
      <AddCardForm />
    </RightDrawer>
  </div>
</template>
<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
import GenerateVirtualAccountForm from "@/components/profile/GenerateVirtualAccountForm.vue";
import AddCardForm from "@/components/profile/AddCardFrom.vue";
export default {
  components: {
    RightDrawer,
    GenerateVirtualAccountForm,
    AddCardForm,
  },
  data() {
    return {
      generateVirtualAccount: false,
      addNewCard: false,
      fundingMethodTab: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.tabs-row {
  padding-bottom: 4rem;
}

.v-tabs-items-styles {
  .row {
    & > .col-md-4 {
      min-height: 13.3rem;
    }
  }
}

div.card:not(.new) {
  background: linear-gradient(98.56deg, #4169e1 0%, #61ca61 99.04%);
  box-shadow: 0px 4.30075px 21.5038px rgba(0, 0, 0, 0.12);
  color: white;
}

div.card:not(.new).va {
  background: linear-gradient(253.66deg, #4169e1 1.76%, #000831 100%);

  .copy-icon-container {
    display: flex;
    align-items: center;

    .v-icon {
      cursor: pointer;
      color: white;
      font-size: 1.8rem;

      &:hover {
        color: #ffffffa5;
      }
    }
  }
}

div.card {
  width: 100%;
  height: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 1rem;
  padding: 16px 31px;

  div.card-details {
    // margin-top: 2.3rem;
    display: flex;
    justify-content: space-between;

    span {
      // color: var(--gray-darken1);
      font-size: 1.4rem;
    }

    span + span {
      display: block;
      // color: var(--primary-color);
      font-weight: 500;
      text-align: center;
      font-size: 1.7rem;
    }
  }
}

.card.new {
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--primary-color);
  font-weight: 400;
  font-size: 1.7rem;
  .actionClick {
    color: #808080;
    font-weight: 500;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 255, 0.123);
    border-radius: 1rem;

    box-shadow: 1px 1px 2px rgba(128, 128, 128, 0.699);
  }
}

div.bank-details {
  h3 {
    font-size: 1.8rem;
    // color: var(--primary-color);
    font-weight: 600;
  }

  div.card {
    .card-details {
      display: block;

      .generate-account {
        // color: var(--primary-color);
        font-size: 1.6rem;
      }
    }
  }

  p {
    padding: 0px;
    margin: 0px;
  }
}

.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
}

.v-tabs-bar {
  .v-tab {
    padding: 0 !important;
    min-width: max-content;
    margin-right: 40px;
    justify-content: flex-start;
  }
}
.cardSelector {
  cursor: pointer;
  bottom: 29px;
  right: 31px;
}
@media (max-width: 599px) {
  .col-md-4 {
    padding-right: 0 !important;
  }
  .v-tabs-bar {
    .v-tab {
      padding: 0 12px !important;
      min-width: 9rem !important;
      margin-right: 28px !important;
      justify-content: center !important;
    }
  }
}
</style>