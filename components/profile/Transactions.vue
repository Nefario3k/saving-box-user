<template>
  <div>
    <section class="row header text-center d-flex align-center">
      <div class="col-12 pe-0 col-md-6 leftSideCol">
        <h2 class="mb-0 text-left">Transactions</h2>
        <div class="relative searchInput__wrapper">
          <input
            type="text"
            class="form-control input-design"
            placeholder="Search by Plan Name, and duration"
            aria-label="Search by Plan Name, and duration"
            aria-describedby="basic-addon1"
          />
          <span class="absolute searchIcon" id="basic-addon1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_511_66873)">
                <path
                  d="M15.0271 13.8488L18.5963 17.4171L17.4171 18.5963L13.8488 15.0271C12.5211 16.0915 10.8696 16.6704 9.16797 16.668C5.02797 16.668 1.66797 13.308 1.66797 9.16797C1.66797 5.02797 5.02797 1.66797 9.16797 1.66797C13.308 1.66797 16.668 5.02797 16.668 9.16797C16.6704 10.8696 16.0915 12.5211 15.0271 13.8488ZM13.3555 13.2305C14.4131 12.1429 15.0037 10.685 15.0013 9.16797C15.0013 5.94464 12.3905 3.33464 9.16797 3.33464C5.94464 3.33464 3.33464 5.94464 3.33464 9.16797C3.33464 12.3905 5.94464 15.0013 9.16797 15.0013C10.685 15.0037 12.1429 14.4131 13.2305 13.3555L13.3555 13.2305Z"
                  fill="#999C9F"
                />
              </g>
              <defs>
                <clipPath id="clip0_511_66873">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <v-menu
            :min-width="360"
            offset-y
            nudge-left="100%"
            nudge-bottom="5"
            v-model="showFilterMobile"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                plain
                style="text-transform: none; border-radius: 8px"
                class="filterButton ml-n4 ml-md-0 d-md-none d-block"
              >
                <v-icon>mdi-filter-variant</v-icon>
              </v-btn>
            </template>
            <v-card class="filterCard">
              <v-list class="dropdown__list">
                <!-- control -->
                <v-list-item
                  style="padding-top: 12px"
                  class="dropdown__list-item noHover"
                >
                  <div class="filter__header">
                    <span>Filter</span>
                    <v-btn class="Btn" color="#ecf1ff">
                      <span>Reset</span>
                    </v-btn>
                    <svg
                      @click="showFilterMobile = false"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 7.5L7.5 22.5"
                        stroke="#063A06"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 7.5L22.5 22.5"
                        stroke="#063A06"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </v-list-item>

                <!-- tag -->
                <v-list-item class="dropdown__list-item tag">
                  <v-list-item-title class="tag-title"
                    >Status</v-list-item-title
                  >
                </v-list-item>

                <!-- select  -->
                <v-list-item class="dropdown__list-item noHover pb-2">
                  <div class="statusFilter">
                    <v-checkbox
                      label="Active"
                      color="var(--primary-color)"
                      hide-details
                      value="true"
                    ></v-checkbox>
                    <v-checkbox
                      label="Completed/Settled"
                      color="var(--primary-color)"
                      hide-details
                      value="true"
                    ></v-checkbox>
                  </div>
                </v-list-item>

                <!-- tag -->
                <v-list-item class="mt-2 dropdown__list-item tag">
                  <v-list-item-title class="tag-title">Date</v-list-item-title>
                </v-list-item>

                <!-- select  -->
                <v-list-item class="dropdown__list-item noHover pb-2">
                  <div class="statusFilter dates">
                    <div class="dateInput">
                      <span class="label">From</span>
                      <input type="date" name="" value="" />
                    </div>
                    <div class="dateInput">
                      <span class="label">To</span>
                      <input type="date" name="" value="" />
                    </div>

                    <v-btn color="var(--primary-color)" class="Btn"
                      >Apply Filters</v-btn
                    >
                  </div>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>
      <div class="col-12 col-md-6 filter-btn">
        <v-menu
          :min-width="360"
          offset-y
          nudge-left="100%"
          nudge-bottom="5"
          v-model="showFilter"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              plain
              style="text-transform: none; border-radius: 8px"
              class="filterButton ml-n4 ml-md-0 d-none d-md-block"
            >
              <v-icon>mdi-filter-variant</v-icon>
              <span class="px-2">Filter</span>

              <v-icon> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-card class="filterCard">
            <v-list class="dropdown__list">
              <!-- control -->
              <v-list-item
                style="padding-top: 12px"
                class="dropdown__list-item noHover"
              >
                <div class="filter__header">
                  <span>Filter</span>
                  <v-btn class="Btn" color="#ecf1ff">
                    <span>Reset</span>
                  </v-btn>
                  <svg
                    @click="showFilter = false"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 7.5L7.5 22.5"
                      stroke="#063A06"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 7.5L22.5 22.5"
                      stroke="#063A06"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </v-list-item>

              <!-- tag -->
              <v-list-item class="dropdown__list-item tag">
                <v-list-item-title class="tag-title">Status</v-list-item-title>
              </v-list-item>

              <!-- select  -->
              <v-list-item class="dropdown__list-item noHover pb-2">
                <div class="statusFilter">
                  <v-checkbox
                    label="Active"
                    color="var(--primary-color)"
                    hide-details
                    value="true"
                  ></v-checkbox>
                  <v-checkbox
                    label="Completed/Settled"
                    color="var(--primary-color)"
                    hide-details
                    value="true"
                  ></v-checkbox>
                </div>
              </v-list-item>

              <!-- tag -->
              <v-list-item class="mt-2 dropdown__list-item tag">
                <v-list-item-title class="tag-title">Date</v-list-item-title>
              </v-list-item>

              <!-- select  -->
              <v-list-item class="dropdown__list-item noHover pb-2">
                <div class="statusFilter dates">
                  <div class="dateInput">
                    <span class="label">From</span>
                    <input type="date" name="" value="" />
                  </div>
                  <div class="dateInput">
                    <span class="label">To</span>
                    <input type="date" name="" value="" />
                  </div>

                  <v-btn color="var(--primary-color)" class="Btn"
                    >Apply Filters</v-btn
                  >
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <button class="export">
          <span>Export</span>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L7 7L1 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
    <section class="records mt-8">
      <v-data-table
        show-select
        checkbox-color="var(--primary-color)"
        :disable-sort="true"
        :headers="headers"
        :items="desserts"
        item-key="transaction"
        :items-per-page="5"
        :mobile-breakpoint="960"
        class="elevation-0 records-table selectTable generic__table noAction"
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
    <!-- <RightDrawer ref="rightDraw" :showDrawer="updatePassword" @closeDrawer="updatePassword = false">
            <update-password-form />
        </RightDrawer>
        <RightDrawer ref="rightDraw" :showDrawer="deleteAccount" @closeDrawer="deleteAccount = false">
            <delete-account />
        </RightDrawer> -->
  </div>
</template>
<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
export default {
  components: {
    RightDrawer,
  },
  data() {
    return {
      updatePassword: false,
      deleteAccount: false,
      singleSelect: false,
      showFilter: false,
      showFilterMobile: false,
      checkbox: false,
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
        { text: "Download", value: "action" },
      ],
      desserts: [
        {
          transaction: "Savings Top Up",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "Download",
        },
        {
          transaction: "Transfer",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "Download",
        },
        {
          transaction: "Loan Repayment",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "Download",
        },
        {
          transaction: "Investment Top Up",
          amount: "₦100, 000",
          recipient: "@Bellingham",
          created_at: "22, Sept. 2022",
          action: "Download",
        },
      ],
    };
  },
  methods: {
    hideFilter() {
      this.showFilter = true;
      setTimeout(() => (this.showFilter = false), 1);
    },
  },
};
</script>
<style lang="scss" scoped>
section.header {
  input {
    padding: 1rem 1.25rem;
    font-size: 1.4rem;
    border-radius: 0.8rem;
  }

  ::placeholder {
    color: #999c9f;
  }

  div.left-side {
    div {
      list-style: none;
    }
  }

  .filter-btn {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    grid-gap: 17px;

    button.export {
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border-radius: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 12.6rem;
      height: 4.4rem;
      padding: 0 19px;
      border-radius: 8px;
    }
  }
  .filterButton {
    border: 1px solid #e1e1e1;
    height: 4.4rem;
    font-size: 1.4rem;
  }
}

// .filterCard {
//   padding: 14px 30px;
//   font-size: 1.4rem;
//   & > .row {
//     margin: 0;
//     & > .col {
//       padding: 0;
//       h2 {
//         font-weight: 500;
//         font-size: 1.8rem;
//         color: #000831;
//       }
//       button.reset {
//         background-color: #ecf1ff;
//         border-radius: var(--normal-radius);
//         min-width: 8.7rem;
//         height: 3.2rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: var(--primary-color);
//         font-weight: 400;
//         font-size: 1.4rem;
//       }
//     }
//   }

//   #to {
//     color: red;
//   }
// }

.leftSideCol {
  display: flex;
  align-items: center;
  grid-gap: 17px;
}
.searchInput__wrapper {
  input {
    min-width: 38.6rem;
    padding-left: 42px !important;
    border-radius: 8px !important;
  }
  .searchIcon {
    top: 50%;
    left: 17px;
    transform: translateY(-50%);
  }

  input:focus + .searchIcon svg {
    path {
      fill: var(--primary-color);
    }
  }
}
</style>