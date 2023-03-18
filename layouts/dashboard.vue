<template>
  <v-app color="#fff">
    <NavigationPanel ref="panel" />
    <!-- app bard -->
    <NavigationBar @showNav="showNav" @showSideNoti="showRightDrawer" />

    <!-- page content -->

    <Nuxt />

    <RightDrawer
      ref="rightDraw"
      :showDrawer="showNotifications"
      @closeDrawer="showNotifications = false"
    >
      <Notifications />
    </RightDrawer>
  </v-app>
</template>

<script>
import RightDrawer from "~/components/assets/RightDrawer.vue";
import Notifications from "@/components/dashboard/Notifications.vue";
export default {
  components: {
    RightDrawer,
    Notifications,
  },
  data() {
    return {
      showNotifications: false,
      faIcon: "fa-solid fa-gift menu-icon",
      title: "Vuetify.js",
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
    showNav() {
      this.$refs.panel.showPanel();
    },
    showRightDrawer() {
      this.$refs.rightDraw.showPanel();
    },
  },
  head: {
    script: [
      {
        src: "/scripts/jquery-3.3.1.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },
};
</script>

<style lang="scss">
.adminName {
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    font-weight: 500;
    font-size: 1.8rem;
    color: var(--black2);
  }
}
/* left nav */
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff;
}

.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating)
  .v-navigation-drawer__border {
  background-color: rgba(0, 0, 0, 0);
}

/* Scroller start */

/* width */
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 7px !important;
}

/* Track */
.v-navigation-drawer__content::-webkit-scrollbar-track {
  background: rgba(255, 234, 245, 1) !important;
}

/* Handle */
.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background: rgba(65, 105, 225, 1) !important;
  border-radius: 10px;
}

/* Handle on hover */
.v-navigation-drawer__content::-webkit-scrollbar-thumb:hover {
  background: #555 !important;
}

/* scroller end */
div.greeting {
  line-height: 2.5rem;

  .user-greeting {
    color: #666b70;
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 0;
    /* margin-left: 30px; */
  }

  .user-name {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 2rem;
    /* margin-left: 10px; */
  }
}

.notification-icon-container {
  background-color: #fff4fa;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 19px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  position: relative;
  svg {
    margin-top: -10px;
  }
}

.notification-icon {
  font-size: 25px;
}

.notification-available {
  padding: 6px;
  background-color: red;
  border-radius: 10px;
  position: absolute;
  top: 3px;
  right: 0px;
}

.user-icon-container {
  background-color: #dde6ff;
  border-radius: 50%;
  box-shadow: 0px 4px 5px 4px rgba(0, 0, 0, 0.04);
  border: 4px solid white;
  margin-right: 10px;
  cursor: pointer;
  width: 56px;
  height: 56px;
  overflow: hidden;
}

.user-icon-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

div.v-list-item__title {
  /* color: red !important; */
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #666b70;
}

@media screen and (max-width: 800px) {
  /* scroller end */
  div.greeting {
    line-height: 1.5rem;

    .user-greeting {
      color: rgba(102, 107, 112, 1);
      font-weight: 400;
      font-size: 1rem;
      /* margin-left: 30px; */
    }

    .user-name {
      color: rgba(65, 105, 225, 1);
      font-weight: 600;
      font-size: 1.2rem;
      /* margin-left: 10px; */
    }
  }

  .notification-icon-container {
    width: 30px;
    height: 30px;
    margin-right: 21px;
    padding-top: 5px;
    position: relative;
    svg {
      width: 20px;
      height: 20px;
      margin-top: -5px;
    }
  }

  .notification-icon {
    font-size: 20px;
  }

  .notification-available {
    padding: 3px;
    top: -1px;
    right: 5px;
  }

  .user-icon-container {
    border-width: 2px;
    width: 3.4rem;
    height: 3.4rem;
  }

  div.v-list-item__title {
    /* color: red !important; */
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #666b70;
  }
}
</style>