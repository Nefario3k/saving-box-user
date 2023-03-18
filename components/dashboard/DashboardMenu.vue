<template>
  <ul class="relative menu-list">
    <li class="d-block d-md-none">
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <img src="/images/savingbox-logo.png" alt="" />
          <span style="color: #4169e1; font-size: 2.1rem; font-weight: 600">SavingsBox</span>
        </div>
        <!-- left side bar switch -->
        <v-btn class="Btn" @click="$emit('closePanel')" icon>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 7.5L7.5 22.5" stroke="#0A450A" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M7.5 7.5L22.5 22.5" stroke="#0A450A" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </v-btn>
      </div>
    </li>
    <li>
      <nuxt-link to="/">
        <i class="fa-solid fa-house menu-icon"></i>
        <span>Home</span>
      </nuxt-link>
    </li>

    <li class="">
      <nuxt-link to="/savings">
        <i class="fa-solid fa-piggy-bank menu-icon"></i>
        <span>Savings</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/investibox">
        <i class="fa-solid fa-arrow-up-right-dots menu-icon"></i>
        <span>Investibox</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/loans">
        <i class="fa-solid fa-hand-holding-dollar menu-icon"></i>
        <span>Loans</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/jollifications">
        <i class="fa-solid fa-champagne-glasses menu-icon"></i>
        <span>Jollifications</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/withdrawals">
        <i class="fa-solid fa-box-open menu-icon"></i>
        <span>Withdrawals</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/referrals">
        <i class="fa-solid fa-gift menu-icon"></i>
        <span>Referrals</span>
      </nuxt-link>
    </li>

    <li>
      <nuxt-link to="/profile">
        <i class="fa-solid fa-user menu-icon"></i>
        <span>My Profile</span>
      </nuxt-link>
    </li>

    <!-- <div style="height: 250px"></div> -->

    <li class="">
      <nuxt-link to="/auth/login">
        <i class="fa-solid fa-right-from-bracket menu-icon"></i>
        <span>Logout</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.menu-list {
  list-style-type: none;
  padding: 40px 25px 20px;
  /* height: 100%; */
}

.menu-list li {
  margin-bottom: 18px;
}

.menu-list li a {
  padding: 9px 21px;
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: rgba(153, 156, 159, 1);
  text-decoration: none;
}

.menu-list li a .menu-icon {
  margin-right: 11px;
}

.menu-list li a.nuxt-link-active {
  background-color: rgba(255, 244, 250, 1);
  border-radius: 8px;
  color: rgba(65, 105, 225, 1) !important;
  font-weight: 600;
}

/* .logoutClass {
  bottom: 0;
  margin-bottom: 0 !important;
} */
</style>
