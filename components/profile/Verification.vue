<template>
  <div class="row">
    <h2 class="col-12">BVN</h2>
    <div class="col-12 col-md-6 p-0 row">
      <div class="col-12 pr-0pr-0">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Add Bvn</label
        >
        <input
          type="text"
          class="form-control input-design dark__input"
          id="exampleFormControlInput1"
          placeholder="Enter Bank Verification Number here"
        />
      </div>
      <div class="col-12 d-flex justify-end pr-0">
        <button
          class="btn btn-primary btn-design"
          @click.prevent="formStep = 2"
        >
          Verify
        </button>
      </div>
      <h2 class="col-12 mt-10 pr-0">KYC Verification</h2>
      <div class="col-12 pr-0">
        <label class="form-label label-design">Means of Identification</label>
        <v-menu v-model="showMenu" offset-y :nudge-bottom="5">
          <template v-slot:activator="{ on, attrs }">
            <div
              :class="{ activeMenu: showMenu }"
              v-bind="attrs"
              v-on="on"
              class="mt-0 relative minitab d-block"
            >
              <input
                style="text-transform: capitalize; color: #000831"
                disabled
                type="text"
                class="form-control input-design"
                v-model="inputVal"
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
          <v-list class="dropdown__list">
            <v-list-item
              :class="{ activeTab: activeTab == index }"
              @click="changeTabs(index)"
              v-for="(item, index) in tabs"
              :key="index"
              class="dropdown__list-item"
            >
              <v-list-item-title class="dropdown__list-title">{{
                item
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="col-12 pr-0">
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="n in 5" :key="n" class="row fileUpload__container">
          <UploadFile header="Front View" class="col-12 col-md-6" />
          <UploadFile header="back View" class="col-12 col-md-6" />
        </v-tab-item>
      </v-tabs-items>
    </div>
    <div class="col-12 col-md-6 pr-0">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Residential Address</label
      >
      <input
        type="text"
        class="form-control input-design"
        id="exampleFormControlInput1"
        placeholder="Enter your current residence address"
      />
    </div>
    <div class="col-12 pr-0 pt-0 d-flex justify-end mt-6">
      <button class="btn btn-primary btn-design">Submit KYC</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      showMenu: false,
      activeTab: 0,
      tabs: [
        "National Identity Card",
        "voters card",
        "drivers liscense",
        "pokemon card",
        "international passport",
      ],
      inputVal: "National Identity Card",
    };
  },
  methods: {
    changeTabs(id) {
      this.activeTab = id;
      this.inputVal = this.tabs[id];
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 2.4rem;
  padding: 0;
  font-weight: 500;
  color: #333940;
  margin-bottom: 0;
}
.btn-design {
  height: 5rem;
  width: 20rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  line-height: normal;
}
@media (max-width: 599px) {
  h2 {
    font-size: 2rem;
  }
  .btn-design {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>