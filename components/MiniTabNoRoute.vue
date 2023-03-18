<template>
  <div>
    <v-menu v-model="showMenu" offset-y :nudge-bottom="3">
      <template v-slot:activator="{ on, attrs }">
        <div
          :class="{ activeMenu: showMenu }"
          v-bind="attrs"
          v-on="on"
          class="minitab relative"
        >
          <input
            style="
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid #d8d8d8;
            "
            disabled
            type=""
            name=""
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
          @click="$emit('changeTabs', index)"
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
</template>

<script>
export default {
  props: ["tabs", "activeTab", "inputVal"],
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>