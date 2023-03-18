<template>
  <div class="col-12 col-md-7 wallet-amount">
    <span class="wallet-title">{{ text }}</span>
    <p class="d-flex align-center">
      <span class="mr-4" :style="{ color: amountColor }">
        {{ showAmount ? "₦ 340,598,980" : "************" }}
      </span>
      <v-icon @click="showAmount = !showAmount" style="font-weight: bold">
        {{ showAmount ? "mdi-eye-off-outline" : "mdi-eye-outline" }}
      </v-icon>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    amountColor: { Type: String, default: "black" },
    text: { Type: String },
  },
  data() {
    return {
      showAmount: true,
    };
  },
};
</script>
<style lang="scss" scoped>
div.wallet-amount {
  .wallet-title {
    font-size: 1.8rem;
    color: #333940;
  }

  p {
    margin: 0px;
    font-size: 3.5rem;
    font-weight: 600;

    img {
      cursor: pointer;
    }
  }
}
</style>