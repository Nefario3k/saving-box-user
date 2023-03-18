<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="true"
    fixed
    app
    :width="width"
    :mobile-breakpoint="1260"
    class="custom-scroller"
  >
    <DashboardMenu @closePanel="drawer = false" />
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      width: 240,
    };
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 1259) {
      this.drawer = false;
      this.width = 262;
    } else {
      this.drawer = true;
      this.width = 240;
    }
    if (nx <= 540) {
      this.width = "100vw";
    } else {
      this.width = 240;
    }

    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx >= 1259) {
        this.width = 262;
      } else if (nx <= 540) {
        this.width = "100vw";
      } else {
        this.width = 240;
      }
    });
  },
  methods: {
    showPanel() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

