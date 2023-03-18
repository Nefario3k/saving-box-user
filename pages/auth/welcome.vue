<template>
  <section class="container-fluid" data-app>
    <div class="welcome-logo-section" style="margin: 49px 0px 66px 52px">
      <h1 style="color: rgba(128, 128, 128, 1); font-size: 30px">SAVINGSBOX</h1>
    </div>

    <div class="container wellcome-page-content">
      <div class="wellcome-page-header">
        <h1>Welcome, John Doe</h1>
        <p>What do you want to do first?</p>
      </div>

      <div class="d-flex flex-wrap justify-content-around">
        <WelcomeItem title="Dashboard" description="Visit your Dashboard Now" linkTo="/">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>

        <WelcomeItem title="Savings" description="Start saving now" linkTo="/savings">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>

        <WelcomeItem title="Investibox" description="Build wealth and Portfolio" linkTo="/investibox">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>

        <WelcomeItem title="Loans" description="Start your loan application" linkTo="/loans">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>

        <WelcomeItem title="Jollification" description="Prepare for better time" linkTo="/jollification">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>

        <WelcomeItem title="My Profile" description="Prepare for better time" linkTo="/profile">
          <template v-slot:tooltip-content>
            <p>
              Savingsbox will have 5 types of savings that users can select from
              when creating a savings plan. The description of the savings types
              should be shown to the user every time they want to create a
              savings plan. The types of savings are:
            </p>
            <ol>
              <li>Auto Savings (now Auto Box)</li>
              <li>Target Savings (now Target Box)</li>
              <li>Simple Savings (now Simple Box)</li>
              <li>Safe Lock (now Safe Box)</li>
            </ol>
          </template>
        </WelcomeItem>
      </div>



      <div class="wellcome-page-footer d-flex justify-content-between">
        <div class="wellcome-page-footer-left">
          <span>Need Help? </span>
          <nuxt-link to="/contact-us">Contact Us</nuxt-link>
        </div>

        <div class="wellcome-page-footer-righ">
          <nuxt-link to="/">Skip Now</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
    

<script>
import WelcomeItem from "@/components/assets/WelcomeItem.vue";
export default {
  components: { WelcomeItem },
  layout: "auth",
  data() {
    return {};
  },
  // page properties go here
};
</script>
  
<style>
.wellcome-page-header {
  margin-bottom: 52px;
}

.wellcome-page-header h1 {
  font-weight: 700;
  font-size: 40px;
  line-height: 32.65px;
  color: rgba(65, 105, 225, 1);
}

.wellcome-page-header p {
  font-weight: 500;
  font-size: 18px;
  line-height: 32.65px;
  color: rgba(0, 8, 49, 1);
}

/* .wellcome-page-content {
  padding-left: 200px;
  padding-right: 200px;
} */

.v-tooltip__content {
  background: rgb(251, 251, 251);
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 10px;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.05);
  opacity: 1 !important;
}

/* footer */
</style>