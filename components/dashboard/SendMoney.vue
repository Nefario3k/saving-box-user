<template>
  <div>
    <section class="" v-if="step == 1">
      <div class="right-drawer-title" :class="{ 'mb-2': recipientSet }">
        <h1 class="">Send Money</h1>
        <p>Transfer money to family and friends</p>
      </div>
      <div class="col-12 pt-0">
        <template v-if="!recipientSet">
          <label for="exampleFormControlInput1" class="form-label label-design"
            >Recipient Username</label
          >
          <div class="input-group">
            <input
              type="text"
              placeholder="Recipient ID"
              v-model="recipient"
              class="form-control input-design lefting"
              aria-label="Recipient Wallet ID"
            />
          </div>
        </template>
        <div
          class="recipient"
          :class="{ 'border-0': recipientSet }"
          v-if="recipient != ''"
        >
          <div
            style="cursor: pointer"
            @click.prevent="recipientSet = true"
            class="w-100 d-flex"
          >
            <img
              src="/images/temporary/profile.jpg"
              alt="recipient profile image"
            />
            <div class="ml-2">
              <p class="full-name">John Doe Michael</p>
              <p>@Johndoe</p>
            </div>
          </div>
          <div v-if="recipientSet">
            <button @click="recipientSet = false">Change</button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Enter Amount</label
        >
        <div
          style="
            box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
            border-radius: 8px;
          "
          class="input-group mb-3"
        >
          <label
            style="background-color: #fff4fa"
            for="savingsInput"
            class="input-group-text input-design"
          >
            <!-- ₦ -->
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.304 12V0.12H5.13L8.856 6.942L9.882 9.012H9.918L9.846 7.14V0.12H12.006V12H9.18L5.526 5.358L4.428 3.162H4.41L4.464 5.106V12H2.304ZM0.306 6.834V5.268H14.004V6.834H0.306Z"
                fill="#666B70"
              />
            </svg>
          </label>
          <input
            id="savingsInput"
            type="text"
            class="form-control input-design"
            aria-label="Amount (to the nearest naira)"
          />
        </div>
      </div>
      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="step++">
          Send
        </button>
      </div>
    </section>
    <!-- step 2 -->
    <success-screen
      v-if="step == 2"
      title="Successful!"
      body="You just sent 20,000 Naira to @johndoe Successfully."
      link="Back to Dashboard"
    />
  </div>
</template>
<script>
import SuccessScreen from "@/components/loan/form/SuccessScreen.vue";
export default {
  components: { SuccessScreen },
  data() {
    return {
      recipient: "",
      recipientSet: false,
      step: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
div.recipient {
  display: flex;
  justify-content: space-between;
  border: 1px solid #f1f1f1;
  border-radius: 0px 0px 8px 8px;
  border-top: 0;
  margin-top: -4px;
  padding: 2.2rem 1.9rem;

  p {
    padding: 0px;
    margin: 0px;

    &.full-name {
      font-size: 1.6rem;
      color: #666b70;

      & + p {
        color: #000831;
        font-size: 1.4rem;
        margin-top: -0.25rem;
      }
    }
  }

  img {
    max-width: 4.4rem;
    max-height: 4.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border: 2px solid #f0f0f0;
  }

  button {
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 1.8rem;

    &:hover {
      border-radius: var(--normal-radius);
      box-shadow: 1px 1px 1px var(--gray);
      border: 0.5px solid gainsboro;
    }
  }
}
.col-12 {
  padding-right: 0;
}
.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
}
</style>