<template>
  <div class="savings-type">
    <h1 class="right-drawer-title">AutoBox Details</h1>

    <div class="row saving-type-details-stat-list">
      <div class="col-4 saving-type-details-stat-item">
        <h3>Active Savings</h3>
        <p>4</p>
      </div>

      <div class="col-4 saving-type-details-stat-item">
        <h3>Completed</h3>
        <p>4</p>
      </div>

      <div class="col-4 saving-type-details-stat-item">
        <h3>Liquidated</h3>
        <p>4</p>
      </div>
      <hr />
    </div>

    <div class="saving-type-details-description">
      <p>
        This is a general savings plan that allows users to save based on their
        preferences. The user decides how long they want to save for, how much
        they want to save and how frequent they want to be making payments.
      </p>

      <p>
        A user can choose to save 500 Naira and above daily, weekly, or yearly
        for a period of 3 months to two years.
      </p>

      <p>
        The user must provide the following information details before they can
        join this plan:
      </p>

      <ul>
        <li>Amount (min of 500 Naira)</li>
        <li>Frequency (daily, weekly, monthly, yearly)</li>
        <li>Period etc.</li>
      </ul>

      <h1>Interest</h1>

      <ol>
        <li>Interest is 10% of all payments that were paid on time</li>
        <li>All late payments will not be used to calculate interest</li>
      </ol>

      <h1>Liquidation of Savings</h1>

      <ol>
        <li>The user will lose accrued interest on savings.</li>
        <li>The user will lose 1.5% of the total amount saved.</li>
        <li>
          On completion or liquidation of the savings plan, money should be
          deposited in the user’s Savingsbox wallet
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="js">
export default {
  components: {
  },
  data() {
    return {
      showDrawer: false
    };
  },
  // page properties go here
};
</script>

<style scoped>
.savings-type p {
  font-weight: 400px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 15px;
}

.saving-type-details-stat-list {
  margin-top: 27px;
}

.saving-type-details-stat-item h3 {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 33.54px; */
  color: rgba(128, 128, 128, 1);
}

.saving-type-details-stat-item p {
  font-weight: 600;
  font-size: 18px;
  /* line-height: 33.54px; */
  color: var(--primary-color);
  margin-bottom: 18px;
}

.saving-type-details-description {
  margin-top: 20px;
}

.saving-type-details-description p {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 24px; */
  color: rgba(51, 51, 51, 1);
}

.saving-type-details-description ul li {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 24px; */
  color: rgba(51, 51, 51, 1);
}

.saving-type-details-description ol li {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 24px; */
  color: rgba(51, 51, 51, 1);
}

.saving-type-details-description h1 {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 28px;
  color: rgba(51, 51, 51, 1);
}
</style>
