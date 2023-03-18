<template>
  <div class="d-flex justify-content-between investibox-item">
    <div
      class="investibox-image-holder"
      @click="$refs.rightDraw.showPanel()"
      style="background-image: url(/images/temporary/investibox-image.jpg)"
    ></div>

    <div class="flex-grow-1 investibox-info-holder">
      <div class="investibox-info-header">
        <h1 @click="$refs.rightDraw.showPanel()">Poultry Farm, Oyo State</h1>
        <p>12% return on investment</p>
      </div>
      <div class="row">
        <div class="col-6 col-sm-4">
          <div class="investibox-stat-item">
            <h1>₦10,000</h1>
            <p>per Unit</p>
          </div>
        </div>

        <div class="col-6 col-sm-4">
          <div class="investibox-stat-item">
            <h1>12 Months</h1>
            <p>Duration</p>
          </div>
        </div>

        <div class="col-6 col-sm-4">
          <div class="investibox-stat-item">
            <h1>400/500</h1>
            <p>Available Unit</p>
          </div>
        </div>
      </div>
      <div class="investibox-status">
        <span
          class="200 Investors"
          style="
            background-color: rgba(234, 239, 255, 1);
            color: rgba(65, 105, 225, 1);
          "
          >200 Investors</span
        >
        <span class="soldout-investibox">12% ROI</span>
      </div>
    </div>
    <!-- view details right drawer -->
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showDrawer"
      @closeDrawer="showDrawer = false"
    >
      <ExploreInvestiboxDetails />
    </RightDrawer>
  </div>
</template>

<script lang="js">
import RightDrawer from "@/components/assets/RightDrawer.vue";
import ExploreInvestiboxDetails from "@/components/investibox/ExploreInvestiboxDetails.vue";
export default {
 components: {
   RightDrawer,
   ExploreInvestiboxDetails
 },
 data() {
   return {
     showDrawer: false
   };
 },
 methods:{
  showRightDrawer() {
      this.$refs.rightDraw.showPanel();
    },
 }
 // page properties go here
};
</script>

<style scoped>
.investibox-item {
  height: 100%;
  padding: 7px;
  border-radius: 10px;
  border: 1px solid rgba(222, 213, 213, 1);
  background-color: rgba(255, 250, 250, 1);
}

.investibox-image-holder {
  width: 160px;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;
}

.investibox-info-header {
  margin-bottom: 13px;
}

.investibox-info-header h1 {
  color: var(--black2);
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0px;
  cursor: pointer;
  width: max-content;
  transition: all 0.2s ease-in-out;
}
.investibox-info-header h1:hover {
  color: var(--primary-color);
  transition: all 0.2s ease-in-out;
}

.investibox-info-header p {
  color: rgba(153, 156, 159, 1);
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0;
}

.investibox-stat-item h1 {
  color: rgba(51, 57, 64, 1);
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 0px;
}

.investibox-stat-item p {
  color: #999c9f;
  font-weight: 400;
  font-size: 10px;
  margin-bottom: 0;
}

.investibox-info-holder {
  margin: 10px 10px 10px 23px;
}

.investibox-status span {
  background-color: rgba(196, 196, 196, 1);
  font-weight: 400;
  font-size: 12px;
  color: rgba(47, 47, 47, 1);
  padding: 7px 18px;
  border-radius: 26px;
}

.investibox-status .open-investibox {
  background-color: rgba(228, 214, 214, 1);
}

.investibox-status .soldout-investibox {
  background-color: transparent;
  padding: 0;
  padding-left: 8px;
}

.row .col-sm-4 {
  padding-left: 0;
  padding-bottom: 0;
}
.row .col-sm-4:last-child {
  padding-right: 0;
}

.row {
  margin-bottom: 10px !important;
}
</style>
