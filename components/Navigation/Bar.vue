<template>
  <v-app-bar
    :clipped-left="true"
    elevate-on-scroll
    :elevation="2"
    fixed
    :height="75"
    style="padding: 0 4px"
    app
  >
    <!-- logo -->
    <div class="d-none d-md-block">
      <img src="/images/savingbox-logo.png" alt="" />
      <span style="color: #4169e1; font-size: 2.1rem; font-weight: 600"
        >SavingsBox</span
      >
      <!-- left side bar switch -->
      <v-btn icon @click.stop="showNavigation">
        <v-icon style="color: rgba(65, 105, 225, 1)"
          >mdi-{{ `chevron-${drawer ? "left" : "right"}` }}</v-icon
        >
      </v-btn>
    </div>
    <div class="d-block d-md-none me-2">
      <v-icon style="font-size: 3.5rem" @click.stop="$emit('showNav')"
        >mdi-menu</v-icon
      >
    </div>

    <!-- greetings -->
    <div class="greeting d-flex flex-column ml-0 ml-sm-4 ml-md-9">
      <span class="user-greeting">Good Morning</span>
      <span class="user-name"> John Doe</span>
    </div>

    <!-- <v-toolbar-title v-text="clipped" /> -->

    <v-spacer />

    <!-- notification  -->
    <span class="notification-icon-container" @click="$emit('showSideNoti')">
      <!-- <i class="fa-regular fa-bell notification-icon"></i> -->
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.0598 11.2118C8.45273 7.6754 11.4419 5 15 5V5C18.5581 5 21.5473 7.6754 21.9402 11.2118L22.2549 14.0445C22.3069 14.5123 22.3329 14.7462 22.3721 14.9758C22.5128 15.8011 22.7822 16.5993 23.1705 17.3411C23.2785 17.5475 23.3995 17.7492 23.6417 18.1528L24.4326 19.471C25.2384 20.8139 25.6412 21.4854 25.354 21.9927C25.0668 22.5 24.2837 22.5 22.7176 22.5H7.28238C5.71627 22.5 4.93322 22.5 4.64599 21.9927C4.35876 21.4854 4.76164 20.8139 5.5674 19.471L6.35832 18.1528C6.60046 17.7492 6.72153 17.5475 6.82954 17.3411C7.21781 16.5993 7.48722 15.8011 7.62794 14.9758C7.66709 14.7462 7.69308 14.5123 7.74505 14.0445L8.0598 11.2118Z"
          stroke="#4169E1"
          stroke-width="2"
        />
        <path
          d="M11.3778 23.0073C11.5914 23.9376 12.0622 24.7596 12.7171 25.3459C13.3721 25.9322 14.1745 26.25 15 26.25C15.8255 26.25 16.6279 25.9322 17.2829 25.3459C17.9378 24.7596 18.4086 23.9376 18.6222 23.0073"
          stroke="#4169E1"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <span class="notification-available"></span>
    </span>
    <!-- user list  -->

    <v-menu :nudge-bottom="9" :min-width="272" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-items-center" v-bind="attrs" v-on="on">
          <div class="user-icon-container">
            <img src="/images/temporary/profile.jpg" alt="" />
          </div>
          <div class="adminName">
            <span>John Doe</span>
            <i
              class="fa-solid fa-chevron-down"
              style="font-size: 1.7rem !important"
            ></i>
          </div>
        </div>
      </template>
      <v-list class="dropdown__list nav__list">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          :to="item.link"
          class="dropdown__list-item"
        >
          <v-list-item-icon>
            <!-- <v-icon v-text="item.icon"></v-icon> -->
            <i :class="item.icon"></i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="dropdown__list-title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "My Profile",
          icon: "fa-solid fa-user menu-icon",
          link: "profile",
        },
        {
          title: "My Savings",
          icon: "fa-solid fa-piggy-bank menu-icon",
          link: "savings",
        },
        {
          title: "Investment",
          icon: "fa-solid fa-arrow-up-right-dots menu-icon",
          link: "investibox",
        },
        {
          title: "Jollification",
          icon: "fa-solid fa-champagne-glasses menu-icon",
          link: "jollifications",
        },
        {
          title: "Loan",
          icon: "fa-solid fa-hand-holding-dollar menu-icon",
          link: "loans",
        },
        {
          title: "Referrals",
          icon: "fa-solid fa-gift menu-icon",
          link: "referrals",
        },
        {
          title: "Log Out",
          icon: "fa-solid fa-right-from-bracket menu-icon",
          link: "",
        },
      ],
    };
  },
  methods: {
    showNavigation() {
      this.$emit("showNav");
      this.drawer = !this.drawer;
    },
  },
};
</script>
