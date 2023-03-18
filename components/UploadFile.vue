<template>
  <div>
    <div class="fileUpload__wrapper">
      <h3 class="fileUpload__wrapper-header">{{ header }}</h3>
      <span class="fileUpload__wrapper-subtext">
        Make sure the image is clear
      </span>
      <div class="fileUpload__wrapper-uploadArea">
        <div>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="#DDE6FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.368 24.7925C23.782 24.7925 24.118 25.1285 24.118 25.5425C24.118 25.9565 23.782 26.2925 23.368 26.2925H22.435C20.816 26.2925 19.5 27.6085 19.5 29.2265V34.1015C19.5 35.7205 20.816 37.0365 22.435 37.0365H33.565C35.183 37.0365 36.5 35.7205 36.5 34.1015V29.2175C36.5 27.6045 35.188 26.2925 33.576 26.2925H32.633C32.219 26.2925 31.883 25.9565 31.883 25.5425C31.883 25.1285 32.219 24.7925 32.633 24.7925H33.576C36.015 24.7925 38 26.7775 38 29.2175V34.1015C38 36.5475 36.01 38.5365 33.565 38.5365H22.435C19.99 38.5365 18 36.5475 18 34.1015V29.2265C18 26.7815 19.99 24.7925 22.435 24.7925H23.368ZM28.5306 18.2201L31.4466 21.1481C31.7386 21.4421 31.7376 21.9161 31.4446 22.2081C31.1506 22.5001 30.6766 22.5001 30.3846 22.2061L28.749 20.5648L28.7496 31.5394H27.2496L27.249 20.5648L25.6156 22.2061C25.4696 22.3541 25.2766 22.4271 25.0846 22.4271C24.8936 22.4271 24.7016 22.3541 24.5556 22.2081C24.2626 21.9161 24.2606 21.4421 24.5536 21.1481L27.4686 18.2201C27.7496 17.9371 28.2496 17.9371 28.5306 18.2201Z"
              fill="#4169E1"
            />
          </svg>
          <p class="uploadArea__text">
            <span>Click to Upload</span> or drag and drop PDF, PNG, JPG (max.
            2MB)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header"],
};
</script>

<style lang="scss" scoped>
</style>