<template>
  <div>
    <div class="col-12">
      <label for="bank" class="form-label label-design"> Bank Statement </label>
      <div
        style="
          box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
          border-radius: 8px;
        "
        class="input-group"
      >
        <label for="bank" class="input-group-text input-design dark__input"
          ><v-icon>mdi-tray-arrow-up</v-icon></label
        >
        <input
          id="bank"
          type="file"
          class="form-control dark__input singleInput"
        />
      </div>
    </div>

    <div class="col-12">
      <label for="passpwrt" class="form-label label-design">
        Passport Photograph
      </label>
      <div
        style="
          box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
          border-radius: 8px;
        "
        class="input-group"
      >
        <label for="bank" class="input-group-text input-design dark__input"
          ><v-icon>mdi-tray-arrow-up</v-icon></label
        >
        <input
          type="file"
          class="form-control dark__input singleInput"
          id="passpwrt"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.col-12 {
  padding-right: 0;
}
</style>