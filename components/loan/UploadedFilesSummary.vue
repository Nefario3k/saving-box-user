<template>
  <div class="upload-summary mb-6 py-4 px-8">
    <div
      v-for="file in uploadedFiles"
      :key="file.name"
      class="d-flex justify-space-between align-center"
    >
      <p class="pa-0 ma-0">{{ file.name }}</p>
      <img
        src="images/icons/success-check-green.png"
        alt="upload succeeded icon"
        width="15px"
      />
    </div>
    <!-- <div class="d-flex justify-space-between align-center">
            <p class="pa-0 ma-0">Passport Photograph</p>
            <img src="images/icons/success-check-green.png" alt="upload succeeded icon" width="15px">
        </div> -->
  </div>
</template>
<script>
export default {
  props: ["uploadedFiles"],
};
</script>
<style lang="scss" scoped>
.upload-summary {
  border: 1px solid #d0d0d0;
  border-radius: var(--normal-radius);
  display: flex;
  flex-direction: column;
  align-content: center;
  grid-gap: 20px;
  background: #f9faff;
}
</style>