<template>
  <div style="position: relative">
    <!-- <v-overlay :opacity="0.9" :value="showDrawer" @click="closeDrawer()"></v-overlay> -->
    <v-navigation-drawer
      style="z-index: 100"
      v-model="showDrawer"
      :right="true"
      :width="512"
      fixed
      temporary
    >
      <!-- create auto savings form -->
      <v-app-bar
        style="margin-left: 1px"
        color="#fff"
        :elevation="elevation"
        fixed
        :height="50"
      >
        <div class="text-right">
          <svg
            @click="closeDrawer()"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 7.5L7.5 22.5"
              stroke="#FF0000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 7.5L22.5 22.5"
              stroke="#FF0000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </v-app-bar>

      <!-- <div
        class="text-right"
        style="
          position: fixed;
          right: 20px;
          top: 20px;
          background-color: #d3d3d357;
          border-radius: 5px;
        "
      >
        <img
          src="/images/icons/close.svg"
          alt=""
          class="close-right-drawer"
          @click="closeDrawer()"
        />
      </div> -->

      <div
        @scroll="handleScroll"
        ref="myDiv"
        class="mt-2 right-drawer-container"
      >
        <slot></slot>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="js">
export default {
  // components: { SavingsItem },
  data() {
    return {
      showDrawer: false,
       elevation: 0,
      width: 512,
    };
  },
   mounted() {
    var nx = window.innerWidth;
    if (nx <= 540) {
      this.width = "100vw";
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 540) {
        this.width = "100vw";
      } else {
        this.width = 512;
      }
    });
  },
  methods: {
    closeDrawer() {
       this.showDrawer = false;
    },
     showPanel() {
      this.showDrawer = true;
    },
     handleScroll() {
      const myDiv = this.$refs.myDiv;
      const heightScrolled = myDiv.scrollTop;
      // const initialHeight = myDiv.scrollHeight;
      if (heightScrolled > 0) {
        this.elevation = 2;
      } else {
        this.elevation = 0;
      }
    },
  }
};
</script>

<style scoped lang="scss">
.text-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
}
/*  */
</style>
