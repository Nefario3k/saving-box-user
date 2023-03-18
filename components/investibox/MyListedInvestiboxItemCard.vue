<template>
  <div>
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
          <div class="col-4">
            <div class="investibox-stat-item">
              <h1>₦10,000</h1>
              <p>per Unit</p>
            </div>
          </div>

          <div class="col-4">
            <div class="investibox-stat-item">
              <h1>12 Months</h1>
              <p>Duration</p>
            </div>
          </div>

          <div class="col-4">
            <div class="investibox-stat-item">
              <h1>400/500</h1>
              <p>Available Unit</p>
            </div>
          </div>
        </div>
        <div class="simple-card-progress">
          <v-progress-linear
            rounded
            value="50"
            height="8px"
            background-color="#E3E3E3"
            color="#61CA61"
          ></v-progress-linear>
          <div class="d-flex justify-content-between">
            <small class="text-left">2% Completed</small>
            <small class="text-right">5 Weeks Remaining</small>
          </div>
        </div>
      </div>
    </div>

    <!-- view details right drawer -->
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showDrawer"
      @closeDrawer="showDrawer = false"
    >
      <MyListedInvestiboxDetails />
    </RightDrawer>
  </div>
</template>

<script lang="js">
import RightDrawer from "@/components/assets/RightDrawer.vue";
import MyListedInvestiboxDetails from "@/components/investibox/MyListedInvestiboxDetails.vue";
export default {
    components: {
        RightDrawer,
        MyListedInvestiboxDetails
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
.investibox-item {
  height: 170px;
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
  color: rgba(65, 105, 225, 1);
  font-weight: 600px;
  font-size: 18px;
  margin-bottom: 0px;
  cursor: pointer;
}

.investibox-info-header p {
  color: rgba(0, 0, 0, 1);
  font-weight: 400px;
  font-size: 14px;
}

.investibox-stat-item h1 {
  color: rgba(0, 0, 0, 1);
  font-weight: 500px;
  font-size: 14px;
}

.investibox-stat-item p {
  color: rgba(0, 0, 0, 1);
  font-weight: 400px;
  font-size: 10px;
  margin-bottom: 0px;
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
  background-color: rgba(255, 225, 225, 1);
}
</style>
