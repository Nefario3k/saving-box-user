<template>
  <v-main>
    <section class="dashboard-content">
      <div class="loanTypeRow row">
        <div class="col-12 row__header">
          <h1>Jollification</h1>
          <p>
            Enjoy stress-free December celebrations. It is an 11-monthly
            contribution that converts to items that will be used for December
            celebrations, items like bags of rice, meat, tomatoes, clothes etc.
          </p>
        </div>

        <!-- tab -->
        <!-- <div class="autobox-card-section"> -->
        <div class="col-12 col-md-7">
          <div class="autobox-card-section">
            <v-tabs
              center-active
              v-model="jollificationsTab"
              background-color="transparent"
              color="basil"
              grow
              class="v-tabs-styles"
            >
              <v-tab :ripple="false"> Explore</v-tab>

              <v-tab :ripple="false"> My Jolly Plan </v-tab>

              <v-tab :ripple="false"> Gifted Plan </v-tab>
            </v-tabs>
          </div>
        </div>

        <div class="col-12">
          <h3 class="tab-heading" style="font-weight: 600">
            Available Jolly Plan
          </h3>
        </div>

        <div class="col-12 col-md-7">
          <div class="autobox-card-section">
            <v-tabs-items
              v-model="jollificationsTab"
              class="v-tabs-items-styles"
            >
              <v-tab-item>
                <JollificationCard @click="showJolliDetails = true" /> <br />
                <JollificationCard /> <br />
                <JollificationCard />
              </v-tab-item>

              <v-tab-item>
                <JollificationCard />
              </v-tab-item>

              <v-tab-item>
                <JollificationCard />
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="invoice-card">
            <h1 class="invoice-card-title">Recent</h1>

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
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import JollificationCard from "~/components/jollifications/JollificationCard.vue";
export default {
  layout: "dashboard",
  components: {
    InvoiceCard,
    JollificationCard,
  },
  data() {
    return {
      jollificationsTab: null,
      paymentTab: null,
      showJolliDetails: false,
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
    & > .col-md-7 {
      padding-bottom: 20px;
      &:nth-child(2) {
        padding-bottom: 0px;
      }
    }
  }
}
h3.tab-heading {
  padding: 1.1rem 0rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: #333940;
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

.v-window.v-tabs-items-styles.v-item-group.theme--light.v-tabs-items {
  padding: 0;
}
</style>
