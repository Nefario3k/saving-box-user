<template>
  <div>
    <v-menu v-model="showMenu" offset-y :nudge-bottom="5">
      <template v-slot:activator="{ on, attrs }">
        <div
          :class="{ activeMenu: showMenu }"
          v-bind="attrs"
          v-on="on"
          class="minitab relative"
        >
          <input disabled type="" name="" :value="currentPage().currentValue" />
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
        <nuxt-link :to="item.path" v-for="(item, index) in tabs" :key="index">
          <v-list-item class="dropdown__list-item">
            <v-list-item-title class="dropdown__list-title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    currentPage() {
      var currentValue = "";
      this.tabs.forEach((element) => {
        if (element.path == this.$route.path) {
          currentValue = element.title;
        }
      });
      return {
        currentValue: currentValue,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>