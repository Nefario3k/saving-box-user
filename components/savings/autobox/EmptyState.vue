<template>
  <div class="savings-empty-state">
    <h1>No savings found</h1>
    <p>When you have savings they will show here</p>
  </div>
</template>

 <script lang="js">
export default {
  data() {
    return {
    };
  },
  // page properties go here
};
</script>

<style scoped>
.savings-empty-state {
    max-width: 357px;
    margin: auto;
    margin-top: 127px;
}

.savings-empty-state h1 {
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: rgba(102, 107, 112, 1);
}

.savings-empty-state p {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: rgba(102, 107, 112, 1);
}
</style>
