<template>
  <div class="investibox-tab-menu-design">
    <ul style="background-color: #f5f8ff">
      <li>
        <nuxt-link to="/investibox">My Investment</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/investibox/my-investibox">Explore Investment</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/investibox/my-investibox">Completed</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/investibox/marketplace">Marketplace</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.investibox-tab-menu-design ul {
  max-width: 635px;
  list-style-type: none;
  background-color: #ffeaf5;
  border-radius: 10px;
  padding: 4px !important;
  overflow: hidden;
  margin-bottom: 31px;
}

.investibox-tab-menu-design ul li {
  display: inline-block;
}

.investibox-tab-menu-design ul li a {
  display: block;
  padding: 13px 26.6px;
  background-color: transparent;
  text-decoration: none;
  color: rgba(153, 156, 159, 1);
  font-weight: 400;
  font-size: 14px;
  border-radius: 8px !important;
}

.investibox-tab-menu-design ul li a.nuxt-link-exact-active {
  background-color: rgb(255, 255, 255);
  color: rgba(65, 105, 225, 1) !important;
  font-weight: 600;
  font-size: 14px;
}
</style>
