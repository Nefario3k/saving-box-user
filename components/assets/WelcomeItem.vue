<template>
  <div class="wellcome-qick-item">
    <a
      href=""
      class="wellcome-qick-item-title"
      @click.prevent="$router.push({ path: linkTo })"
    >
      {{ title }}
    </a>
    <v-tooltip right color="primary">
      <template v-slot:activator="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          src="/images/icons/info.svg"
          class="wellcome-qick-item-info"
          alt=""
        />
      </template>
      <div class="wellcome-qick-item-tip">
        <slot name="tooltip-content"></slot>
      </div>
    </v-tooltip>
    <p>{{ description }}</p>
    <a href="" @click.prevent="$router.push({ path: linkTo })">
      <img
        src="/images/icons/arrow-right.svg"
        class="wellcome-qick-item-arrow"
        alt=""
      />
    </a>
  </div>
</template>

 <script lang="js">
export default {
  props: ['title', 'description', 'linkTo'],
  data() {
    return {
      // showDrawer: 'asdasdasd',
    };
  },
};
</script>

<style scoped>
.wellcome-qick-items-list {
  /* display: flex; */
}

.wellcome-qick-item {
  display: inline-block;
  position: relative;
  background-color: rgba(243, 241, 241, 1);
  border: 1px solid rgba(65, 105, 225, 1);
  border-radius: 10px;
  padding: 20px 17px 10px 33px;
  width: 300px;
  height: 108px;
  margin-right: 49px;
  margin-bottom: 49px;
}

.wellcome-qick-item-title {
  font-weight: 600;
  font-size: 25px;
  line-height: 35.13px;
  color: rgba(0, 8, 49, 1);
  text-decoration: none;
  color: rgba(65, 105, 225, 1);
}

.wellcome-qick-item-info {
  width: 16.67px;
  height: 16.67px;
  margin-left: 23px;
  margin-bottom: 10px;
  cursor: pointer;
}

.wellcome-qick-item p {
  font-weight: 400px;
  font-size: 16px;
  line-height: 20px;
  color: rgba(102, 107, 112, 1);
}

/* tool tip */
.wellcome-qick-item-arrow {
  width: 8px;
  height: 20px;
  color: rgba(0, 8, 49, 1);
  position: absolute;
  top: 45px;
  right: 30px;
}

.wellcome-qick-item-tip {
  width: 338px;
  height: auto;
  color: black;
  padding: 10px;
  margin: 0;
}

@media all and (max-width: 951px) {
  .wellcome-qick-item {
    width: 100%;
    height: 108px;
    margin-right: 0px;
    margin-bottom: 17px;
  }
}
</style>
