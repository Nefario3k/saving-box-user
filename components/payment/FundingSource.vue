<template>
  <section class="">
    <div class="pb-0 col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Funding Source (Optional)</label
      >
      <v-container class="pa-0 font-weight-medium" fluid>
        <v-checkbox
          class="font-weight-medium"
          v-model="checkbox"
          color="var(--primary-color)"
          :label="`Fund From SavingBox Wallet`"
        ></v-checkbox>
      </v-container>
    </div>
    <div class="pb-1 col-12">
      <label
        for="exampleFormControlInput1"
        class="form-label label-design font-weight-medium"
        >Payment Method</label
      >
    </div>
    <div class="p-0 col-12">
      <!-- <v-select
        v-model="selectedFruits"
        :items="['1234', '5678', '9876', '4534', '5476']"
        label="Select a payment method"
        outlined
      >
        style each item
        <template #item="{ item }">
          <div class="payment-method-item">
            <span class="payment-method-item-date">03/24</span>
            <span class="payment-method-item-card">
              5336 5899 ****** {{ item }}
            </span>
          </div>
        </template>
        append item design
        <template v-slot:append-item>
          <div
            class="bind-new-card"
            style="margin-top: 15px; margin-bottom: 15px"
          >
            <a
              href=""
              style="
                text-decoration: none;
                margin-left: 15px;
                font-size: 16px;
                font-weight: 500;
                color: black;
              "
              ><i class="fa-solid fa-plus"></i> Bind New Card</a
            >
          </div>
        </template>
      </v-select> -->
      <v-menu v-model="showMenu" offset-y :nudge-bottom="5">
        <template v-slot:activator="{ on, attrs }">
          <div
            :class="{ activeMenu: showMenu }"
            v-bind="attrs"
            v-on="on"
            class="minitab relative d-block my-0"
          >
            <input
              style="
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid #ede0e0;
                color: #000831;
              "
              disabled
              type=""
              name=""
              value="Select from saved Cards"
            />
            <div class="absolute dropdownIcon">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L7 7L1 1"
                  stroke="var(--primary-color)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </template>
        <v-list class="dropdown__list select__list">
          <v-list-item class="dropdown__list-item">
            <v-list-item-title class="dropdown__list-title">
              <span class="radioBtn"></span>
              <span class="content date">03/24</span>
              <span class="content">5336 5899 ******</span>
              <img src="/images/icons/mastercard.png" alt="" />
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-title class="dropdown__list-title">
              <span class="radioBtn"></span>
              <span class="content date">03/24</span>
              <span class="content">5336 5899 ******</span>
              <img src="/images/icons/mastercard.png" alt="" />
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-title class="dropdown__list-title">
              <span class="radioBtn"></span>
              <span class="content date">03/24</span>
              <span class="content">4336 5899 ******</span>
              <img src="/images/icons/visa.png" alt="" />
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="dropdown__list-item bindNew">
            <v-list-item-title class="dropdown__list-title">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_17464)">
                  <path
                    d="M11 11.5V5.5H13V11.5H19V13.5H13V19.5H11V13.5H5V11.5H11Z"
                    fill="#4169E1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_17464">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Bind New Card</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      selectedFruits: "",
      showMenu: false,
    };
  },
};
</script>
<style lang="scss" scoped>
// .label-design {
//     font-weight: 500 !important;
//     font-size: 1.6rem;
// }
.col-12 {
  padding-right: 0;
}
label.v-label.theme--light {
  font-weight: 500;
  font-size: 1.6rem;
  color: #000831;
}
</style>