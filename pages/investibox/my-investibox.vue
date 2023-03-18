<template>
  <v-main>
    <section class="dashboard-title">
      <h1>Investment</h1>
      <p>Securely build your portfolio and wealth</p>
    </section>

    <section class="dashboard-content">
      <div class="content__wrapperBox">
        <div class="explor-investibox-title">
          <WalletBalance
            text="Create a new investment plan"
            amount-color="#4169E1"
          />
        </div>

        <!-- menu -->
        <InvextiboxMenu />
        <MiniTab :tabs="tabItem" />

        <!-- <CategoriesList /> -->

        <div class="d-flex justify-content-between align-items-center">
          <ul class="explore-investibox-categories-list">
            <li><a href="" class="active">All</a></li>
            <li><a href="">Agriculture</a></li>
            <li><a href="">Petroleum</a></li>
            <li><a href="">Real Estate</a></li>
            <li><a href="">Transportation</a></li>
            <li style="margin-right: 0px !important">
              <a href=""> More <i class="fa-solid fa-chevron-down"></i> </a>
            </li>
          </ul>
          <v-dialog v-model="dialog" fullscreen>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color="#F6F6F6"
                outlined
                class="Btn filter noDesktopBtn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_498_73383)">
                    <path
                      d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                      fill="#666B70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_498_73383">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
            </template>
            <v-card>
              <v-list class="dropdown__list">
                <!-- control -->
                <v-list-item
                  style="padding-top: 12px"
                  class="dropdown__list-item noHover"
                >
                  <v-list-item-title class="tag-title"
                    >Plan Subscription</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
          <div style="width: 100%; max-width: 350px; padding: 0px">
            <div class="input-group">
              <label
                for="searchInput"
                class="input-group-text input-design"
                style="background-color: rgba(246, 246, 246, 1)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_18902)">
                    <path
                      d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                      fill="black"
                      fill-opacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_18902">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </label>
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                class="form-control input-design"
                aria-label="Amount (to the nearest dollar)"
                style="background-color: rgba(246, 246, 246, 1)"
              />
            </div>
          </div>
        </div>

        <div class="row investibox-list mt-5">
          <div class="col-md-6">
            <ExplorInvestiboxItemCard />
          </div>

          <div class="col-md-6">
            <ExplorInvestiboxItemCard />
          </div>

          <div class="col-md-6">
            <ExplorInvestiboxItemCard />
          </div>

          <div class="col-md-6">
            <ExplorInvestiboxItemCard />
          </div>
        </div>
      </div>

      <!--  -->
    </section>
  </v-main>
</template>

<script>
import InvextiboxMenu from "@/components/investibox/InvextiboxMenu.vue";
import ExplorInvestiboxItemCard from "@/components/investibox/ExplorInvestiboxItemCard.vue";
import CategoriesList from "~/components/investibox/CategoriesList.vue";
import WalletBalance from "~/components/dashboard/WalletBalance.vue";
export default {
  components: {
    InvextiboxMenu,
    ExplorInvestiboxItemCard,
    WalletBalance,
    CategoriesList,
  },
  layout: "dashboard",
  data() {
    return {
      dialog: false,
      tabItem: [
        { title: "My Investment", path: "/investibox" },
        { title: "Explore Investment", path: "/investibox/my-investibox" },
        { title: "Completed", path: "/investibox/my-investibox" },
        { title: "Marketplace", path: "/investibox/marketplace" },
      ],
    };
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
  padding: 0 0 20px;
  & > .content__wrapperBox {
    margin: 0 25px;
    border-radius: 16px;
    padding: 30px 40px;
    background-color: #fff;
  }
}
/*  */

.explor-investibox-title {
  margin-bottom: 45px;
}

.explor-investibox-title p {
  color: rgba(51, 57, 64, 1);
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 0px;
}

.explor-investibox-title h2 {
  color: rgba(65, 105, 225, 1);
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
}

.explor-investibox-title .price-icon {
  display: inline-block;
  margin-left: 28px;
  margin-bottom: 5px;
  color: rgba(102, 107, 112, 1);
  cursor: pointer;
}

/* category list */
.explore-investibox-categories-list {
  list-style: none;
  padding: 0px !important;
  margin: 0px !important;
  border-bottom: 1px solid rgba(222, 213, 213, 1);
}

.explore-investibox-categories-list li {
  display: inline-block;
  margin-right: 32px;
  padding-bottom: 7px;
}

.explore-investibox-categories-list li a {
  text-decoration: none;
  color: rgba(153, 156, 159, 1);
  font-weight: 400;
  font-size: 14px;
}

.explore-investibox-categories-list li .active {
  color: rgba(65, 105, 225, 1);
  font-weight: 600;
  font-size: 14px;
}

.row.investibox-list {
  & > .col-md-6 {
    min-height: 17rem;
    padding: 0;
    &:nth-child(2n) {
      padding-bottom: 32px;
    }
    &:nth-child(2n - 1) {
      padding-bottom: 32px;
      padding-right: 32px;
    }
  }
}

.Btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border-radius: 8px;
  min-height: 4rem;
  min-width: 4rem !important;
  width: 4rem !important;
  padding: 0 !important;
  box-shadow: none;
}
</style>
