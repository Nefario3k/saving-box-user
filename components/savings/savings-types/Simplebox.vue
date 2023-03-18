<template>
  <div class="savings-type">
    <div class="right-drawer-title mb-0">
      <h1>SimpleBox Overview</h1>
      <p>Here are the plan details and what you need to know</p>
    </div>

    <div class="saving-type-details-description">
      <h1>First way:</h1>

      <p>
        You save a specific amount monthly for 6 months and then gets half of
        that amount added to their savings as interest. For example, the user
        saves 20000 Naira monthly for 6 months and then gets 10000 Naira as
        interest at the end of the 6 months.
      </p>

      <h1>Second way:</h1>
      <p>
        You save a specific amount monthly for 12 months and then gets 100% of
        that amount added to their savings as interest. For example, the user
        saves 20000 Naira monthly for 12 months and then gets 20000 Naira as
        interest at the end of the 12 months.
      </p>
    </div>
    <div style="margin-top: 130px">
      <v-btn to="/savings/simplebox" class="btn btn-primary btn-design">
        Continue
      </v-btn>
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

<style scoped lang="scss">
.btn-design {
  height: 5rem !important;
  border-radius: 8px !important;
  background-color: var(--primary-color) !important;
  font-weight: 600 !important;
  font-size: 1.8rem !important;
  box-shadow: none !important;
  text-transform: capitalize;
}
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
