<template>
  <v-app id="inspire">
    <v-card>
      <v-toolbar v-resize="onResize" color="deep-purple accent-4" dark flat>
        <v-tabs
          v-model="currentItem"
          fixed-tabs
          slider-color="white"
          justify-end
          row
          wrap
        >
          <v-tab v-for="item in tabs" :key="item" :href="'#tab-' + item">
            {{ item }}ss
          </v-tab>

          <v-menu v-if="more.length" bottom left>
            <template v-slot:activator="{ on }">
              <v-btn text class="align-self-center mr-4" v-on="on">
                more
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </v-toolbar>

      <v-tabs-items v-model="currentItem">
        <v-tab-item
          v-for="item in items.concat(more)"
          :key="item"
          :value="'tab-' + item"
        >
          <v-card flat>
            <v-card-text>
              <h2>{{ item }}</h2>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      currentItem: "tab-Web",
      items: [
        "Web",
        "Shopping",
        "Videos",
        "Images",
        "Tab 5",
        "Tab 6",
        "Tab 7",
        "Tab 8",
        "Tab 9",
        "Tab 10",
        "News",
        "Maps",
        "Books",
        "Flights",
        "Apps",
      ],
      tabs: [],
      more: [],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    addItem(item) {
      const removed = this.tabs.splice(this.tabs.length - 1, 1);
      this.tabs.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
    onResize() {
      const temp = this.items.slice();
      this.tabs = temp.splice(0, window.innerWidth / 100 - 1);
      this.more = temp.splice(0);
    },
  },
  // page properties go here
};
</script>

<style scoped>
.tab-menu-design ul li a.nuxt-link-exact-active {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  color: rgba(65, 105, 225, 1) !important;
  font-weight: 600;
  font-size: 14px;
}
</style>
