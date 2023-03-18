<template>
  <v-main>
    <section class="dashboard-content">
      <div class="content__wrapperBox heightened">
        <div class="col-md-12">
          <section class="dashboard-title">
            <h1>My Referrals</h1>
            <p>
              List of all your referrals who joined and completed tasks through
              your link
            </p>
          </section>
          <div class="total-earned">
            <p>Total Earned: <span class="earned-amount">₦1,500</span></p>
          </div>
          <div class="table-container">
            <v-data-table
              :disable-sort="true"
              :hide-default-footer="true"
              :headers="headers"
              :items="referral"
              :items-per-page="5"
              :mobile-breakpoint="960"
              class="elevation-0 records-table"
            >
              <!-- user details  -->
              <template v-slot:item.transaction="{ item }">
                <div class="user_content">
                  <div class="user_content_details">
                    <p>{{ item.transaction }}</p>
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
                    <p>{{ item.recipient }}</p>
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

              <!-- <template v-slot:default>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Commission</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in [1, 2]" :key="item">
                    <td>Maxwell</td>
                    <td>Joe</td>
                    <td>₦1,500</td>
                    <td>22 Sept 2022</td>
                  </tr>
                </tbody>
              </template> -->
            </v-data-table>
          </div>
        </div>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  layout: "dashboard",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "First Name",
          align: "start",
          sortable: false,
          value: "transaction",
        },
        { text: "Last Name", value: "amount" },
        { text: "Commission", value: "recipient" },
        { text: "Date", value: "created_at" },
      ],
      referral: [
        {
          transaction: "Maxwell ",
          amount: "Michael",
          recipient: "₦500",
          created_at: "22, Sept. 2022",
        },
        {
          transaction: "Bola ",
          amount: "Ahmed",
          recipient: "₦1500",
          created_at: "22, Sept. 2022",
        },
      ],
    };
  },
  // page properties go here
};
</script>

<style lang="scss" scoped>
.v-main {
  div.total-earned {
    margin-top: 3.5rem;

    span.earned-amount {
      color: var(--primary-color);
      font-weight: 700;
    }
  }
}
section.dashboard-title {
}
section.dashboard-content {
  background: transparent;
  padding: 0 0 20px;
  & > .content__wrapperBox {
    margin: 0 25px;
    border-radius: 16px;
    // padding: 31px 32px;
    background-color: #fff;
    & > .col-md-12 {
      padding: 31px 32px;
    }
    &.heightened {
      min-height: 76.6rem;
    }
  }
}
@media (max-width: 599px) {
  section.dashboard-content {
    section.dashboard-title {
      padding: 0 !important;
    }
    & > .content__wrapperBox {
      padding: 17px 21px !important;
      & > .col-md-12 {
        padding: 0 !important;
      }
    }
  }
}
</style>
